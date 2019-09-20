import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  newQuote = new Quote(0,"","",new Date(),0,0,0);
  @Output() quoteAdd = new EventEmitter<Quote>();

  submitForm(form: NgForm){
    this.quoteAdd.emit(this.newQuote);
    form.reset();
    this.newQuote = new Quote(0,"","",new Date(),0,0,0);
  }
  

}
