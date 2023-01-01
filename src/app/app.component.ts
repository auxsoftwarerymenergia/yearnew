import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Feliz año';
  variable = [

    {
      nombre: "",
      imagen: "assets/homero.png",
      sonido: "",
      ngif: true
    }

  ]

  constructor(private router: Router) {
    router.events.subscribe((url: any) => {
      if (url instanceof NavigationEnd) {
        if (this.router.url == "/#/52872") {
          this.variable = [
            {
              nombre: "Hola Laura, reproduce el audio",
              imagen: "assets/homero.png",
              sonido: "assets/laura.mp3",
              ngif: true
            }
          ]
        }
        if (this.router.url == "/#/34269") {
          this.variable = [
            {
              nombre: "Hola Diany, reproduce el audio",
              imagen: "assets/goku.png",
              sonido: "assets/diany.mp3",
              ngif: true
            }
          ]
        }
        else  {
          this.variable = [
            {
              nombre: "Estas pérdida?? porque veo que anotaste mal la dirección hahahahah",
              imagen: "assets/perdidobg.jpg",
              sonido: "",
              ngif: false
            }
          ]
        }
      }
    }
    )

    //console.log(router.url)

  }

  ngOnInit(): void {

  }

  comprobarEnlace() {

  }
}
