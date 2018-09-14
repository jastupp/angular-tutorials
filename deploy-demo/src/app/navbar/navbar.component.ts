import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    //****************
    // Class Members *
    //****************
    private m_background_color = environment.navBarBackgroundColor;

    //**************
    // Constructor *
    //**************
    constructor() {
    }

    //**********
    // Getters *
    //**********
    get backgroundColor() { return this.m_background_color; }


    ngOnInit() {
    }

}
