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

  initForm = {
    producto: "",
    precio: 0,
    existencia: 0,
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.formularioBasico?.controls['producto']?.invalid
      && this.formularioBasico?.controls['producto']?.touched;
  }

  precioValido(): boolean {
    return this.formularioBasico?.controls['precio']?.invalid
      && this.formularioBasico?.controls['precio']?.touched;
  }

  guardar() {
    this.formularioBasico.resetForm({
      producto: "",
      precio: 0,
      existencia: 0
    });
  }

}
