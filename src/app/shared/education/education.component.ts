import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Education {
  school: string;
  degree: string;
  period: string;
  specialty: string;
  icon: string;
  badge?: string;
  key: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educations: Education[] = [
    {
      school: '',
      degree: '',
      period: '',
      specialty: '',
      icon: 'fa-solid fa-graduation-cap',
      badge: 'fa-solid fa-certificate',
      key: 'epi2'
    },
    {
      school: '',
      degree: '',
      period: '',
      specialty: '',
      icon: 'fa-solid fa-graduation-cap',
      badge: 'fa-solid fa-certificate',
      key: 'epi1'
    },
    {
      school: '',
      degree: '',
      period: '',
      specialty: '',
      icon: 'fa-solid fa-school',
      badge: 'fa-solid fa-check-circle',
      key: 'ipeim'
    },
    {
      school: '',
      degree: '',
      period: '',
      specialty: '',
      icon: 'fa-solid fa-school',
      badge: 'fa-solid fa-check-circle',
      key: 'ipein'
    },
    {
      school: '',
      degree: '',
      period: '',
      specialty: '',
      icon: 'fa-solid fa-user-graduate',
      badge: 'fa-solid fa-award',
      key: 'bac'
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Mise à jour des informations lors du changement de langue
    this.translate.onLangChange.subscribe(() => {
      this.updateEducationInfo();
    });
    
    // Initialisation des informations
    this.updateEducationInfo();
  }
  
  private updateEducationInfo() {
    this.educations.forEach(edu => {
      this.translate.get(`education.${edu.key}.school`).subscribe((res: string) => {
        edu.school = res;
      });
      this.translate.get(`education.${edu.key}.degree`).subscribe((res: string) => {
        edu.degree = res;
      });
      this.translate.get(`education.${edu.key}.period`).subscribe((res: string) => {
        edu.period = res;
      });
      this.translate.get(`education.${edu.key}.specialty`).subscribe((res: string) => {
        edu.specialty = res;
      });
    });
  }
}
