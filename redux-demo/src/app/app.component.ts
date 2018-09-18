import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
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
    private m_counter;
    private m_new_messages;

    //**************
    // Constructor *
    //**************
    constructor(private m_redux: NgRedux<IAppState>) {}

    //**********
    // Getters *
    //**********
    //get counter() { return this.m_counter; }
    get title() { return this.m_title; }
    get redux() { return this.m_redux; }
    get counter() { return this.m_counter; }
    get newMessages() { return this.m_new_messages; }

    //**********
    // Setters *
    //**********
    set counter(value) { this.m_counter = value; }
    set newMessages(value) { this.m_new_messages = value; }


    ngOnInit() {
        this.counter = this.redux.select('counter');
        this.newMessages = this.redux.select(['messaging', 'newMessages']);
    }

    increment() {
        this.redux.dispatch({ type: Actions.INCREMENT });
    }

}
