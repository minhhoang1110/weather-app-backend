import { Weather, WeatherParams } from '../../../types';
import { DEFAULT_LAT, DEFAULT_LON } from '../../constants';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { convertParams } from '../../helpers/params';
const getWeatherData = async (args: WeatherParams) => {
  const params: WeatherParams = {
    lat: args.lat || DEFAULT_LAT,
    lon: args.lon || DEFAULT_LON,
    appid: process.env.OPEN_WHEATHER_KEY || '',
    units: 'metric'
  };
  const options: AxiosRequestConfig<any> = {
    method: 'GET',
    url: `${process.env.OPEN_WHEATHER_API_URI}/weather${convertParams(params)}`
  };
  const res: AxiosResponse<any, any> = await axios.request(options);
  const weather: Weather = res.data as Weather;
  return weather;
};
export const weather = async (parent: any, args: WeatherParams) =>
  await getWeatherData(args);
