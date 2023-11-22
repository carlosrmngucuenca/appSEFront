import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { alumno } from 'src/app/models/alumno.model';
import { InfoAlumnosService } from 'src/app/services/info.alumnos.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryId: string | null = null;
  limit = 10;
  offset = 0;
  alumnos: alumno[] = [];
  studentId: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private InfoAlumnosServices: InfoAlumnosService
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.categoryId = params.get('id');
          if (this.categoryId !== null) {
            return this.InfoAlumnosServices.getBycategory(
              this.categoryId,
              this.limit,
              this.offset
            );
          }
          return [];
        })
      )
      .subscribe((data) => {
        this.alumnos = data;
      });

    this.route.queryParamMap.subscribe((params) => {
      this.studentId = params.get('product');
    });
  }

  GetcategoryByid() {}
}
