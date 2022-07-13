import Saatila from "./Saatila"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

const weatherData = {
  current: {
    wind_kph: 20,
    temp_c: 30,
    feelslike_c: 29,
    condition: {
      text: 'inferno'
    },
  },
  forecast: {
    forecastday: [{
      day: {
        mintemp_c: 10,
        maxtemp_c: 20,
        daily_chance_of_rain: 30,
        totalprecip_mm: 20
      }
    }]
  }
}

describe("weather component", () => {
  it("renders all texts", () => {
    render(<Saatila data={weatherData} />)
    expect(screen.getByText("Sää nyt")).toBeInTheDocument()
    expect(screen.getByText("Lämpötila: 30 °C, tuntuu 29 °C")).toBeInTheDocument()
    expect(screen.getByText("Sää tänään")).toBeInTheDocument()
    expect(screen.getByText("Lämpötila: 10 - 20 °C")).toBeInTheDocument()
    expect(screen.getByText("Sateen mahdollisuus: 30%")).toBeInTheDocument()
    expect(screen.getByText("Sademäärä: 20 mm")).toBeInTheDocument()
  })
})
