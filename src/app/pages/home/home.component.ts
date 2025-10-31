import { Component } from '@angular/core';

interface ClientLogo {
  name: string;
  url: string;
  img: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  name = "Mohamed Chiheb Eddine Benammar";

  heroMsg =
    "Je suis Chiheb Eddine Benammar, Étudiant en 3ᵉ année cycle ingénieur – Génie Logiciel passionné par l’IA et les technologies modernes.";
  profileImg = "/assets/photo-profile.jpeg";
  cvUrl = "../../../assets/chiheb Eddine-cv-5emeannée-GL.pdf";
  clients: ClientLogo[] = [
    { name: "Satoripop", url: "#", img: "assets/img/client-satoripop.png" },
    { name: "Avionav", url: "#", img: "assets/img/client-avionav.png" },
    { name: "EPI Digital School", url: "#", img: "assets/img/client-epi.png" },
    { name: "ENISO", url: "#", img: "assets/img/client-eniso.png" },
  ];

  scrollToProjects(event: Event) {
    event.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
}
