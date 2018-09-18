import { Actions } from './actions';
import { tassign } from 'tassign';
import { Map } from 'immutable';

export interface IAppState {
    counter: number;
    messaging?: {
        newMessages: number;
    };
}

export const INITIAL_STATE: IAppState = {
    counter: 0,
    messaging: {
        newMessages: 5
    }
};


export function rootReducer(state: IAppState, action): IAppState {

    let result: IAppState;


    if (Actions[action.type]) {
        result = tassign(state);
    }

    if (action.type === Actions.INCREMENT) {
        result.counter = result.counter + 1;
    }

    return result || state;
}

