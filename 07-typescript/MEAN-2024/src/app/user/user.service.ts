import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // HTTPClient
  constructor(private http: HttpClient) {

  }

  // Use Promise
  getDataPromise(){
    return fetch("https://jsonplaceholder.typicode.com/users");
  }

  // Observable
  getData() {
    return this.http.get<user[]>("https://jsonplaceholder.typicode.com/users");
  }
}
