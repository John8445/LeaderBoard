import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Region } from './types';


@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(
    private http: HttpClient,
  ) { }

  getPlayers(): Observable<Region[]> {
    return this.http.get<Region[]>('/api/listings');
  }
}
