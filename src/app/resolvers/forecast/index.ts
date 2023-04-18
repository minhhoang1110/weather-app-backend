import { Forecast, ForecastItem, WeatherParams } from '../../../types';
import { DEFAULT_LAT, DEFAULT_LON } from '../../constants';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { convertParams } from '../../helpers/params';
const getForecasteData = async (args: WeatherParams) => {
  const params: WeatherParams = {
    lat: args.lat || DEFAULT_LAT,
    lon: args.lon || DEFAULT_LON,
    appid: process.env.OPEN_WHEATHER_KEY || '',
    units: 'metric'
  };
  const options: AxiosRequestConfig<any> = {
    method: 'GET',
    url: `${process.env.OPEN_WHEATHER_API_URI}/forecast${convertParams(params)}`
  };
  const res: AxiosResponse<any, any> = await axios.request(options);
  const forecast: Forecast = res.data as Forecast;
  const list: ForecastItem[] = forecast.list.slice(0, 20);
  return { ...forecast, list };
};
export const forecast = async (parent: any, args: WeatherParams) =>
  await getForecasteData(args);
