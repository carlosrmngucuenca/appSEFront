import { Component } from '@angular/core';
import { alumno } from './models/alumno.model';
import { FilesService } from './services/files.service';

import { UsersService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imagenAvatar: string = '../../assets/images/avatar.jpg';
  btndisabled: boolean = true;
  token = '';
  profileData = '';

  onLoad(img: string) {
    console.log(img);
  }
  onRegister() {}

  constructor(
    private userService: UsersService,
    private fileservice: FilesService
  ) {}

  createUser() {
    this.userService
      .create({
        name: 'carlos',
        email: 'carlos@gmail.com',
        password: '12345',
      })
      .subscribe((rta) => {
        console.log(rta);
      });
  }

  download() {
    console.log('entra');
    this.fileservice.get('my.pdf', ' ', 'application/pdf');
  }
}
