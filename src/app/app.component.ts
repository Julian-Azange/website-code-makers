import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Mostrar u ocultar el botón cuando se hace scroll
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const buttonWhatsApp = document.getElementById('whatsapp');
    const buttonScrollToTop = document.getElementById('scroll-to-top');

    if (buttonWhatsApp && buttonScrollToTop) {
      if (window.scrollY > 600) {
        buttonScrollToTop.style.display = 'block';
        buttonWhatsApp.style.bottom = '120px'; // Ajusta la posición vertical del botón de WhatsApp al hacer scroll
      } else {
        buttonScrollToTop.style.display = 'none';
        buttonWhatsApp.style.bottom = '40px'; // Ajusta la posición vertical inicial del botón de WhatsApp
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
