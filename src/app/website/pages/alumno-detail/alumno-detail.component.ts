import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { alumno } from 'src/app/models/alumno.model';
import { InfoAlumnosService } from 'src/app/services/info.alumnos.service';

@Component({
  selector: 'app-alumno-detail',
  templateUrl: './alumno-detail.component.html',
  styleUrls: ['./alumno-detail.component.scss'],
})
export class AlumnoDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private InfoAlumnosServices: InfoAlumnosService,
    private location: Location
  ) {}
  alumnoId: string | null = null;
  alumno: alumno | null = null;
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.alumnoId = params.get('id');
          if (this.alumnoId !== null) {
            return this.InfoAlumnosServices.getAlumno(this.alumnoId);
          }
          return [null];
        })
      )
      .subscribe((data) => {
        this.alumno = data;
      });
  }

  goBack() {
    this.location.back();
  }
}
