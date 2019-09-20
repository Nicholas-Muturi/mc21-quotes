import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(0,"Hell hath no dury like a woman scorned","Whoever it was",new Date(2019,14,1),0,0,0),
    new Quote(1,"I have a dream....","Martin Luther King Jnr",new Date(2019,18,5),0,0,0),
    new Quote(2,"Together we can","Obama",new Date(2009,2,4),0,0,0)
  ];
  constructor() { }

  ngOnInit() {
  }

}
