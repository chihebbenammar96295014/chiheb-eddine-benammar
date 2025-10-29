import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Service {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; icon: string; color?: string }[];
  titleKey?: string;
  descriptionKey?: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      title: 'Développement Front-End',
      titleKey: 'services.frontendDev',
      icon: 'fa-solid fa-laptop-code',
      description: "Création d'interfaces modernes, réactives et performantes.",
      descriptionKey: 'services.frontendDesc',
      skills: [
        { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e44d26' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
        { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
        { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
        { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#563d7c' },
        { name: 'Tailwind', icon: 'fa-solid fa-wind', color: '#38bdf8' }
      ]
    },
    {
      title: 'Développement Back-End',
      titleKey: 'services.backendDev',
      icon: 'fa-solid fa-server',
      description: "Création d'API REST sécurisées et d'architectures microservices.",
      descriptionKey: 'services.backendDesc',
      skills: [
        { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#6db33f' },
        { name: 'Node.js', icon: 'fa-brands fa-node', color: '#68a063' },
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
        { name: 'PHP', icon: 'fa-brands fa-php', color: '#777bb4' }
      ]
    },
    {
      title: 'Intelligence Artificielle & Data',
      titleKey: 'services.aiDev',
      icon: 'fa-solid fa-brain',
      description: "Développement de solutions intelligentes et analyse de données.",
      descriptionKey: 'services.aiDesc',
      skills: [
        { name: 'TensorFlow', icon: 'fa-solid fa-network-wired', color: '#ff6f00' },
        { name: 'PyTorch', icon: 'fa-solid fa-fire', color: '#ee4c2c' },
        { name: 'Scikit-learn', icon: 'fa-solid fa-cogs', color: '#f89939' },
        { name: 'Pandas', icon: 'fa-solid fa-table', color: '#150458' }
      ]
    }
  ];
  
  constructor(private translate: TranslateService) {}
  
  ngOnInit() {
    // Mise à jour des textes lors du changement de langue
    this.translate.onLangChange.subscribe(() => {
      this.updateServicesText();
    });
    
    // Initialisation des textes
    this.updateServicesText();
  }
  
  private updateServicesText() {
    this.services.forEach(service => {
      if (service.titleKey) {
        this.translate.get(service.titleKey).subscribe((res: string) => {
          service.title = res;
        });
      }
      if (service.descriptionKey) {
        this.translate.get(service.descriptionKey).subscribe((res: string) => {
          service.description = res;
        });
      }
    });
  }
}
