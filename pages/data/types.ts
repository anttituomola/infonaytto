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
