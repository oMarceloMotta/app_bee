import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Auth,
  signInWithEmailAndPassword,
  // createUserWithEmailAndPassword,
  // signOut
} from '@angular/fire/auth';
import { NavController, ToastController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage {
  signinForm: FormGroup;
  email:string = '';
  constructor(private fb: FormBuilder, public navCtrl: NavController, private auth: Auth,
    private storage: StorageService,
    private toast: ToastController,
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.signinForm.valid) {
      try {
        const user = await signInWithEmailAndPassword(
          this.auth,
          this.signinForm.value.email,
          this.signinForm.value.password
        );
        this.storage.set('user', user);
        this.navCtrl.navigateRoot('/home');
      } catch (error) {
        this.toast.create({ message: 'Erro ao logar', color: 'danger' });
      }

    } else {
      console.log('Form is invalid');
    }
  }

  navRegistrase() {
    this.navCtrl.navigateForward('/register');
  }

}
