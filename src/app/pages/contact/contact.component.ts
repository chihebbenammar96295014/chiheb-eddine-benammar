import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  submitted = false;
  sending = false;
  info = {
    email: 'chihebeddine.benamar@gmail.com',
    phone: '+216 95 295 196',
    location: '4070, Msaken, Sousse, Tunisie',
    linkedin: 'https://www.linkedin.com/in/mohamed-chiheb-eddine-benammar-0aa456284/',
    github: 'https://github.com/chihebbenammar96295014'
  };

  onSubmit() {
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.submitted = true;
      this.contact = { name: '', email: '', subject: '', message: '' };
    }, 1200);
  }
}
