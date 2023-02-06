import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styles: [
  ]
})
export class RegistrarComponent implements OnInit {


  nombreApellidoPattern: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
    email: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });


  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "Illika Pa",      
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  grabar() {
    if(this.miFormulario.invalid) return this.miFormulario.markAllAsTouched();

    console.log("grabar")
    
    
  }

}
