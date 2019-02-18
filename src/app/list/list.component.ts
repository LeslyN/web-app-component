import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  /** Inyector para noticia uno */ 
  @Input() title1;
  @Input() description1;
  @Input() logo1;
  
  /** Inyector para noticia dos */ 
  @Input() title2;
  @Input() description2;
  @Input() logo2;
  
  /** Inyector para noticia tres */ 
  @Input() title3;
  @Input() description3;
  @Input() logo3;

  constructor() { }

  ngOnInit() {
  }

}
