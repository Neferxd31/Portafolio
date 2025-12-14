import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfolioService } from './core/services/portfolio.service';
import { ThemeService } from './core/services/theme.service'; // <--- 1. NUEVO IMPORT

import { HeroSectionComponent } from './components/hero-section/hero-section.component'; 
import { SkillsComponent } from './components/skills/skills.component';     
import { ProjectsComponent } from './components/projects/projects.component';
import { ExtrasComponent } from './components/extras/extras.component';
import { ContactComponent } from './components/contact/contact.component'; 
import { EducationComponent } from './components/education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, HeroSectionComponent,
    SkillsComponent, EducationComponent,
    ProjectsComponent, ExtrasComponent, ContactComponent
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private portfolioService = inject(PortfolioService);
  
  // 2. INYECTAR EL SERVICIO DE TEMA (Público para usarlo en el HTML)
  public themeService = inject(ThemeService); 
  
  portfolioSignal = this.portfolioService.data;
}