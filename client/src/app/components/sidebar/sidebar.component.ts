import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material.module';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [MaterialModule, RouterModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
    title: string = 'Avalon';
}
