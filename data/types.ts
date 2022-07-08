export interface TimeTableRow {
  stationShortCode: string
  stationUICCode: number
  countryCode: string
  type: string
  trainStopping: true
  commercialStop: true
  commercialTrack: string
  cancelled: false
  scheduledTime: string
}

export interface Train {
  trainNumber: number
  departureDate: string
  operatorUICCode: number
  operatorShortCode: string
  trainType: string
  trainCategory: string
  commuterLineID: string
  runningCurrently: true
  cancelled: false
  version: number
  timetableType: string
  timetableAcceptanceDate: string
  timeTableRows: TimeTableRow[]
}

export interface Weather {
  location: {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
  }
  current: {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: {
      text: string
      icon: string
      code: number
    }
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    vis_km: number
    vis_miles: number
    uv: number
    gust_mph: number
    gust_kph: number
    air_quality: {
      co: number
      no2: number
      o3: number
      so2: number
      pm2_5: number
      pm10: number
      "us-epa-index": number
      "gb-defra-index": number
    }
  }
  forecast: {
    forecastday: [
      {
        date: "2022-07-08"
        date_epoch: number
        day: {
          maxtemp_c: number
          maxtemp_f: number
          mintemp_c: number
          mintemp_f: number
          avgtemp_c: number
          avgtemp_f: number
          maxwind_mph: number
          maxwind_kph: number
          totalprecip_mm: number
          totalprecip_in: number
          avgvis_km: number
          avgvis_miles: number
          avghumidity: number
          daily_will_it_rain: number
          daily_chance_of_rain: number
          daily_will_it_snow: number
          daily_chance_of_snow: number
          condition: {
            text: string
            icon: string
            code: number
          }
          uv: number
        }
        astro: {
          sunrise: string
          sunset: string
          moonrise: string
          moonset: string
          moon_phase: string
          moon_illumination: string
        }
      }
    ]
  }
}
