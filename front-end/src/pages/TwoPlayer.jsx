import React, { useRef, useEffect,useState } from 'react'
import useGame from '../hooks/useGame'

import {ENDPOINT} from '../constants'
import Board from '../components/Board'
import socketIOClient from "socket.io-client";
import { calculateWinner,containsNull } from '../helpers';
import styles from '../styles/Game.module.css'
import { useHistory } from "react-router-dom";
import GameModal from '../components/GameModal';
import Button from '../components/Button';


export default function TwoPlayer() {

    const game = useGame()
    const [room, setRoom] = useState('')
    const [msg, setMsg] = useState('')
    const [rematchRequests, setRematchRequests] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const histroy = useHistory()
    const [wantRematch, setWantRematch] = useState(false)
    const {resetSquares,squares} = game

    

   
    const socketRef = useRef()

    /**
     * Add the given respond to rematch requests array and server if user did not give a responds
     * @param {Boolean} res 
     */
    const handleRematch = (res) => {

        if (wantRematch) {
            
            return
        }
        
       setWantRematch(res)
       setRematchRequests(requests => [...requests,res])
       socketRef.current.emit('Rematch',res,room)

    }



    const handleClick = (i,x) => {

        if (calculateWinner(game.squares) || !containsNull(game.squares) || wantRematch ||  game.squares[i]) {
                        
         
            return
        }

        socketRef.current.emit('Mark',room,i)
        
    }

    useEffect(() => {
        
        const socket = socketIOClient(ENDPOINT)

        socketRef.current = socket

        socketRef.current.emit('Join Game')

        socketRef.current.on('Start Game',(room) => {

            setRoom(room)
             
        })

        socketRef.current.on('Rematch', (res) => {
         

            setRematchRequests(requests => [...requests,res])

            

        })


        socketRef.current.on('Join Game',(x) => {


            if (!x) {

                
                game.toggleX()
            }


            socketRef.current.on('Mark',(i,x) => {

                
                game.markSquare(i,x)
                game.toggleXTurn()
            })
        
        })


         socketRef.current.on('Leave Game',(msg) => {

            
              setMsg(msg)

                  
         })
        return () => {
            
            socketRef.current.close()
        }
    }, [])


    useEffect(() => {
       
        if (calculateWinner(squares) || !containsNull(squares)) {
            
            setIsOpen(true)
        }
        if (rematchRequests.includes(false)) {

        
           socketRef.current.emit('Leave Game',room,'Game Over, click to go to the main menu')
           setIsOpen(false)
        }
        else if (rematchRequests.length === 2) {
            
            setIsOpen(false)
            resetSquares()
            setRematchRequests([])
            setWantRematch(false)
        }
       
    }, [rematchRequests,resetSquares,histroy,squares,room])

    
    if (!room) {
        
       return <h2> Waiting for the other player </h2>
    }


    return (
        <div className = {styles.game}>
            {msg &&  <Button text = {msg}  handleClick = {() => histroy.push('/')}/>}
            <Board  handleClick = {handleClick} {...game}  />
            {isOpen &&             <GameModal wantRematch = {wantRematch}  rematchRequests = {rematchRequests} handleRematch = {handleRematch} />}
        </div>
    )
}
