import dayjs from 'dayjs'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Junaaikataulut from '../components/Junaaikataulut'
import Perhekalenteri from '../components/Perhekalenteri'
import Saaennuste from '../components/Saatila'
import Sadetutka from '../components/Sadetutka'
import { Train, Weather } from '../data/types'

type Props = {
  trainData: Train[],
  weatherData: Weather,
}

const Home: NextPage<Props> = (props) => {
  setInterval(() => {
    window.location.reload()
  }
  , (1000 * 60))

  return (
    <div className={styles.container}>
      <h1>{dayjs().format("dddd DD.MM.YYYY klo HH:mm")}</h1>
      <div className="elements">
        <div className='element'><Saaennuste data={props.weatherData} /></div>
        <div className='element'><Sadetutka /></div>
        <div className='element'><Perhekalenteri /></div>
        <div className='element'><Junaaikataulut data={props.trainData} /></div>
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  // Train data
  const startDate = dayjs().toISOString()
  const endDate = dayjs().add(2, 'hour').toISOString()
  const limitTrainAmount = 30
  const departureStation = "TPE"
  const arrivalStation = "HL"

  const trainResponse = await fetch(`https://rata.digitraffic.fi/api/v1/live-trains/station/${departureStation}/${arrivalStation}?startDate=${startDate}&endDate=${endDate}&limit=${limitTrainAmount}`)
  const trainData = await trainResponse.json()

  // Weather data
  const weatherApiKey = "caa754609a724c349e362100220807"
  const weatherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=Tampere&aqi=yes`)
  const weatherData = await weatherResponse.json()

  return {
    props: {
      trainData,
      weatherData
    }
  }
}