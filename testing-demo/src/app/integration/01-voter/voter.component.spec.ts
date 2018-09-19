import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';


describe('Voter Component', () => {

    let component: VoterComponent;
    let fixture: ComponentFixture<VoterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ VoterComponent ]
        });

        fixture = TestBed.createComponent(VoterComponent);
        component = fixture.componentInstance;
    });

    it('should render total votes', () => {
        component.othersVote = 20;
        component.myVote = 1;
        fixture.detectChanges();

        const element: HTMLElement = fixture.debugElement.query(By.css('.vote-count')).nativeElement;
        expect(element.innerText).toContain('21');

    });

    it('should higlight the opvote buttom if I have upvoted', () => {
        component.myVote = 1;
        fixture.detectChanges();

        const element = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
        expect(element.classes['highlighted']).toBeTruthy();
    });

    it('should increase total votes when the upvote button is clicked', () => {

        const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
        button.triggerEventHandler('click', null);
        expect(component.totalVotes).toBe(1);
    });

});
