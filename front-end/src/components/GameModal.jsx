import React, {  useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

import styles from '../styles/GameModal.module.css'

  

function GameModal(props) {

  const {handleRematch,wantRematch} = props
  const [msg, setMsg] = useState("Would you like a rematch?")
  


 useEffect(() => {
  if (wantRematch)  {
    
    setMsg('Waiting on the other player')
  }
  
 }, [wantRematch])

  
    return (
        
      <dialog className ={styles.dialog} open >

        <h2  className = {styles.title} >
          
         {msg}
          </h2> 
      
      {!wantRematch && <React.Fragment>
        <Button text = "Accept" handleClick = {() => handleRematch(true)} />
      <Button  text ="Decline"  handleClick = {() => handleRematch(false)} />
      </React.Fragment>
      
      }
  </dialog>
    )
}


GameModal.propTypes = {

  handleRematch: PropTypes.func,
  wantRematch:PropTypes.bool,
}

export default GameModal