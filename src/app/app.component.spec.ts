import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PortfolioService } from './core/services/portfolio.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      // Proveemos el servicio porque el componente lo necesita para arrancar
      providers: [PortfolioService] 
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
});