import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { Actions } from './actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

    ngOnInit() {
        this.redux.subscribe(() => {
            console.log(this.redux.getState());
        });
    }

    increment() {
        this.redux.dispatch({ type: Actions.INCREMENT });
    }

}
