import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth.model';
import { user } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private profileStore = new BehaviorSubject<user>({} as user);
  profileStore$ = this.profileStore.asObservable();

  private apiUrl: string = `${environment.API_URL}/api/auth`;
  constructor(private http: HttpClient, private tokenService: TokenService) {}
  login(email: string, password: string) {
    return this.http
      .post<Auth>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((response) => {
          this.tokenService.saveToken(response.access_token);
          console.log('Estoy en Auth Service');
        })
      );
  }

  profile() {
    //let headers = new HttpHeaders();
    //headers = headers.set('Authorization', `Bearer ${token}`);
    console.log('Estoy en profile Auth Service');
    return this.http.get<user>(`${this.apiUrl}/profile`, {
      //headers,
    });
    console.log('Estoy en Auth Service');
  }

  fetchLoginAndProfile(email: string, password: string) {
    return this.login(email, password).pipe(switchMap((rta) => this.profile()));
  }
}
