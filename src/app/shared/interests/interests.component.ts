import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Interest {
  name: string;
  icon: string;
  description: string;
  nameKey: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {
  interests: Interest[] = [
    { 
      name: 'Natation', 
      nameKey: 'interests.swimming',
      icon: 'fa-solid fa-person-swimming', 
      description: "J'aime nager pour me détendre et rester en forme.",
      descriptionKey: 'interests.swimmingDesc'
    },
    { 
      name: 'Randonnée', 
      nameKey: 'interests.hiking',
      icon: 'fa-solid fa-person-hiking', 
      description: 'Explorer la nature et relever de nouveaux défis.',
      descriptionKey: 'interests.hikingDesc'
    },
    { 
      name: 'Échecs', 
      nameKey: 'interests.chess',
      icon: 'fa-solid fa-chess', 
      description: 'Développer la stratégie et la concentration.',
      descriptionKey: 'interests.chessDesc'
    },
    { 
      name: 'Competitive programming', 
      nameKey: 'interests.programming',
      icon: 'fa-solid fa-laptop-code', 
      description: 'Résoudre des problèmes algorithmiques pour progresser.',
      descriptionKey: 'interests.programmingDesc'
    }
  ];

  constructor(private translate: TranslateService) {}
  
  ngOnInit() {
    // Mise à jour des textes lors du changement de langue
    this.translate.onLangChange.subscribe(() => {
      this.updateInterestsText();
    });
    
    // Initialisation des textes
    this.updateInterestsText();
  }
  
  private updateInterestsText() {
    this.interests.forEach(interest => {
      this.translate.get(interest.nameKey).subscribe((res: string) => {
        interest.name = res;
      });
      this.translate.get(interest.descriptionKey).subscribe((res: string) => {
        interest.description = res;
      });
    });
  }
}
