import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUserDTO, user } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl: string = 'https://young-sands-07814.herokuapp.com/api/users';
  constructor(private http: HttpClient) {}

  create(dto: CreateUserDTO) {
    return this.http.post<user>(this.apiUrl, dto);
  }

  getAll() {
    return this.http.get<user[]>(this.apiUrl);
  }
}
