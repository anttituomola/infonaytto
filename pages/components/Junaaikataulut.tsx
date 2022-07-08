import dayjs from 'dayjs'

type Props = {
  data: {}[]
}
const Junaaikataulut = ({ data }: Props) => {
  console.log(data)

  // Filter out cargo and test trains
  const filteredTrains = data.filter(train => {
    return train.trainCategory !== "Cargo" && train.trainCategory !== "Test drive"
  })

  const nextTrains = filteredTrains.map(train => {
    const departuresFromTPE = train.timeTableRows.filter(row => row.stationShortCode === 'TPE')
    const arrivesAtHL = train.timeTableRows.filter(row => row.stationShortCode === 'HL')
    console.log(arrivesAtHL)

    return <div key={train.trainNumber}>
      <div>
        <p>Juna {train.trainType}-{train.trainNumber} ({train.trainCategory} {train.commuterLineID ? train.commuterLineID : ""})
          lähtee klo&nbsp;
          <strong>{dayjs(departuresFromTPE[0].scheduledTime).format("HH:mm")} </strong>
          raiteelta {departuresFromTPE[0].commercialTrack} ja saapuu Hämeenlinnaan klo&nbsp;
          <strong>{dayjs(arrivesAtHL[0].scheduledTime).format("HH:mm")}</strong>.
          <p>Matkan kesto: {dayjs(arrivesAtHL[0].scheduledTime).diff(dayjs(departuresFromTPE[0].scheduledTime), "minutes")} minuuttia</p>
        </p>
      </div>
    </div>
  })
  return (
    <>
      <h1>Juna-aikataulut</h1>
      {nextTrains}
    </>
  )
}

export default Junaaikataulut
