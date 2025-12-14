import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Signal para saber si es modo oscuro
  isDark = signal<boolean>(false);

  constructor() {
    // 1. Al iniciar, revisamos si había una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      this.isDark.set(true);
      document.body.classList.add('dark-mode');
    }
  }

  toggleTheme() {
    // 2. Invertimos el valor (true -> false, o viceversa)
    this.isDark.update(value => !value);

    // 3. Aplicamos o quitamos la clase al <body> y guardamos en memoria
    if (this.isDark()) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}