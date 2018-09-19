export class VoteComponent {

    //****************
    // Class Members *
    //****************
    private m_votes = 0;

    //**********
    // Getters *
    //**********
    get votes() { return this.m_votes; }

    //**********
    // Setters *
    //**********
    set votes(value) { this.m_votes = value; }


    upVote() {
        this.votes++;
    }

    downVote() {
        this.votes--;
    }
}
