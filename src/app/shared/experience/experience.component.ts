import { Component, Input, OnInit } from '@angular/core';

export interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  stack: Array<{
    name: string;
    icon: string;
    color: string;
  }>;
  image: string;
  type: 'stage' | 'project';
  demo?: string;
  mediaType?: 'image' | 'video';
  mediaUrl?: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() typeFilter: 'stage' | 'project' | 'all' = 'all';
  showVideoModal = false;
  currentVideoUrl = '';

  selectedExperience: Experience | null = null;

   experiences: Experience[] = [
    {
      company: 'Satoripop, Sousse',
      period: '07/2025 – 08/2025',
      role: 'Stagiaire Full Stack – IA & E-commerce',
      description: `
      Conception et développement d’une plateforme e-commerce intelligente intégrant un chatbot IA multilingue 
      gérant le workflow complet du site et un système d’essayage virtuel (VITON-HD, OpenPose, PyTorch).
      Mise en place d’une architecture microservices (Spring Boot, Flask, Angular) avec API REST sécurisée (JWT),
      gestion du catalogue produits, panier, commandes et paiements (PayPal, Stripe, Orange Money).
      Développement d’une interface moderne et responsive (Angular 17, TypeScript, SCSS).
      `,
      stack: [
        { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
        { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#6db33f' },
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
        { name: 'Flask', icon: 'fa-solid fa-flask', color: '#000000' },
        { name: 'PyTorch', icon: 'fa-solid fa-fire', color: '#ee4c2c' }
      ],
      image: '/assets/exp-satoripop.png',
      type: 'stage'
    },
    {
      company: 'Satoripop, Sousse',
      period: '07/2024 – 08/2024',
      role: 'Stagiaire Full Stack – Urgences Médicales',
      description: `
      Développement d’une application web full-stack pour la gestion des services d’urgence médicale, 
      incluant la coordination des appels, le suivi des missions et la gestion du personnel médical.
      Architecture microservices avec Spring Boot, JHipster et Angular.
      Intégration de Google Maps pour la géolocalisation et sécurisation des accès via JWT.
      Développement d’une interface multi-langues responsive et mise en place de tests automatisés via Docker.
      `,
      stack: [
        { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
        { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#6db33f' },
        { name: 'JHipster', icon: 'fa-solid fa-code', color: '#008080' },
        { name: 'Google Maps API', icon: 'fa-solid fa-map-location-dot', color: '#4285f4' },
        { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ed' }
      ],
      image: '/assets/exp-satoripop.png',
      type: 'stage'
    },
    {
      company: 'Avionav, Sousse',
      period: '09/2023 – 09/2023',
      role: 'Stagiaire Développeur Qt – Interface de vol',
      description: `
      Projet “SMART COCKPIT” : conception d’un système embarqué pour avions légers modernisant 
      le poste de pilotage via un écran tactile centralisant vitesse, altitude et horizon artificiel.
      Développement de l’interface de vitesse en temps réel avec Qt/QML sur Raspberry Pi 4B,
      intégration de capteurs (BMP280) via Python (PyQt5/PySide).
      `,
      stack: [
        { name: 'Qt', icon: 'fa-solid fa-cube', color: '#41cd52' },
        { name: 'C++', icon: 'fa-solid fa-code', color: '#00599c' },
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
        { name: 'Raspberry Pi', icon: 'fa-solid fa-microchip', color: '#d71a28' }
      ],
      image: '/assets/exp-avionav.png',
      type: 'stage'
    },
     {
      company: 'Plateforme WorkWave ',
      period: '2024',
      role: 'Développeur Full Stack',
      description: `
      Développement d’une plateforme de mise en relation entre freelances et startups 
      pour la gestion de projets et de missions. 
      Fonctionnalités : recherche de projets, postulation, gestion de profils et publication d’offres.
      Collaboration au sein d’une équipe Agile et conception d’une interface responsive et intuitive.
      `,
      stack: [
        { name: 'PHP', icon: 'fa-brands fa-php', color: '#777bb4' },
        { name: 'MySQL', icon: 'fa-solid fa-database', color: '#4479a1' },
        { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e44d26' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
        { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' }
      ],
      image: '/assets/workWave/logo.png',
      type: 'project',
      mediaType: 'video',
      mediaUrl: '/assets/workWave/video-workWave.mp4'
    },
    {
  company: 'Projet de Fin d’Année – Plateforme Médicale Intelligente',
  period: '2025',
  role: 'Développeur IA Chatbot',
  description: `
  Développement d’une plateforme web innovante de prise de rendez-vous médicaux intégrant 
  un chatbot IA de pré-diagnostic basé sur Rasa et spaCy, capable d’analyser les symptômes 
  des patients et de recommander automatiquement la spécialité médicale appropriée.
  
  Mise en œuvre d’une architecture microservices séparant le service IA (Rasa) 
  de l’API principale (Node.js / Express.js) pour une meilleure scalabilité et maintenabilité.
  
  Création d’une interface moderne et responsive (React.js, Tailwind CSS, Material-UI), 
  avec authentification sécurisée (JWT) et tableau de bord analytique.
  `,
  stack: [
    { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
    { name: 'Node.js', icon: 'fa-brands fa-node', color: '#3c873a' },
    { name: 'Express.js', icon: 'fa-solid fa-server', color: '#303030' },
    { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
    { name: 'Rasa', icon: 'fa-solid fa-robot', color: '#5d5dff' },
    { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: '#38bdf8' },
    { name: 'Material-UI', icon: 'fa-solid fa-layer-group', color: '#0081cb' }
  ],
  image: '/assets/consultEase/consultEase-home.png',
  type: 'project',
  mediaType: 'video',
  mediaUrl: '/assets/consultEase/video-consultEase.mp4'
},
    {
      company: 'Jeu Tic-Tac-Toe',
      period: '2024',
      role: 'Développeur Python',
      description: `
      Conception d’un jeu interactif “Morpion” avec interface graphique et gestion des scores. 
      Projet visant à renforcer la logique algorithmique et la maîtrise de Python pour le développement de mini-jeux.
      `,
      stack: [
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' }
      ],
      image: '/assets/jeux xo/jeuxo.png',
      type: 'project',
      mediaType: 'video',
      mediaUrl: '/assets/jeux xo/jeu XO.mp4'
    },
    {
      company: 'Site Web ENISO',
      period: '2023',
      role: 'Développeur Front-End',
      description: `
      Réalisation d’un site vitrine pour l’École Nationale d’Ingénieurs de Sousse (ENISO),
      présentant les clubs, activités et réalisations étudiantes.
      Conception d’une interface moderne, ergonomique et responsive.
      `,
      stack: [
        { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
        { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e44d26' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
        { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' }
      ],
      image: '/assets/Eniso-Team/logo.png',
      type: 'project',
      mediaType: 'video',
      mediaUrl: '/assets/Eniso-Team/magazin_eniso.mp4'
    },
    {
      company: 'Projet d’Analyse de Données Médicales',
      period: '2025',
      role: 'Data Analyst',
      description: `
      Réalisation d’une étude statistique et visuelle sur des données de santé à grande échelle. 
      Nettoyage, imputation et analyse de plus de 10 000 enregistrements patients afin d’identifier 
      les corrélations entre les indicateurs physiologiques (IMC, tension, glycémie, âge).
      Visualisations interactives et système de scoring de risque médical.
      `,
      stack: [
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
        { name: 'Pandas', icon: 'fa-solid fa-database', color: '#150458' },
        { name: 'Matplotlib', icon: 'fa-solid fa-chart-line', color: '#11557c' },
        { name: 'Seaborn', icon: 'fa-solid fa-water', color: '#43b7ba' }
      ],
      image: '/assets/analyse/photo-analyse.png',
      type: 'project',
      mediaType: 'image',
      mediaUrl: '/assets/analyse/photo-analyse.png'
    },
    {
      company: 'Interface de Vitesse pour Avion Léger',
      period: '2024',
      role: 'Développeur Logiciel Embarqué',
      description: `
      Développement d’une interface de vitesse haute performance pour système avionique. 
      Intégration des capteurs de vol et affichage temps réel sur écran via Qt et C++.
      Projet combinant performance, fiabilité et interaction homme-machine.
      `,
      stack: [
        { name: 'Qt', icon: 'fa-solid fa-cube', color: '#41cd52' },
        { name: 'C++', icon: 'fa-solid fa-code', color: '#00599c' }
      ],
      image: '/assets/avionav-speed/avionav.png',
      type: 'project',
      mediaType: 'image',
      mediaUrl: '/assets/avionav-speed/avionav.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  get filteredExperiences(): Experience[] {
    if (this.typeFilter === 'all') {
      return this.experiences;
    } else {
      return this.experiences.filter(exp => exp.type === this.typeFilter);
    }
  }

  openExperienceMedia(experience: Experience) {
    this.selectedExperience = experience;
  }

  closeModal(): void {
    this.selectedExperience = null;
  }

  openVideoModal(videoUrl: string) {
    this.currentVideoUrl = videoUrl;
    this.showVideoModal = true;
  }

  closeVideoModal() {
    this.showVideoModal = false;
    this.currentVideoUrl = '';
  }

  isVideo(url: string): boolean {
    return url.toLowerCase().endsWith('.mp4');
  }
}
