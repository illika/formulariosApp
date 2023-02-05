import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    "nombre": ["Procesador"],
    "precio": [0],
    "existencia": [0]
  })

  constructor(private formBuilder: FormBuilder) { }



}
