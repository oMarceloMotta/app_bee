// app-card.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { IonicModule } from '@ionic/angular';
import { RegisterCardComponent } from './register-card/register-card.component';

const components = [CardComponent, RegisterCardComponent]
@NgModule({
  declarations: components,
  imports: [CommonModule, IonicModule.forRoot()],
  exports: components,
})
export class ComponentsModule { }
