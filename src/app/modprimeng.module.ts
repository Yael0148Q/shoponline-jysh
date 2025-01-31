import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

const mismodulos: any= [
ButtonModule,
RippleModule,
ToastModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    mismodulos
  ],
  exports: [
    mismodulos
  ]
})
export class ModprimengModule { }
