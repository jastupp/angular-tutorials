import { Component, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-voter',
    templateUrl: './voter.component.html',
    styleUrls: ['./voter.component.css']
})
export class VoterComponent {

    //****************
    // Class Members *
    //****************
    private m_others_vote = 0;
    private m_my_vote = 0;
    private m_vote = new EventEmitter();


    //**********
    // Getters *
    //**********
    @Input() get othersVote() { return this.m_others_vote; }
    @Input() get myVote() { return this.m_my_vote; }
    @Input() get vote() { return this.m_vote; }
    get totalVotes() { return this.othersVote + this.myVote; }

    //**********
    // Setters *
    //**********
    set othersVote(value) { this.m_others_vote = value; }
    set myVote(value) { this.m_my_vote = value; }
    set vote(value) { this.m_vote = value; }

    upVote() {
        if(this.myVote !== 1) {
            this.myVote++;

            this.vote.emit({ myVote: this.myVote });
        }
    }

    downVote() {
        if(this.myVote !== -1) {
            this.myVote--;
            this.vote.emit({ myVote: this.myVote });
        }
    }
}
