import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {



  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.minLength(3),]],
    favoritos: this.fb.array(
      [["WOW", Validators.required], ["Dota 2", Validators.required]]
      , Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control(
    "", Validators.required,
  )

  get favoritoArr() {
    return this.miFormulario.get("favoritos") as FormArray;
  }

  ngOnInit(): void {
  }

  controlsError(name: string) {
    return this.miFormulario.controls[name].errors &&
      this.miFormulario.controls[name].touched;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) return;
    //this.favoritoArr.push(new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.favoritoArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);

  }

}
