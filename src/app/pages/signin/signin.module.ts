import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninPageRoutingModule } from './signin-routing.module';
import { StorageService } from '../../services/storage.service';

import { SigninPage } from './signin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SigninPageRoutingModule,
  ],
  providers: [StorageService],
  declarations: [SigninPage]
})
export class SigninPageModule { }
