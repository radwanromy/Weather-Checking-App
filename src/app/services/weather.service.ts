import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
        // .set(environment.locationHeaderName, environment.locationHeaderValue),
      params: new HttpParams()
        // .set(environment , cityName)
        // .set('address' ,cityName)
        .set('unitGroup', 'us') 
        // .set('mode', 'json')
    })
  }
}