/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Observable, Subject } from 'rxjs';

class RouterStub {
    navigate(params) {}
}

class ActivatedRouteStub {
    private m_subject = new Subject();

    get subject() { return this.m_subject; }
    get params() { return this.subject.asObservable(); }


    push(value) {
        this.subject.next(value);
    }
}

describe('UserDetailsComponent', () => {
    let component: UserDetailsComponent;
    let fixture: ComponentFixture<UserDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserDetailsComponent],
            providers: [
                { provide: Router, useClass: RouterStub },
                { provide: ActivatedRoute, useClass: ActivatedRouteStub }
            ]
         })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should drect the user to the users page after saving', () => {
        const router = TestBed.get(Router);
        const spy = spyOn(router, 'navigate');

        component.save();

        expect(spy).toHaveBeenCalledWith(['users']);

    });

    it('should navigate the user to the not found page when the user id is invalid', () => {
        const router = TestBed.get(Router);
        const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
        const spy = spyOn(router, 'navigate');

        route.push({ id: 0});

        expect(spy).toHaveBeenCalledWith(['not-found']);

    });
});
