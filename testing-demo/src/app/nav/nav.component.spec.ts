import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { AppComponent } from '../app.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavComponent],
            imports: [ RouterTestingModule.withRoutes([]) ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have link to the todos page', async(() => {
        const elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

        const index = elements.findIndex(de => de.attributes['routerLink'] === 'todos');
        console.log(elements);

        expect(index).toBeGreaterThan(-1);
    }));
});
