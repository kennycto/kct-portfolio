import * as actionTypes from "./actionTypes";
import axios from "axios";

const GITCONNECTED_API_URL = "https://gitconnected.com/v1/portfolio/knyto2";

const saveProfileSync = (profile) => {
    return {
        type: actionTypes.SAVE,
        profile,
    };
};

export const getProfile = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(GITCONNECTED_API_URL);
            dispatch(saveProfileSync(response.data));
        } catch (error) {
            console.log(error);
        }
    };
};
