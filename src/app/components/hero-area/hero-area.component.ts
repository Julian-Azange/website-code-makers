import { Component } from '@angular/core';

@Component({
  selector: 'hero-area',
  templateUrl: './hero-area.component.html',
  styleUrls: ['./hero-area.component.css']
})
export class HeroAreaComponent {
    scrollDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
}
