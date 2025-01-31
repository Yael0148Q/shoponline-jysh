import {Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { ModprimengModule } from './modprimeng.module';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';



@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ButtonModule, RippleModule, NavbarComponent, ModprimengModule, AvatarModule],
    providers: [MessageService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true
})
export class AppComponent {
    title = 'shoponline_jysh';
    visible: boolean = false;

    constructor(private messageService: MessageService) { }

    show() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }

    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    showTopLeft() {
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', key: 'tl', life: 3000 });
    }

    showConfirm() {
        if (!this.visible) {
            this.messageService.add({ key: 'confirm', sticky: true, severity: 'success', summary: 'Can you send me the report?' });
            this.visible = true;
        }
    }

    onConfirm() {
        this.messageService.clear('confirm');
        this.visible = false;
    }

    onReject() {
        this.messageService.clear('confirm');
        this.visible = false;
    }
}


