import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEducation } from '../../core/models/portfolio.interface';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  @Input({ required: true }) education!: IEducation[];
}