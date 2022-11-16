import { React, useState } from 'react'
import './formsButton.css'

import AnimalForm from '../../components/AnimalForm/AnimalForm'
import PetForm from '../PetForm/PetForm'
export default function FormsButton() {
    const [petForm, setPetForm] = useState(false)
    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked onClick={() => setPetForm(false)} />
                <label dir='rtl' className="btn btn-outline-primary" for="btnradio1">טופס דיווח חיה משוטטת</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onClick={() => setPetForm(true)} />
                <label dir='rtl' className="btn btn-outline-primary" for="btnradio2">טופס דיווח חיית מחמד אבודה</label>
            </div>
            <div>
                {petForm == false ? <AnimalForm /> : <PetForm />}
            </div>

        </div >
    )
}
