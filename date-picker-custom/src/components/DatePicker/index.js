import React, { useState } from 'react'
import { PickWrapper, Header, Body, SevenColGrid } from './styled'
import { monthNames } from '../../consts'
import { getNumberOfDaysInMonth, getSortedDays, range } from '../../utils'

const DatePicker = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    const nextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth(prev => prev + 1)
        } else {
            setCurrentMonth(0)
            setCurrentYear(prev => prev + 1)
        }
    }

    const prevMonth = () => {
        if (currentMonth > 0) {
            setCurrentMonth(prev => prev - 1)
        } else {
            setCurrentMonth(11)
            setCurrentYear(prev => prev - 1)
        }
    }

    return (
        <div>
            <PickWrapper>
                <Header>
                    <ion-icon name="chevron-back-outline" onClick={prevMonth}></ion-icon>
                    <p>{monthNames[currentMonth]} {currentYear}</p>
                    <ion-icon name="chevron-forward-outline" onClick={nextMonth}></ion-icon>
                </Header>
                <Body>
                    <SevenColGrid heading>
                        {getSortedDays(currentYear, currentMonth).map((day) => (
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