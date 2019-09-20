import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  
  quotes: Quote[] = [
    new Quote(0,"Hell hath no fury like a woman scorned","Whoever it was",new Date(2019,14,1),0,0,0),
    new Quote(1,"I have a dream....","Martin Luther King Jnr",new Date(2019,18,5),0,0,0),
    new Quote(2,"Together we can","Obama",new Date(2009,2,4),0,0,0)
  ];

  //Button Functions
  toggleDetails(index: number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails 
  }

  upvoteQuote(index: number){
    this.quotes[index].upvote += 1;
  }
  downvoteQuote(index: number){
    this.quotes[index].downvote += 1;
  }
  



}