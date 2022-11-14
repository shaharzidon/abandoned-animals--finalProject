import React from 'react'
import LogInModal from '../../components/LogInModal/LogInModal'
import PetForm from '../../components/PetForm/PetForm'
import OlderForm from '../../components/OlderForm/OlderForm'

export default function MainPage() {
    return (
        <div>
            <div dir='rtl'>זהו העמוד הראשון שכולם רואים באתר</div>
            <OlderForm></OlderForm>
            <PetForm></PetForm>
            <LogInModal></LogInModal>
        </div>
    )
}
