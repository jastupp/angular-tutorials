/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
    template: `
        <p highlight="cyan">First</p>
        <p highlight>Second</p>
    `
})
class DirectiveHostComponent {
}

describe('HighlightDirective', () => {
    let fixture: ComponentFixture<DirectiveHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DirectiveHostComponent, HighlightDirective]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DirectiveHostComponent);
        fixture.detectChanges();
    });

    it('should highlight the first element with cyan', () => {
        const element = fixture.debugElement.queryAll(By.css('p'))[0];
        expect(element.nativeElement.style.backgroundColor).toBe('cyan');
    });

    it('should highlight the second element with default', () => {
        const element = fixture.debugElement.queryAll(By.css('p'))[1];
        const directive = element.injector.get(HighlightDirective);
        expect(element.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
    });
});
