import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Input() index: any;

  @Output() addCardChild = new EventEmitter();
  @Output() deletedCardChild = new EventEmitter();

  editing = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      index: this.index,
    });
  }

  editCard() {
    this.editing = true;
  }

  addNewCard() {
    this.editing = false;
    // console.log(this.form.value);

    this.addCardChild.emit(this.form.value);
  }



  deletedCard() {
    this.deletedCardChild.emit(this.form.value);
  }
}
