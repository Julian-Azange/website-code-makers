import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarTransparent = true;
  isDarkTheme = false;
  iconClass = 'fa-solid fa-moon';
  logoLightSrc = 'assets/logos/LOGO-LIGHT.png'; // Ruta de la imagen para el modo claro
  logoDarkSrc = 'assets/logos/LOGO-DARK.png';
  logoHeroLightSrc = 'assets/logos/LOGO-HERO-LIGHT.png';
  logoHeroDarkSrc = 'assets/logos/LOGO-HERO-DARK.png';

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const themeToggleButton = document.getElementById('theme-toggle-button');

    if (themeToggleButton) {
      themeToggleButton.addEventListener('click', () => {
        const body = document.body;
        const currentTheme = body.getAttribute('data-bs-theme');

        // Cambiar de light a dark o viceversa
        if (currentTheme === 'light') {
          body.setAttribute('data-bs-theme', 'dark');
        } else {
          body.setAttribute('data-bs-theme', 'light');
        }
      });
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const body = document.body;
    body.setAttribute('data-bs-theme', this.isDarkTheme ? 'dark' : 'light');
    body.style.backgroundColor = this.isDarkTheme ? '#333' : '#fff';
    this.iconClass = this.isDarkTheme ? 'fa-solid fa-sun' : 'fa-solid fa-moon';

    if (this.isDarkTheme) {
      body.classList.add('dark-mode');
      this.renderer.addClass(document.querySelector('.navbar'), 'dark-mode');
    } else {
      body.classList.remove('dark-mode');
      this.renderer.removeClass(document.querySelector('.navbar'), 'dark-mode');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      this.isNavbarTransparent = false;
    } else {
      this.isNavbarTransparent = true;
    }
  }

  closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;

    if (navbarToggler.classList.contains('collapsed')) {
      // El menú ya está cerrado, no es necesario hacer nada.
      return;
    }

    navbarToggler.click();
  }

  // Variable para rastrear el ítem activo
  activeItem: string = '';

  // Método para establecer el ítem activo
  setActiveItem(item: string) {
    this.activeItem = item;
  }

}
