import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ImgComponent } from './components/img/img.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [AlumnosComponent, ImgComponent, AlumnoComponent],
  imports: [CommonModule, RouterModule, SwiperModule],
  exports: [AlumnosComponent, ImgComponent, AlumnoComponent],
})
export class SharedModule {}
