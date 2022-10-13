export interface WeatherData {
    queryCost: number
    latitude: number
    longitude: number
    resolvedAddress: string
    address: string
    timezone: string
    tzoffset: number
    description: string
    days: Day[]
    alerts: any[]
    stations: Stations
    currentConditions: CurrentConditions
  }
  
  export interface Day {
    datetime: string
    datetimeEpoch: number
    temp_max: number
    temp_min: number
    temp: number
    feelslikemax: number
    feelslikemin: number
    feelslike: number
    dew: number
    humidity: number
    precip: number
    precipprob: number
    precipcover: number
    preciptype: string[]
    snow: number
    snowdepth: number
    windgust: number
    windspeed: number
    winddir: number
    pressure: number
    cloudcover: number
    visibility: number
    solarradiation: number
    solarenergy: number
    uvindex: number
    severerisk: number
    sunrise: string
    sunriseEpoch: number
    sunset: string
    sunsetEpoch: number
    moonphase: number
    conditions: string
    description: string
    icon: string
    stations: string[]
    source: string
    hours: Hour[]
  }
  
  export interface Hour {
    datetime: string
    datetimeEpoch: number
    temp: number
    feelslike: number
    humidity: number
    dew: number
    precip: number
    precipprob: number
    snow: number
    snowdepth: number
    preciptype?: string[]
    windgust: number
    windspeed: number
    winddir: number
    pressure: number
    visibility: number
    cloudcover: number
    solarradiation: number
    solarenergy?: number
    uvindex: number
    severerisk: number
    conditions: string
    icon: string
    stations?: string[]
    source: string
  }
  
  export interface Stations {
    NZAA: Nzaa
    C4778: C4778
  }
  
  export interface Nzaa {
    distance: number
    latitude: number
    longitude: number
    useCount: number
    id: string
    name: string
    quality: number
    contribution: number
  }
  
  export interface C4778 {
    distance: number
    latitude: number
    longitude: number
    useCount: number
    id: string
    name: string
    quality: number
    contribution: number
  }
  
  export interface CurrentConditions {
    datetime: string
    datetimeEpoch: number
    temp: number
    feelslike: number
    humidity: number
    dew: number
    precip: number
    precipprob: any
    snow: number
    snowdepth: number
    preciptype: any
    windgust: any
    windspeed: number
    winddir: number
    pressure: number
    visibility: number
    cloudcover: number
    solarradiation: number
    solarenergy: any
    uvindex: number
    conditions: string
    icon: string
    stations: string[]
    sunrise: string
    sunriseEpoch: number
    sunset: string
    sunsetEpoch: number
    moonphase: number
  }
  