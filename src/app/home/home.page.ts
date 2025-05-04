import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { GamesService } from '../services/games.service'; 
import { OnInit } from '@angular/core';
import{IonList,IonItem} from '@ionic/angular/standalone';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonItem,RouterLink,RouterLinkActive],
})
export class HomePage implements OnInit {

  constructor(private steam: GamesService) { 

  }

  ngOnInit() {
    this.getListarJogos();
  }

  getListarJogos() {
    this.steam.listarJogos().subscribe(
      (dados: any) => {
        console.log(dados.results.slice(0, 20));
      }
    )

  }

}

