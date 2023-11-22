import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { InfoAlumnosService } from 'src/app/services/info.alumnos.service';
import {
  alumno,
  CreateAlumnoDTO,
  UpdateAlumnoDTO,
} from '../../../models/alumno.model';

import { switchMap } from 'rxjs';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent {
  @Input() alumnos: alumno[] = [];
  //@Input() productId: string | null = null;
  @Input()
  set studentId(id: string | null) {
    if (id) {
      this.onShowDetail(id);
    }
  }
  showAlumnoDetail = false;
  alumnoChosen: alumno = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: '',
  };

  @Output() onLoadMore: EventEmitter<string> = new EventEmitter<string>();

  /*limit = 10;
  offset = 0;*/
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';
  constructor(
    private myService: AlumnosService,
    private infoStudents: InfoAlumnosService
  ) {
    this.alumnos = myService.getDataAlumnos();
  }
  addDataToCart(alumno: alumno) {
    this.myService.addDataToCart(alumno);
  }

  /* ngOnInit() {
    this.infoStudents.getAlumnoByPage(10, 0).subscribe((data) => {
      this.alumnos = data;
      this.offset += this.limit;
    });
  }*/

  toggleAlumnoDetail() {
    this.showAlumnoDetail = !this.showAlumnoDetail;
  }

  onShowDetail(id: string) {
    this.statusDetail = 'loading';
    this.infoStudents.getAlumno(id).subscribe({
      next: (v) => this.showDetailOk(v),
      error: (e) => this.showDetailError(e),
      complete: () => console.info('complete'),
    });
  }

  showDetailOk(data: alumno) {
    this.statusDetail = 'success';
    console.log(data);
    //this.toggleAlumnoDetail();
    if (!this.showAlumnoDetail) {
      this.showAlumnoDetail = true;
    }
    this.alumnoChosen = data;
  }

  showDetailError(e: any) {
    this.statusDetail = 'error';
  }

  createNewAlumno() {
    const Alumno: CreateAlumnoDTO = {
      title: 'Nuevo Producto',
      description: 'bbbb',
      images: [''],
      price: 100,
      categoryId: 2,
    };

    this.infoStudents.create(Alumno).subscribe((data) => {
      console.log(data);
      this.alumnos.unshift(data);
    });
  }

  updateAlumno() {
    const changes: UpdateAlumnoDTO = {
      title: 'cambio a nuevo titulo',
    };
    const id = this.alumnoChosen.id;
    this.infoStudents.update(id, changes).subscribe((data) => {
      const alumnoIndex = this.alumnos.findIndex(
        (item) => item.id === this.alumnoChosen.id
      );
      this.alumnos[alumnoIndex] = data;
    });
  }

  deleteAlumno() {
    const id = this.alumnoChosen.id;
    this.infoStudents.delete(id).subscribe((data) => {
      const alumnoIndex = this.alumnos.findIndex(
        (item) => item.id === this.alumnoChosen.id
      );
      this.alumnos = this.alumnos.splice(alumnoIndex, 1);
      this.showAlumnoDetail = false;
    });
  }

  loadMore() {
    this.onLoadMore.emit();
  }
}
