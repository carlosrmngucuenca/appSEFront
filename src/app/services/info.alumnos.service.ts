import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import {
  alumno,
  CreateAlumnoDTO,
  UpdateAlumnoDTO,
} from '../models/alumno.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// 
@Injectable({
  providedIn: 'root',
})
export class InfoAlumnosService {
  private apiUrl: string = `${environment.API_URL}/api`;

  constructor(private http: HttpClient) {}

  getBycategory(categoryId: string, limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit !== undefined && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<alumno[]>(
      `${this.apiUrl}/categories/${categoryId}/products`,
      { params }
    );
  }
  getAllStudents(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit !== undefined && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<alumno[]>('${this.apiUrl}/products', { params });
  }

  getAlumno(id: string) {
    return this.http.get<alumno>(`${this.apiUrl}/products/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
        }
        return throwError(() => new Error('algo falla en el servidor'));
      })
    );
  }

  create(data: CreateAlumnoDTO) {
    return this.http.post<alumno>(`${this.apiUrl}/products`, data);
  }

  update(id: string, data: UpdateAlumnoDTO) {
    return this.http.put<alumno>(`${this.apiUrl}/products/${id}`, data);
  }

  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/products/${id}`);
  }

  getAlumnoByPage(limit: number, offset: number) {
    return this.http.get<alumno[]>(`${this.apiUrl}/products`, {
      params: { limit, offset },
    });
  }
}
