import React from 'react'
import LogInModal from '../../components/LogInModal/LogInModal'
import PetForm from '../../components/PetForm/PetForm'

export default function MainPage() {
    return (
        <div>
            <div dir='rtl'>זהו העמוד הראשון שכולם רואים באתר</div>
            <PetForm></PetForm>
            <LogInModal></LogInModal>
        </div>
    )
}
