import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<string>('fr');
  public currentLang$ = this.currentLang.asObservable();

  constructor(private translate: TranslateService) {
    // Récupérer la langue sauvegardée ou utiliser le français par défaut
    const savedLang = localStorage.getItem('language');
    
    if (savedLang) {
      this.currentLang.next(savedLang);
    }

    // Définir les langues disponibles
    translate.addLangs(['fr', 'en']);
    
    // Définir la langue par défaut
    translate.setDefaultLang('fr');
    
    // Utiliser la langue sauvegardée ou la langue par défaut
    translate.use(this.currentLang.value);
  }

  /**
   * Change la langue de l'application
   * @param lang Code de la langue ('fr' ou 'en')
   */
  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang.next(lang);
    localStorage.setItem('language', lang);
  }

  /**
   * Retourne la langue actuelle
   */
  getCurrentLang(): string {
    return this.currentLang.value;
  }

  /**
   * Vérifie si la langue actuelle est le français
   */
  isFrench(): boolean {
    return this.currentLang.value === 'fr';
  }

  /**
   * Vérifie si la langue actuelle est l'anglais
   */
  isEnglish(): boolean {
    return this.currentLang.value === 'en';
  }
}