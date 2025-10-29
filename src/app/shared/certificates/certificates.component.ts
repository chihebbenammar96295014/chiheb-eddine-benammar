import { Component } from '@angular/core';

interface Certificate {
  name: string;
  platform: string;
  date: string;
  
  skills: string[];
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {
      name: 'AWS Academy Cloud Foundations',
      platform: 'AWS Academy',
      date: '12/2024',
      skills: ['Cloud computing', 'Services AWS de base']
    },
    {
      name: 'CCNA 1 - Introduction aux réseaux',
      platform: 'Cisco',
      date: '05/2024',
      skills: ['LAN/WAN', 'TCP/IP', 'OSPF']
    },
    {
      name: 'CCNA 2 - Switching, Routing & Wireless Essentials',
      platform: 'Cisco',
      date: '06/2024',
      skills: ['Routage avancé', 'Adressage IP', 'Subnetting']
    },
    {
      name: 'Certified Hedera Hashgraph Developer',
      platform: 'Hedera Hashgraph Foundation',
      date: '04/2025',
      skills: ['Blockchain', 'Développement sur Hedera']
    }
  ];
}
