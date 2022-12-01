import React, { useState } from 'react'
import { PickWrapper, Header, Body, SevenColGrid } from './styled'
import { monthNames } from '../../consts'
import { getNumberOfDaysInMonth, getSortedDays, range } from '../../utils'

const DatePicker = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    return (
        <div>
            <PickWrapper>
                <Header>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <p>{monthNames[currentMonth]} {currentYear}</p>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </Header>
                <Body>
                    <SevenColGrid heading>
                        {getSortedDays().map((day) => (
                            <p>{day}</p>
                        ))}
                    </SevenColGrid>

                    <SevenColGrid>
                        {range(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1).map((day) => (
                            <p>{day}</p>
                        ))}
                    </SevenColGrid>
                </Body>
            </PickWrapper>
        </div>

    )
}

export default DatePicker