import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import {
  Auth,
  // signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  // signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, public navCtrl: NavController, private auth: Auth, private toast: ToastController) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      try {
        const user = await createUserWithEmailAndPassword(
          this.auth,
          this.registerForm.value.email,
          this.registerForm.value.password
        );
        this.toast.create({
          message: 'Usuário criado com sucesso',
          duration: 2000,
          color: 'success'
        }).then((toast) => {
          toast.present();
        });
        this.navBack();
        console.log(user);
      } catch (error) {
        this.toast.create({
          message: 'Usuário não criado com sucesso  ',
          duration: 2000,
          color: 'danger'

        }).then((toast) => {
          toast.present();
        });
        console.error('Error ao criar o usuario:', error);
      }
    } else {
      console.log('Form is invalid');
    }
  }
  navBack() {
    this.navCtrl.pop();
  }
}
