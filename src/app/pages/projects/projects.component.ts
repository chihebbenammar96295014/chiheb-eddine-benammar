import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Project {
  title: string;
  image: string;
  description: string;
  stack: { name: string; icon: string; color?: string }[];
  github?: string;
  demo?: string;
  categories: string[];
  mediaType?: 'image' | 'video';
  mediaUrl?: string;
  translationKey: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  filter: string = 'all';
  projects: Project[] = [
    {
      title: '',
      image: '../../../assets/workWave/logo.png',
      description: '',
      stack: [
        { name: 'PHP', icon: 'fa-brands fa-php', color: '#777bb4' },
        { name: 'MySQL', icon: 'fa-solid fa-database', color: '#4479a1' },
        { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e44d26' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
        { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' }
      ],
      github: '#',
      demo: '../../../assets/workWave/video-workWave.mp4',
      categories: ['web'],
      mediaType: 'video',
      mediaUrl: '../../../assets/workWave/video-workWave.mp4',
      translationKey: 'workwave'
    },
    {
      title: '',
      image: '../../../assets/consultEase/consultEase-home.png',
      description: '',
      stack: [
        { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
        { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#6db33f' },
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
        { name: 'Rasa', icon: 'fa-solid fa-robot', color: '#5d5dff' }
      ],
      github: '#',
      demo: '../../../assets/consultEase/video-consultEase.mp4',
      categories: ['ia', 'web'],
      mediaType: 'video',
      mediaUrl: '../../../assets/consultEase/video-consultEase.mp4',
      translationKey: 'medical'
    },
    {
      title: '',
      image: '../../../assets/jeux xo/jeuxo.png',
      description: '',
      stack: [
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' }
      ],
      github: '#',
      demo: '../../../assets/jeux xo/jeu XO.mp4',
      categories: ['python'],
      mediaType: 'video',
      mediaUrl: '../../../assets/jeux xo/jeu XO.mp4',
      translationKey: 'tictactoe'
    },
    {
      title: '',
      image: '../../../assets/Eniso-Team/logo.png',
      description: '',
      stack: [
        { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
        { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e44d26' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
        { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' }
      ],
      github: '#',
      demo: '../../../assets/Eniso-Team/magazin_eniso.mp4',
      categories: ['frontend'],
      mediaType: 'video',
      mediaUrl: '../../../assets/Eniso-Team/magazin_eniso.mp4',
      translationKey: 'eniso'
    },
    {
      title: '',
      image: '../../../assets/analyse/photo-analyse.png',
      description: '',
      stack: [
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
        { name: 'Pandas', icon: 'fa-solid fa-database', color: '#150458' },
        { name: 'Matplotlib', icon: 'fa-solid fa-chart-line', color: '#11557c' },
        { name: 'Seaborn', icon: 'fa-solid fa-water', color: '#43b7ba' }
      ],
      github: '#',
      demo: '#',
      categories: ['data', 'python'],
      mediaType: 'image',
      mediaUrl: '../../../assets/analyse/photo-analyse.png',
      translationKey: 'data'
    },
    {
      title: '',
      image: '../../../assets/avionav-speed/avionav.png',
      description: '',
      stack: [
        { name: 'Qt', icon: 'fa-solid fa-cube', color: '#41cd52' },
        { name: 'C++', icon: 'fa-solid fa-code', color: '#00599c' }
      ],
      github: '#',
      demo: '../../../assets/avionav-speed/avionav.png',
      categories: ['embedded'],
      mediaType: 'image',
      mediaUrl: '../../../assets/avionav-speed/avionav.png',
      translationKey: 'aircraft'
    }
  ];

  selectedProject: Project | null = null;
  selectedCategory: string = 'all';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    // Mise à jour des informations lors du changement de langue
    this.translate.onLangChange.subscribe(() => {
      this.updateProjectsInfo();
    });
    
    // Initialisation des informations
    this.updateProjectsInfo();
  }

  private updateProjectsInfo() {
    this.projects.forEach(project => {
      this.translate.get(`projects.items.${project.translationKey}.title`).subscribe((res: string) => {
        project.title = res;
      });
      this.translate.get(`projects.items.${project.translationKey}.description`).subscribe((res: string) => {
        project.description = res;
      });
    });
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'all': 'fa-solid fa-layer-group',
      'web': 'fa-solid fa-globe',
      'ia': 'fa-solid fa-brain',
      'python': 'fa-brands fa-python',
      'frontend': 'fa-solid fa-code',
      'data': 'fa-solid fa-chart-line',
      'embedded': 'fa-solid fa-microchip'
    };
    return icons[category] || 'fa-solid fa-folder';
  }

  get filteredProjects() {
    if (this.filter === 'all') return this.projects;
    return this.projects.filter(p => p.categories.includes(this.filter));
  }

  get categories() {
    const allCategories = this.projects.flatMap(p => p.categories);
    return ['all', ...Array.from(new Set(allCategories))];
  }

  setFilter(cat: string) {
    this.filter = cat;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  openProjectMedia(project: Project) {
    this.selectedProject = project;
  }

  closeModal(): void {
    this.selectedProject = null;
  }

  isVideo(url: string): boolean {
    return url.toLowerCase().endsWith('.mp4');
  }
}
