import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string; // FontAwesome or Devicon
  color?: string;
}

interface SkillCategory {
  label: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {


  categories: SkillCategory[] = [
    {
      label: 'Front-end',
      skills: [
        { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e44d26' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
        { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
        { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
        { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
        { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#563d7c' },
      ]
    },
    {
      label: 'Back-end',
      skills: [
        { name: 'Java', icon: 'fa-brands fa-java', color: '#007396' },
        { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#6db33f' },
        { name: 'PHP', icon: 'fa-brands fa-php', color: '#777bb4' },
        { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#339933' },
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
        { name: 'Rasa', icon: 'fa-solid fa-robot', color: '#5d5dff' },
      ]
    },
    {
      label: 'Tools',
      skills: [
        { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#f34f29' },
        { name: 'GitHub', icon: 'fa-brands fa-github', color: '#333' },
        { name: 'Figma', icon: 'fa-brands fa-figma', color: '#a259ff' },
        { name: 'Matplotlib', icon: 'fa-solid fa-chart-column', color: '#11557c' },
        { name: 'Seaborn', icon: 'fa-solid fa-water', color: '#43b7ba' },
      ]
    },
    {
      label: 'Cloud',
      skills: [
        { name: 'AWS', icon: 'fa-brands fa-aws', color: '#ff9900' },
        { name: 'CCNA', icon: 'fa-solid fa-network-wired', color: '#2867b2' },
      ]
    },
    {
      label: 'Data Science',
      skills: [
        { name: 'Pandas', icon: 'fa-solid fa-database', color: '#150458' },
        { name: 'Matplotlib', icon: 'fa-solid fa-chart-line', color: '#11557c' },
        { name: 'Seaborn', icon: 'fa-solid fa-water', color: '#43b7ba' },
      ]
    },
    {
      label: 'Soft Skills',
      skills: [
        { name: 'Problem-solving', icon: 'fa-solid fa-lightbulb', color: '#fbc02d' },
        { name: 'Teamwork', icon: 'fa-solid fa-people-group', color: '#1976d2' },
        { name: 'Adaptability', icon: 'fa-solid fa-arrows-rotate', color: '#43b7ba' },
        { name: 'Communication', icon: 'fa-solid fa-comments', color: '#43b7ba' },
      ]
    }
  ];
  
}
