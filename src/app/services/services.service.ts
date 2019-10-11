import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { User } from './Model/User';
import { ApiResponse } from './Model/api-response';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http: HttpClient) { }
  baseUrl: = 'http://localhost:8080/logreg/';
  createUser(user: User): Observable<ApiResponse> {
  	return this.http.post<ApiResponse>(this.baseUrl + '/insert.php', user);
  }
}
