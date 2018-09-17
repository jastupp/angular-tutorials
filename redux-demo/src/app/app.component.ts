import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    //****************
    // Class Members *
    //****************
    private m_title = 'redux-demo';
    private m_counter = 0;

    //**************
    // Constructor *
    //**************
    constructor(private m_redux: NgRedux<IAppState>) {}

    //**********
    // Getters *
    //**********
    get counter() { return this.m_counter; }
    get title() { return this.m_title; }
    get redux() { return this.m_redux; }


    increment() {
        this.redux.dispatch({type: 'INCREMENT'});
    }

}
