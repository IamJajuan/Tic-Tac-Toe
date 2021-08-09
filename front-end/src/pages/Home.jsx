import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'
export default function Home() {

    const history = useHistory()
    return (
        <div className = {styles.container}  >

             <h1 className = {styles.title}>Tic-Tac-Toe</h1>  
            <Button text = "Single Player" handleClick = {() => history.push('/SinglePlayer')}   />
            <Button text = "Two Player"  handleClick = {() => history.push('/TwoPlayer')} />            
        </div>
    )
}
