import * as actionTypes from './actionTypes';
import axios from 'axios';

const GITCONNECTED_API_URL = "https://gitconnected.com/v1/portfolio/knyto2";

const saveSync = profile => {
	return {
		type: actionTypes.SAVE,
		profile
	}
}

export const save = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(GITCONNECTED_API_URL);
			dispatch(saveSync(response.data));
		} catch (error) {
			console.log(error);
		}
	}
}