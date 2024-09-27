import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from './activity.interface';

@Injectable({
  providedIn: 'root'
})
export class BoredService {

  private http = inject(HttpClient);
// private baseUrl = 'https://bored-api.appbrewery.com';

/*
  getRandomActivity(): Observable<Activity> {
    return this.http.get<Activity>(`${this.baseUrl}/random`);
  }

  getFilteredActivities(type: string): Observable<Activity> {
    return this.http.get<Activity>(`${this.baseUrl}/filter?type=${type}`);
  }
*/

getRandomActivity(): Observable<any> {
  return this.http.get('/api/random');
}

getFilteredActivities(type: string): Observable<any> {
  return this.http.get(`/api/filter?type=${type}`);
}


}
