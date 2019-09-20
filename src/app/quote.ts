export class Quote {
    showDetails: boolean;
    
    constructor(
        public id: number,
        public quote: string,
        public author: string,
        public daysPassed: Date,
        public upvote: number,
        public downvote: number,
        public voteDifference: number
    ){
        this.showDetails = false;
    }
}
