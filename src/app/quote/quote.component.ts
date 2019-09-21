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
    new Quote(1,"Act as if what you do makes a difference. It does.","William James",new Date(2019,8,11),0,0,0),
    new Quote(2,"Success is not final, failure is not fatal: it is the courage to continue that counts.","Winston Churchill",new Date(2019,5,18),0,0,0),
    new Quote(3,"You are never too old to set another goal or to dream a new dream.","C.S. Lewis",new Date(2009,4,20),0,0,0),
    new Quote(4,"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.","William James",new Date(2019,8,19),0,0,0)
  ];

  highestVotedQuote = {
    voteCount: 0,
    qID: 0,
    quote: "This is where the most voted quote will appear",
    author: "Developer"
  }

  //Button Click Functions
  showDetails(index: number){
    this.quotes[index].showDetails = true;
    this.quotes[index].showDetailsBtn = false;
  }

  hideDetails(index: number){
    this.quotes[index].showDetails = false;
    this.quotes[index].showDetailsBtn = true;
  }

  addQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.creationDate = new Date(quote.creationDate);
    if(quote.creationDate > new Date()){
      //if quote date is posted ahead of it's time, it should not be allowed.
      alert("Nice try! Time travelling are we? Future-dated quotes are not allowed");
    }
    else {
      this.quotes.push(quote);
    }
    
  }

  upvoteQuote(index: number){
    this.quotes[index].upvote += 1;
    this.quotes[index].voteDifference += 1;
    this.getHighestVoted();
  }
  downvoteQuote(index: number){
    this.quotes[index].downvote += 1;
    this.quotes[index].voteDifference -= 1;
    this.getHighestVoted();
  }
  deleteQuote(index: number){
    if(this.quotes[index].quote.length > 15){
      let shortenedQuote = (this.quotes[index].quote.substr(0,15).concat("..."));
      var confirmed = confirm(`Are you sure you want to delete the following quote: \"${shortenedQuote}\"`)
    }
    else {
      var confirmed = confirm(`Are you sure you want to delete the following quote: \"${this.quotes[index].quote}\"`)
    }

    if(confirmed){
      this.quotes.splice(index,1);
      this.getHighestVoted();
    }
  }

  //Functions
  getHighestVoted(){
    // It might not be the best optimized approach but atleast it works ^^
    var sortedArray = [];
    for(let i:number = 0; i<this.quotes.length;i++){
      sortedArray.push(this.quotes[i].voteDifference)
    }
    this.highestVotedQuote.voteCount = Math.max.apply(null,sortedArray)

    for(let i:number = 0; i<this.quotes.length;i++){
      if(this.highestVotedQuote.voteCount == this.quotes[i].voteDifference){
        this.highestVotedQuote.qID = this.quotes[i].id;
        this.highestVotedQuote.quote = this.quotes[i].quote;
        this.highestVotedQuote.author = this.quotes[i].author;
      }
    }
  }



}//end