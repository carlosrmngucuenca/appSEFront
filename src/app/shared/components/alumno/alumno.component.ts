import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent implements OnInit {
  ngOnInit(): void {}
  @Input() alumno: alumno = {
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
  @Output() showalumnoData = new EventEmitter<string>();
  @Output() addData = new EventEmitter<alumno>();
  agregarDatos() {
    this.addData.emit(this.alumno);
  }

  showAlumnoDetail() {
    this.showalumnoData.emit(this.alumno.id);
  }
}
