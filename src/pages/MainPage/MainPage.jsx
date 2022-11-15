import React from 'react'
import LogInModal from '../../components/LogInModal/LogInModal'

import FormsButton from '../../components/FormsButton/FormsButton'


export default function MainPage() {
    return (
        <div>
            <div dir='rtl'>זהו העמוד הראשון שכולם רואים באתר</div>
            <FormsButton></FormsButton>
            <LogInModal></LogInModal>
        </div>
    )
}
