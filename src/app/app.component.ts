import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Prueba Multiplica';
  
  cards = [];
  listCards = [];

  addCard() {
    this.cards.push(
      {
        title: 'Card1',
        content: 'Contenido card1',
        imageUrl: 'https://bulma.io/images/placeholders/128x128.png'
      }
    )
  };


  addList() {
    this.listCards.push(
      {
        title1: 'Noticia uno',
        description1: 'Descripción noticia1',
        logo1: 'https://bulma.io/images/placeholders/48x48.png',
        title2: 'Noticia dos',
        description2: 'Descripción noticia2',
        logo2: 'https://bulma.io/images/placeholders/48x48.png',
        title3: 'Noticia tres',
        description3: 'Descripción noticia3',
        logo3: 'https://bulma.io/images/placeholders/48x48.png'
      }
    )
  }
}
