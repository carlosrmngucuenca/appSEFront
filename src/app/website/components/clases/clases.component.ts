import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss'],
})
export class ClasesComponent implements OnInit {
  @Input() imagen: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault: string = 'https://picsum.photos/200';
  constructor() {}
  alumno: string = 'Sergio';
  //jugadores: Jugador[] = [];
  //equipos: Equipo[] = [];
  ngOnInit(): void {
    //this.jugadores = JUGADORES as any;
    //this.equipos = EQUIPOS as any;
  }

  imgError() {
    this.imagen = this.imageDefault;
  }
  imageLoad() {
    this.loaded.emit(this.imagen);
  }
}
