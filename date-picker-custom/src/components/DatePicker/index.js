import React, { useState } from 'react'
import { PickWrapper, Header } from './styled'
import { monthNames } from '../../consts'

const DatePicker = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    return (
        <div>
            <PickWrapper>
                <Header>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <p>{monthNames[currentMonth]}</p>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </Header>
            </PickWrapper>
        </div>

    )
}

export default DatePicker