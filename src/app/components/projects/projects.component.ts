import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProject } from '../../core/models/portfolio.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input({ required: true }) projects!: IProject[];
}