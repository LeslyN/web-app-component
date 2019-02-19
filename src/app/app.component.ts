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

    // if (this.cards.length > 0) {
    // tslint:disable-next-line: forin
      // for (let item in this.cards) {
      //     this.cards[item].title = event.title;
      //     this.cards[item].content = event.content;
      //     this.cards[item].imageUrl = event.imageUrl;
      //     console.log('item ++: ',  item += 1);

      //   console.log('este es el card numero ' + item,  'este es title: ' + event.title )
      // }
      for (let i = 0; i < this.cards.length; i++) {
        this.cards[i].title = event.title;
        this.cards[i].content = event.content;
        this.cards[i].imageUrl = event.imageUrl;

        console.log('este es i: ', i);
        console.log('Este es el titulo: ', this.cards[i].title);
      }
    // }
  }

}
