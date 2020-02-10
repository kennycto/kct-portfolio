import * as actionTypes from '../actions/actionTypes';

const initialState = {
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SAVE:
			return { ...action.profile };
		default:
			return state;
	}
}

export default reducer;