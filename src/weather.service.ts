import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class WeatherService {
  private client: AxiosInstance;

  constructor() {
    const apiSecretKey = process.env.MY_API_KEY;
    this.client = axios.create({
      baseURL: 'https://api.hgbrasil.com/',
      params: {
        key: `${apiSecretKey}`, //api limit requests = 10 different cities before key blocking
      },
    });
  }

  async ofCity(city: string): Promise<any> {
    //external API data consumption and intermediate endpoint set
    const response = await this.client.get('weather', {
      params: { city_name: city },
    });
    const filteredData = {
      //response data filtering by cityName, date, time,temp,humidity and wind_speedy
      cityName: response.data.results.city,
      date: response.data.results.date,
      time: response.data.results.time,
      temp: response.data.results.temp,
      humidity: response.data.results.humidity,
      wind_speedy: response.data.results.wind_speedy,
    };
    return filteredData;
  }
}
