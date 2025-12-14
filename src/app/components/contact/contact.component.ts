import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input({ required: true }) email!: string;
  @Input({ required: true }) phone!: string;     // <--- Nuevo
  @Input({ required: true }) linkedin!: string;  // <--- Nuevo
  @Input({ required: true }) github!: string;    // <--- Nuevo
  @Input({ required: true }) cvUrl!: string;
}