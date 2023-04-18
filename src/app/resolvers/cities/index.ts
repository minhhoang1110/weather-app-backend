import { CitiesParams, City } from '../../../types';
import { DEFAULT_LIMIT, MIN_POPULATION } from '../../constants';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { convertParams } from '../../helpers/params';
export const cities = async (parent: any, args: CitiesParams) => {
  const params: CitiesParams = {
    minPopulation: args.minPopulation || MIN_POPULATION,
    namePrefix: args.namePrefix || '',
    limit: args.limit || DEFAULT_LIMIT
  };
  const options: AxiosRequestConfig<any> = {
    method: 'GET',
    url: `${process.env.GEODB_API_URI}/cities${convertParams(params)}`,
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
  };
  const res: AxiosResponse<any, any> = await axios.request(options);
  const cities: City[] = res.data.data as City[];
  return cities;
};
