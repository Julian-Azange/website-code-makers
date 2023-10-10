import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-makers-dev';

  // Mostrar u ocultar el botón cuando se hace scroll
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const button = document.getElementById('scroll-to-top');
    if (button) {
      if (window.scrollY > 600) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    }
  }

  // Animar el regreso al inicio de la página
  scrollToTop() {
    const rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
