import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  @Input() miImagen: string = '';
  @Output() nocarga = new EventEmitter();
  noLoad() {
    this.nocarga.emit();
  }
}
