import { Weather } from '../data/types'

type Props = {
    data: Weather
}
const Saaennuste = ({ data }: Props) => {
    return (
        <>
            <h2>Sää nyt</h2>
            <span>Lämpötila: {data.current.temp_c} °C, tuntuu {data.current.feelslike_c} °C</span><br />
            <span>Yleismeno: {data.current.condition.text}</span><br />
            <span>Tuuli: {Math.round(data.current.wind_kph / 3.6)} m/s</span><br />
            <h2>Sää tänään</h2>
            <span>Lämpötila: {data.forecast.forecastday[0].day.mintemp_c} - {data.forecast.forecastday[0].day.maxtemp_c} °C</span><br />
            <span>Sateen mahdollisuus: {data.forecast.forecastday[0].day.daily_chance_of_rain}%</span><br />
            {data.forecast.forecastday[0].day.daily_chance_of_rain ? `Sademäärä: ${data.forecast.forecastday[0].day.totalprecip_mm} mm ${<br />}`: ""}
        </>
    )
}
export default Saaennuste