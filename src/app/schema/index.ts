const { gql } = require('apollo-server-express');
const cityShema = `
    type City {
        city: String
        country: String
        countryCode: String
        id: String
        latitude: String
        longitude: String
        name: String
        population: Int
        region: String
        regionCode: String
        type: String
        wikiDataId: String
    }
`;
const weatherSchema = `
    type MainData {
        temp: Float
        feels_like: Float
        temp_min: Float
        temp_max: Float
        pressure: Float
        humidity: Float
        sea_level: Float
        grnd_level: Float
    }
    type WindData {
        speed: Float
        deg: Float
        gust: Float
    }
    type WeatherData {
        id: Int
        main: String
        description: String
        icon: String
    }
    type Location {
        lon: Float
        lat: Float
    }
    type Cloudiness { 
        all: Float 
    }
    type Sys {
        type: Float
        id: Float
        country: String
        sunrise: Float
        sunset: Float
    }
    type Weather {
        coord: Location
        weather: [WeatherData]
        base: String
        main: MainData
        visibility: Float
        wind: WindData
        clouds: Cloudiness
        dt: Float
        sys: Sys
        timezone: Float
        id: Int
        name: String
        cod: Float
    }
`;
const forecastSchema = `
    type CityForecast {
        id: Int
        name: String
        coord: Location
        country: String
        population: Float
        timezone: Float
        sunrise: Float
        sunset: Float
    }
    type SysForecast {
        pod: String
    }
    type ForecastItem {
        dt: Float
        main: MainData
        weather: [Weather]
        clouds: Cloudiness
        wind: WindData
        visibility: Float
        pop: Float
        sys: SysForecast
        dt_txt: String
    }
    type Forecast {
        cod: String
        message: Float
        cnt: Float
        list: [ForecastItem]
        city: City
    }
`;
const schema = gql`
  ${cityShema}
  ${weatherSchema}
  ${forecastSchema}
  type Query {
    cities(minPopulation: Int, namePrefix: String, limit: Int): [City]
    weather(lat: Float!, lon: Float!, appid: String!, units: String!): Weather
    forecast(lat: Float!, lon: Float!, appid: String!, units: String!): Forecast
  }
`;

export default schema;
