import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Activity } from './activity.interface';

@Injectable({
  providedIn: 'root',
})
export class BoredService {
  private http = inject(HttpClient);

  getRandomActivity(): Observable<Activity> {
    return this.http
      .get<Activity>('/api/random')
      .pipe(catchError(this.handleError));
  }

  getFilteredActivities(type: string): Observable<Activity> {
    return this.http.get<Activity[]>(`/api/filter?type=${type}`).pipe(
      map((activities: Activity[]) => {
        const randomIndex = Math.floor(Math.random() * activities.length);
        return activities[randomIndex];
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 429) {
      return throwError(() => new Error('Too Many Requests'));
    }
    return throwError(() => new Error('Something went wrong'));
  }
}
