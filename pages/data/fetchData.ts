import dayjs from 'dayjs'

const startDate = dayjs().subtract(1, 'hour').toISOString()
const endDate = dayjs().add(2, 'hour').toISOString()
const limitTrainAmount = 30
const departureStation = "TPE"
const arrivalStation = "HL"
const junaApi = `https://rata.digitraffic.fi/api/v1/live-trains/station/${arrivalStation}/${departureStation}?startDate=${startDate}&endDate=${endDate}&limit=${limitTrainAmount}`

export const junaData = async () => {
    try {
        const response = await fetch(junaApi)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}