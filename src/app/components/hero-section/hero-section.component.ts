import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBio, IProfile } from '../../core/models/portfolio.interface';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  // Recibimos los datos como entrada (@Input)
  // El '!' significa que confiamos en que estos datos llegarán sí o sí.
  @Input({ required: true }) profile!: IProfile;
  @Input({ required: true }) bio!: IBio;
}