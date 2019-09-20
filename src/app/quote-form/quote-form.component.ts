import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';


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

  submitForm(){

  }
  

}
