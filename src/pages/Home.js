import React, { useContext, useState } from 'react'
import styles from '../styles/Home.module.scss'
import { DataContext } from '../context/DataContext'
import Card from '../component/Card'
export default function Home() {

    const {allHeros} = useContext(DataContext)
    const [search, setSearch] = useState('')




    return (
        <div className={styles.container}>
            <input type="text" placeholder="Search..." onChange={(event)=>{setSearch(event.target.value)}} />
            <div className={styles.cards}>            
            {
                allHeros.filter((val)=>{
                    if(search === ""){
                        return val
                    }else if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                }).map((item)=>{
                    return(
                        <div key={item.id}>
                            <Card heros={{ 
                                id: item.id,
                                name: item.name,
                                img: item.images.md,
                                alignment: item.biography.alignment,
                                race: item.appearance.race,
                                eyeColor: item.appearance.eyeColor,
                                gender: item.appearance.gender,
                                hairColor: item.appearance.hairColor,
                                weight: item.appearance.weight[1],
                                height: item.appearance.height[1],
                                firstAppearance: item.biography.firstAppearance,
                                fullName: item.biography.fullName,
                                publisher: item.biography.publisher,
                                combat: item.powerstats.combat,
                                durability: item.powerstats.durability,
                                intelligence: item.powerstats.intelligence,
                                power: item.powerstats.power,
                                speed: item.powerstats.speed,
                                strength: item.powerstats.strength,
                            }} />
                        </div>
                    )
                })
            }
            </div>
           
            
        </div>
    )
}
