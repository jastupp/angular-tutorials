import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    //**************
    // Constructor *
    //**************
    constructor(private m_router: Router,
                private m_route: ActivatedRoute) { }

    //**********
    // Getters *
    //**********
    get router() { return this.m_router; }
    get route() { return this.m_route; }


    ngOnInit() {
        this.route.params.subscribe(p => {
            if(p['id'] === 0) {
                this.router.navigate(['not-found']);
            }
        });
    }

    save() {
        this.router.navigate(['users']);
    }
}
