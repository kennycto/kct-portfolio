import * as actionTypes from "./actionTypes";

export const setPage = (pageValue) => {
    return {
        type: actionTypes.SET_PAGE,
        pageValue,
    };
};
