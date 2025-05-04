import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import{IonList,IonItem} from '@ionic/angular/standalone';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-termino',
  templateUrl: './termino.page.html',
  styleUrls: ['./termino.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonItem,RouterLink,RouterLinkActive ]
})
export class TerminoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
