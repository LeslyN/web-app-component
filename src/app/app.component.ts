import { Component } from '@angular/core';

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
        imageUrl: 'https://bulma.io/images/placeholders/128x128.png',
        index: this.cards.length
      }
    );
  }


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
    );
  }

  newCard(event) {

    if (this.cards.length > 0) {
      this.cards[event.index].title = event.title;
      this.cards[event.index].content = event.content;
      this.cards[event.index].imageUrl = event.imageUrl;
    }
  }

  deletedCard(event) {
    // this.cards.splice(event.index, 1);

    const i = this.cards.indexOf(this.cards[event.index]);
    if (i !== -1) {
      this.cards.splice(i, 1);
    }
  }

}
