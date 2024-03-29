import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class ContactComponent implements OnInit {
  formGroup!: FormGroup;
  @ViewChild('modal') modal: any;

  constructor(
    public fb: FormBuilder,
    public httpService: HttpService
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  openModal(message: string): void {
    this.modal.openModal(message);
  }

  validateName(): boolean {
    return !this.formGroup.controls.name.valid && this.formGroup.controls.name?.touched;
  }

  validateEmail(): boolean {
    return !this.formGroup.controls.email.valid && this.formGroup.controls.email?.touched
  }

  validateMessage(): boolean {
    return !this.formGroup.controls.message.valid && this.formGroup.controls.message?.touched
  }

  submitMessage(): void {
    let body = {};

    if (
      this.formGroup.get('name')?.valid &&
      this.formGroup.get('email')?.valid &&
      this.formGroup.get('message')?.valid
    ) {
      body = {
        name: this.formGroup.get('name')?.value,
        email: this.formGroup.get('email')?.value,
        message: this.formGroup.get('message')?.value,
      };

      this.httpService.post('https://minhaURL.com.br', body).subscribe({
        next: (resp) => {
          this.formGroup.get('name')?.setValue('');
          this.formGroup.get('email')?.setValue('');
          this.formGroup.get('message')?.setValue('');
          this.openModal('Mensagem enviada com sucesso!')

        },
        error: (error) => {
          console.log('erro: ', error)
          console.log(error);
          this.openModal('Erro - Não foi possível enviar a mensagem!');
        },
      });
    } else {
      this.openModal('Preencha todos os campos corretamente para enviar a mensagem.');
    }
  }
}
