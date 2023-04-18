export interface CitiesParams {
  minPopulation: number;
  namePrefix: string;
  limit?: number;
}
export interface WeatherParams {
  lat: number;
  lon: number;
  appid: string;
  units: 'standard' | 'metric' | 'imperial';
}
export interface City {
  city: string;
  country: string;
  countryCode: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  region: string;
  regionCode: string;
  type: string;
  wikiDataId: string;
}
export interface WeatherParams {
  lat: number;
  lon: number;
  appid: string;
  units: 'standard' | 'metric' | 'imperial';
}
export interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
export interface WindData {
  speed: number;
  deg: number;
  gust: number;
}
interface WeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Location {
  lon: number;
  lat: number;
}
export interface Cloudiness {
  all: number;
}
export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
export interface Weather {
  coord: Location;
  weather: WeatherData[];
  base: string;
  main: MainData;
  visibility: number;
  wind: WindData;
  clouds: Cloudiness;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
interface CityForecast {
  id: number;
  name: string;
  coord: { lat: number; lon: number };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
export interface SysForecast {
  pod: string;
}
export interface ForecastItem {
  dt: number;
  main: MainData;
  weather: Weather[];
  clouds: Cloudiness;
  wind: WindData;
  visibility: number;
  pop: number;
  sys: SysForecast;
  dt_txt: string;
}
export interface Forecast {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: CityForecast;
}
