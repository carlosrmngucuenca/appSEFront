import { Component, Input, OnInit } from '@angular/core';
import { map, switchAll, switchMap } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { user } from 'src/app/models/user.model';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';

AuthService;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activeMenu = false;
  counter: number = 0;
  categories: Category[] = [];
  @Input() Data: string = '';

  profile: user | null = null;

  constructor(
    private myAlumnoService: AlumnosService,
    private myAuthService: AuthService,
    private categoryservice: CategoriesService
  ) {}
  ngOnInit(): void {
    this.myAlumnoService.myAlumno$.subscribe((alumnos) => {
      this.counter = alumnos.length;
    });
    this.GetAllC();
  }
  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  loginAndProfile() {
    this.myAuthService
      .fetchLoginAndProfile('carlos@gmail.com', '12345')
      .subscribe((usera) => {
        this.profile = usera;
        console.log('estamos en nav component loginAndprofile');
        console.log(usera);
      });
  }

  GetAllC() {
    this.categoryservice.getAll().subscribe((data) => {
      this.categories = data;
    });
  }
}
