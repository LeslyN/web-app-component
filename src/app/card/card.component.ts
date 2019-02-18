import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  form: FormGroup;
  @Input() title: any;
  @Input() content: any;
  @Input() imageUrl: any;

  @Output() addCardChild = new EventEmitter<any>();


  editing = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]]
    });
  }

  editCard() {
    this.editing = true;

  }

  addNewCard() {
    this.editing = false;
    console.log(this.form.value);

    this.addCardChild.emit(this.form.value);
  }



  deletedCard() {}
}
