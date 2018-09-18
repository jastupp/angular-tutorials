import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import {IAppState, INITIAL_STATE, rootReducer} from './store';

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
    constructor(private m_dev_tools: DevToolsExtension,
                private m_redux: NgRedux<IAppState>) {

        const enhancers = isDevMode() ? [ this.devTools.enhancer() ] : [];
        this.redux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
    }

    //**********
    // Getters *
    //**********
    get redux() { return this.m_redux; }
    get devTools() { return this.m_dev_tools; }

}
