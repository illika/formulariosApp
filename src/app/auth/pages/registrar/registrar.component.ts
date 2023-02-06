import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { emailPattern, nombreApellidoPattern, noUsername } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styles: [
  ]
})
export class RegistrarComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ["", [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ["", [Validators.required, this.validatorService.noUsername]],
    password: ["", [Validators.required, Validators.minLength(3)]],
    password2: ["", [Validators.required]],
  }, {
    validators: [this.validatorService.camposIguales("password", "password2")]
  });


  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "Illika Pa",
      email: "test1@test.com",
      username: 'katari'
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  grabar() {
    if (this.miFormulario.invalid) return this.miFormulario.markAllAsTouched();

    console.log("grabar")
  }

}
