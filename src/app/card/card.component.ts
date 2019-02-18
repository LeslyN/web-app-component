import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title;
  @Input() content;
  @Input() imageUrl;
  
  editing: boolean = false;

  constructor() { }

  ngOnInit() {
  
  }  

  editCard() {
    // console.log(event);
    // let element = event.target;
    // if (element.files.length > 0) {
    //   let data = new FormData();
    //   data.append('file', element.file[0]);
    // }
    this.editing = true;
  }

}
