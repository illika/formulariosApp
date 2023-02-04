import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('formularioBasico') formularioBasico!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.formularioBasico?.controls['producto']?.invalid
      && this.formularioBasico?.controls['producto']?.touched;
  }

  guardar() {
    console.log(this.formularioBasico);
  }

}
