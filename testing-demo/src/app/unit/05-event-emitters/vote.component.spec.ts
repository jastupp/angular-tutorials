import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

    let component: VoteComponent;

    beforeEach(() => {
        component = new VoteComponent();
    });

    it('should raise vote changed event when upvoted ', () => {
        let total_votes = null;

        component.changed.subscribe(votes => {
            total_votes = votes;
        });

        component.upVote();

        expect(total_votes).toBe(1);
    });

});
