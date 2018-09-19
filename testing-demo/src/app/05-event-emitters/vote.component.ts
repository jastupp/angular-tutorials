import { EventEmitter } from '@angular/core';

export class VoteComponent {

    //****************
    // Class Members *
    //****************
    private m_votes = 0;
    private m_changed = new EventEmitter();

    //**********
    // Getters *
    //**********
    get votes() { return this.m_votes; }
    get changed() { return this.m_changed; }

    //**********
    // Setters *
    //**********
    set votes(value) { this.m_votes = value; }


    upVote() {
        this.votes++;
        this.changed.emit(this.votes);
    }
}
