import constants from "../../constant/constants";

export const revenueCountAction = () => {
    console.log("trigger actions")
    return async (dispatch) => {
        await fetch("https://dummyjson.com/carts")
            .then(response => response.text())
            .then(result => {
                dispatch(revenueCountActionSuccess(JSON.parse(result)))
            })
           .catch((err) => {
                dispatch(revenueCountActionFailure(err));
            });
    }
}

export const revenueCountActionSuccess = (data) => {
    return {
        type: constants.REVENUECOUNT_SUCCESS,
        payload: data
    }

}

export const revenueCountActionFailure = (err) => {
    return {
        type: constants.REVENUECOUNT_FAILURE,
        payload: err
    }

}