import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { ClasesComponent } from './components/clases/clases.component';

import { LoginComponent } from './components/login/login.component';

import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';

import { MycartComponent } from './pages/mycart/mycart.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AlumnoDetailComponent } from './pages/alumno-detail/alumno-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from './../shared/shared.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    PreguntasComponent,
    ClasesComponent,

    LoginComponent,

    NavComponent,
    HomeComponent,

    MycartComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    AlumnoDetailComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    SharedModule,
    QuicklinkModule,
  ],
})
export class WebsiteModule {}
