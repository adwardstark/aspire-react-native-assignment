import * as types from '../types';

const initialState = {
    card: null
}

export default function getCardDetails(state = initialState, action) {
    switch(action.type) {
        case types.GET_CARD_DETAILS:
            return {
                ...state,
                card: action.payload,
            }
        default:
            return state;
    }
}