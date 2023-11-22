import { Injectable } from '@angular/core';
import { alumno } from '../models/alumno.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  miStudentCard: alumno[] = [];
  private myAlumno = new BehaviorSubject<alumno[]>([]);
  myAlumno$ = this.myAlumno.asObservable();
  constructor() {}
  addDataToCart(alumno: alumno) {
    console.log(alumno);
    this.miStudentCard.push(alumno);
    this.myAlumno.next(this.miStudentCard);
  }

  getDataAlumnos() {
    return this.miStudentCard;
  }
}
