import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ServicesComponent } from './components/services/services';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
  HeroComponent,
  ServicesComponent,
  PortfolioComponent,
  AboutComponent,
  ContactComponent,
  FooterComponent
    
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}