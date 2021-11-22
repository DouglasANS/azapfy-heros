import React from 'react'
import { SetIconAligment } from '../utils/SetIconAligment'
import styles from '../styles/Card.module.scss'

export default function Card( {heros} ) {
    const {
        id,
        name,
        img,
        alignment,
        race,
      } = heros
    
    function allInfoHero(){
        
    }
    

    return (
        <div onClick={allInfoHero}  className={styles.container}>
            <img src={img} alt="Hero"/>
            <div className={styles.content}>
                <div>

                </div>
                <div>
                    <h1>{name}</h1>
                    <h2>Race: {race}</h2> 
                    <div>
                        <img src={SetIconAligment(alignment)} alt="IconAlignment" />
                        <h1>{id}</h1>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
