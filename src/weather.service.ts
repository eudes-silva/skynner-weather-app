import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class WeatherService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.hgbrasil.com/',
      params: {
        key: 'ccd7b9b5', //api limit requests = 10 different cities before key blocking
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
