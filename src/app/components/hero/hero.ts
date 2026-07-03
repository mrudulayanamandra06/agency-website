import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

}