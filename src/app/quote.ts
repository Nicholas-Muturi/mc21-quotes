export class Quote {
    showDetails: boolean;
    daysPassed: number;
    
    constructor(
        public id: number,
        public quote: string,
        public author: string,
        public creationDate: Date,
        public upvote: number,
        public downvote: number,
        public voteDifference: number
    ){
        this.showDetails = false;
    }
}
