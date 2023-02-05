import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  /*
  miFormulario: FormGroup = new FormGroup({
    "nombre": new FormControl("Procesador"),
    "precio": new FormControl(1500),
    "existencia": new FormControl(5),
  });
  */
  miFormulario: FormGroup = this.formBuilder.group({
    "nombre": ["", [Validators.required, Validators.minLength(3),]],
    "precio": [0, [Validators.required, Validators.min(0)]],
    "existencia": [0, [Validators.required, Validators.min(0)]]
  })

  constructor(private formBuilder: FormBuilder) { }

  campoNoValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched;
  }

}
