import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISkill } from '../../core/models/portfolio.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input({ required: true }) skills!: ISkill[];
}