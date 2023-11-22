import { Component, OnInit } from '@angular/core';
import {
  alumno,
  CreateAlumnoDTO,
  UpdateAlumnoDTO,
} from '../../../models/alumno.model';
import { InfoAlumnosService } from 'src/app/services/info.alumnos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  alumnos: alumno[] = [];
  limit = 10;
  offset = 0;
  studentId: string | null = null;
  constructor(
    private infoStudents: InfoAlumnosService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.infoStudents.getAlumnoByPage(10, 0).subscribe((data) => {
      this.alumnos = data;
      this.offset += this.limit;
    });

    this.route.queryParamMap.subscribe((params) => {
      this.studentId = params.get('product');
    });
  }

  loadMore() {
    this.infoStudents
      .getAlumnoByPage(this.limit, this.offset)
      .subscribe((data) => {
        this.alumnos = this.alumnos.concat(data);
        this.offset += this.limit;
      });
  }
}
