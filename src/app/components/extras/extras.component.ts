import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IExtra } from '../../core/models/portfolio.interface';

@Component({
  selector: 'app-extras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extras.component.html',
  styleUrl: './extras.component.scss'
})
export class ExtrasComponent {
  @Input({ required: true }) extras!: IExtra[];
}