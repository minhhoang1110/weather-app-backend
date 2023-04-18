import { cities } from './cities';
import { weather } from './weather';
import { forecast } from './forecast';
const rootResolver = {
  Query: {
    cities,
    weather,
    forecast
  }
};
export default rootResolver;
