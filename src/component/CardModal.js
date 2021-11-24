import React from 'react'
import styles from '../styles/CardModal.module.scss'
import { SetIconAligment } from '../utils/SetIconAligment'

export default function CardModal({heros}) {
    const {
        id,
        name,
        img,
        alignment,
        race,
        eyeColor,
        gender,
        hairColor,
        weight,
        height,
        fullName,
        publisher,
        combat,
        durability,
        intelligence,
        power,
        speed,
        strength,
      } = heros

    return (
        <div className={styles.container}>
            <figure>
                <img src={img} alt={name + " character image"} />
                <div>
                    <h2>Alignment: {alignment}</h2>
                    <img src={SetIconAligment(alignment)} alt={"Alignment: " + alignment}/>
                </div>
                
            </figure>
            <main>
                <header>
                    <h3>{id}</h3>
                    <h1>{name}</h1>
                    <h3>{fullName}</h3>
                </header>
                <h1>Stats</h1>
                <section>
                    <article>
                        <h3>Gender:</h3>
                        <h3>{gender}</h3>
                    </article>
                    <div  className={styles.line}></div>
                    <article>
                        <h3>HairColor:</h3>
                        <h3>{hairColor}</h3>
                    </article>
                    <div  className={styles.line}></div>
                    <article>
                        <h3>EyeColor:</h3>
                        <h3>{eyeColor}</h3>
                    </article>
                    <div  className={styles.line}></div>
                    <article>
                        <h3>Race:</h3>
                        <h3>{race}</h3>
                    </article>
                    <div  className={styles.line}></div>
                    <article>
                        <h3>Height:</h3>
                        <h3>{height}</h3>
                    </article>
                    <div  className={styles.line}></div>
                    <article>
                        <h3>Weight:</h3>
                        <h3>{weight}</h3>
                    </article>
                </section>
                <h1>Power Stats</h1>
                <section>
                    <article>
                        <h3>Combat:</h3>
                        <h3>{combat}</h3>
                    </article>
                    <div  className={styles.line}></div>
                    <article>
                        <h3>Durability:</h3>
                        <h3>{durability}</h3>
                    </article>
                    <div  className={styles.line}></div>
                    <article>
                        <h3>Intelligence:</h3>
                        <h3>{intelligence}</h3>
                    </article>
                    <div  className={styles.line}></div>
                    <article>
                        <h3>Power:</h3>
                        <h3>{power}</h3>
                    </article>
                    <div  className={styles.line}></div>
                    <article>
                        <h3>Speed:</h3>
                        <h3>{speed}</h3>
                    </article>
                    <div  className={styles.line}></div>
                    <article>
                        <h3>Strength:</h3>
                        <h3>{strength}</h3>
                    </article>
                </section>
                <h2>Publisher: {publisher}</h2>
            </main>
        </div>
    )
}
