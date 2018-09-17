import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import {IAppState, INITIAL_STATE, rootReducer} from './store';
import { createStore } from 'redux';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgReduxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

    //**************
    // Constructor *
    //**************
    constructor(private m_redux: NgRedux<IAppState>) {

        this.m_redux.configureStore(rootReducer, INITIAL_STATE);
    }

    //**********
    // Getters *
    //**********
    get redux() { return this.m_redux; }

}
