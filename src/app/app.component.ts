import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(private weatherService: WeatherService) {

  }


  ngOnInit(): void {
      this.weatherService.getWeatherData('Wellington').subscribe( {
       next: (response) => {
        console.log(response);
      }
    })
  }
}
