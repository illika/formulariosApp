import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {



  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    "nombre": ["", [Validators.required, Validators.minLength(3),]]
  })

  ngOnInit(): void {
  }

  controlsError(name: string) {
    return this.miFormulario.controls[name].errors &&
      this.miFormulario.controls[name].touched;
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    
  }

}
