import React, { useContext, useState } from 'react'
import styles from '../styles/Home.module.scss'
import { DataContext } from '../context/DataContext'
import Card from '../component/Card'
export default function Home() {

    const {allHeros} = useContext(DataContext)
    const [search, setSearch] = useState('')

    function heros(){
        const publisher = []


        for(var i = 0; i< allHeros.length; i++){
            publisher.push(allHeros[i])           
        }

        var arrSemDuplicados = [...new Set(publisher)];
        
        console.log(arrSemDuplicados)
        //console.log(allHeros.data[0].biography.publisher)
        //console.log(publisher.indexOf(allHeros.data[0].biography.publisher))
        //console.log(publisher.indexOf(allHeros.data[0].biography.publisher))

        //publisher.push(allHeros.data[i].appearance.race) 
        //publisher.push(allHeros.data[i].biography.alignment)
        //publisher.push(allHeros.data[i].biography.publisher)
    }



    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <button onClick={heros}>show heros</button>
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
                                race: item.appearance.race
                            }} />
                        </div>
                    )
                })
            }
            </div>
           
            
        </div>
    )
}
