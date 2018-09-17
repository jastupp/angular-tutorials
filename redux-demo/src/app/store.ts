import {Actions} from './actions';

export interface IAppState {
    counter: number;
}

export const INITIAL_STATE: IAppState = {
    counter: 0
};


export function rootReducer(state: IAppState, action): IAppState {

    let result: IAppState = { counter: state.counter };

    if (action.type === Actions.INCREMENT) {
        result = { counter: state.counter + 1 };
    }

    return result;
}

