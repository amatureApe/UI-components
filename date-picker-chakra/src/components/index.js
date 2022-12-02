import React, { useState } from 'react'
import { Box, Stack, Input, Text, Heading, Button, Grid, GridItem, Divider, Spacer } from '@chakra-ui/react'
import { monthNames } from '../consts'
import { getNumberOfDaysInMonth, getSortedDays, range } from '../utils'
import { ChevronLeftIcon, ChevronRightIcon, TimeIcon } from '@chakra-ui/icons'

const DatePicker = ({ minDate, maxDate }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const [currentDay, setCurrentDay] = useState(new Date().getDate())
    const [selectedDate, setSelectedDate] = useState(null)
    const [timestamp, setTimestamp] = useState(Date.now())

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
        let day = event.target.value
        setCurrentDay(day)
        setSelectedDate(
            new Date(currentYear, currentMonth, day)
        )
        setTimestamp(Date.UTC(currentYear, currentMonth, day, 0))
    }

    const getTimeFromState = (day) => {
        return new Date(currentYear, currentMonth, day).getTime()
    }

    console.log(Date.now())

    return (
        <Box borderRadius={10} w={500} bg="rgba(255, 73, 147, 0.2)" p={5}>
            <Box p={5} bg="#202023" borderRadius={10}>
                <Stack direction="row" justify="space-between" mb={4}>
                    <Button size="sm" color="#FF4993">
                        <ChevronLeftIcon />
                    </Button>
                    <Heading>{monthNames[currentMonth]} {currentYear}</Heading>
                    <Button size="sm" color="#FF4993">
                        <ChevronRightIcon />
                    </Button>
                </Stack>
                <Box>
                    <Grid templateColumns='repeat(7, 1fr)' justifyItems="center" px={5}>
                        {getSortedDays(currentYear, currentMonth).map((day) => (
                            <GridItem>
                                <Heading fontSize="14px">{day}</Heading>
                            </GridItem>
                        ))}
                    </Grid>
                </Box>
                <Divider bg="#FF4993" mt={3} />
                <Box px={5} pt={2} pb={5}>
                    <Stack direction="row" justify="center" align="center" mb={2}>
                        <Text ml={10} fontSize={14} bg="pink.800" borderRadius={10} p={0.5}>{timestamp}</Text>
                        <Button size="sm" variant="ghost" _hover={{ bg: "pink.800" }} onClick={() => setTimestamp(Date.now())}>!</Button>
                    </Stack>
                    <Grid templateColumns='repeat(7, 1fr)' gap={2} justifyItems="center">
                        {range(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1).map((day) => (
                            <GridItem>
                                <Button
                                    color="whiteAlpha.900"
                                    bg="#FF4993"
                                    isActive={currentDay == day ? true : false}
                                    _active={{
                                        bg: 'pink.800',
                                        transform: 'scale(1.15)',
                                        borderWidth: "1px",
                                        borderColor: '#FF4993',
                                    }} size="sm" w={10} value={day} onClick={handleSelection}
                                >
                                    {day}
                                </Button>
                            </GridItem>
                        ))}
                        {range(getNumberOfDaysInMonth(currentYear, currentMonth), 34).map((day) => (
                            <GridItem>
                                <Spacer />
                            </GridItem>
                        ))}
                        <GridItem>
                            <Button bg="#FF4993" color="whiteAlpha.800" size="sm" w={10}>
                                <TimeIcon />
                            </Button>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default DatePicker