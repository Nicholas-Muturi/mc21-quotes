import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  @Input() quote: Quote;
  @Output() upVote = new EventEmitter();
  @Output() downVote = new EventEmitter();
  @Output() quoteDel = new EventEmitter();


  quoteUpvote(){
    this.upVote.emit();
  }

  quoteDownvote(){
    this.downVote.emit();
  }

  quoteDelete(){
    this.quoteDel.emit();
  }

  

}
