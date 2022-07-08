import dayjs from 'dayjs'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Junaaikataulut from './components/Junaaikataulut'
import Perhekalenteri from './components/Perhekalenteri'
import Saaennuste from './components/Saatila'
import Sadetutka from './components/Sadetutka'
import { Train, Weather } from './data/types'

type Props = {
  trainData: Train[],
  weatherData: Weather,
}

const Home: NextPage<Props> = (props) => {
  return (
    <div className={styles.container}>
      <h1>Infonäyttö</h1>
      <Saaennuste data={props.weatherData}/>
      <Sadetutka />
      <Perhekalenteri />
      <Junaaikataulut data={props.trainData} />
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