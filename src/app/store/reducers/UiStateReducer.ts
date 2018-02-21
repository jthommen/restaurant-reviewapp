import { Action } from '@ngrx/store';
import { UiState } from '../ui-state';

export function uiState(state: UiState, action: Action): UiState {

    switch(action.type) {

    default:
        return state;
    }
}