import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { TranslationService } from '../../services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  menuOpen = false;
  isDarkMode = false;
  currentLang = 'fr';
  private themeSubscription: Subscription = new Subscription();
  private langSubscription: Subscription = new Subscription();

  constructor(
    private themeService: ThemeService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.themeSubscription = this.themeService.isDarkMode$.subscribe(
      isDark => this.isDarkMode = isDark
    );
    
    this.langSubscription = this.translationService.currentLang$.subscribe(
      lang => this.currentLang = lang
    );
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
    this.langSubscription.unsubscribe();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
  
  switchLanguage() {
    const newLang = this.currentLang === "fr" ? "en" : "fr";
    this.translationService.switchLanguage(newLang);
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.closeMenu();
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
