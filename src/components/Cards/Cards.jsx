import React from 'react'
import { useEffect, useState } from 'react'
import PetCard from '../PetCard/PetCard'
import axios from 'axios'
import './cards.css'


export default function Cards() {
    const [allReports, setAllReports] = useState([])
    const [counter, setCounter] = useState("")
    const [counterb, setCounterb] = useState(0)

    const getAnimals = () => {
        axios.get(`https://eager-petticoat-hare.cyclic.app/api/animals`)
            .then((res) => {
                res.data && setAllReports([...res.data])
                console.log(allReports);
                setCounter(allReports.length)
            })
    }
    useEffect(() => {
        // function a() {
        //     getAnimals()
        //     if (counterb < counter) {
        //         alert('התווסף דיווח חדש')
        //         setCounterb(counter)
        //     }
        // }
        // a()
        getAnimals()

    }, [])

    return (
        <div className='cards-container'>
            {allReports.map((report) => {
                return (
                    <PetCard report={report}></PetCard>
                )
            })}
        </div>
    )
}


// function Home() {
//   return (
//     <div className="home">
//       <PetCards id={id} image={images} problem={problem} type={type} name={name} phone={phone} email={email} size={size} vailent={vailent} place={place} time={time} exstraD={exstraD}></PetCards>
//       <Footer />
//     </div>
//   );
// }