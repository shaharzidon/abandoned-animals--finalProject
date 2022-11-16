import React from 'react'
import AnimalCards from '../../components/AnimalCards/AnimalCards'
import AreaDropdown from '../../components/AreaDropdown/AreaDropdown'

export default function () {
    return (
        <div>
            <div dir='rtl'>זהו העמוד של הפקח</div>
            <AreaDropdown></AreaDropdown>
            <AnimalCards></AnimalCards>
        </div>
    )
}
