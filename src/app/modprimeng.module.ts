import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { MegaMenu } from 'primeng/megamenu';
import { Toolbar, ToolbarModule } from 'primeng/toolbar';




const mismodulos: any= [
ButtonModule,
RippleModule,
ToastModule,
MegaMenu,
Toolbar
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
