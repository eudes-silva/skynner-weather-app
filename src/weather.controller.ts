import { Get, Controller, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async root(@Query() query): Promise<any> {
    const response = await this.weatherService.ofCity(query);
    return response;
  }
}
