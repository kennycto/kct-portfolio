import * as actionTypes from "../actions/actionTypes";

const initialState = "/";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PAGE:
            return action.pageValue;
        default:
            return state;
    }
};

export default reducer;
