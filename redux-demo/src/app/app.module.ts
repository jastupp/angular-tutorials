import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer } from './store';


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
export class AppModule implements OnInit {

    //**************
    // Constructor *
    //**************
    constructor(private m_redux: NgRedux<IAppState>) {}


    ngOnInit() {
        this.ngRedux.configureStore(rootReducer, {});
    }

    //**********
    // Getters *
    //**********
    get ngRedux() { return this.m_redux; }

}
