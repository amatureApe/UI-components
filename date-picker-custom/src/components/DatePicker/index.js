import React, { useState } from 'react'
import { PickWrapper, Header, Body, SevenColGrid } from './styled'
import { monthNames } from '../../consts'
import { getNumberOfDaysInMonth, getSortedDays, range } from '../../utils'

const DatePicker = ({ minDate, maxDate }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    const [selectedDate, setSelectedDate] = useState(null)

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

    const handleSelection = (event) => {
        if (event.target.id === "day") {
            setSelectedDate(
                new Date(currentYear, currentMonth, event.target.getAttribute("data-day"))
            )
        }
    }

    const getTimeFromState = (day) => {
        return new Date(currentYear, currentMonth, day).getTime()
    }

    return (
        <div>
            <PickWrapper>
                <Header>
                    <button onClick={prevMonth} disabled={minDate?.getTime() > getTimeFromState(1)}>
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </button>
                    <p>{monthNames[currentMonth]} {currentYear}</p>
                    <button onClick={nextMonth} disabled={maxDate?.getTime() < getTimeFromState(getNumberOfDaysInMonth(currentYear, currentMonth))}>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </button>
                </Header>
                <Body>
                    <SevenColGrid heading>
                        {getSortedDays(currentYear, currentMonth).map((day) => (
                            <p>{day}</p>
                        ))}
                    </SevenColGrid>

                    <SevenColGrid onClick={handleSelection}>
                        {range(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1).map((day) => (
                            <button
                                id="day"
                                data-day={day}
                                disabled={
                                    minDate?.getTime() > getTimeFromState(day) || maxDate?.getTime() > getTimeFromState(day)
                                }
                                className={selectedDate?.getTime() ===
                                    new Date(currentYear, currentMonth, day).getTime()
                                    ? "active"
                                    : ""
                                }
                            >
                                {day}
                            </button>
                        ))}
                    </SevenColGrid>
                </Body>
            </PickWrapper>
        </div>

    )
}

export default DatePicker