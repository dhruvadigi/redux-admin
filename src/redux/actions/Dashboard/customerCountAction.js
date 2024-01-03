import constants from "../../constant/constants";

export const customerCountAction = () => {
    console.log("trigger actions")
    return async (dispatch) => {
        await fetch("https://dummyjson.com/users")
            .then(response => response.text())
            .then(result => {
                dispatch(customerCountActionSuccess(JSON.parse(result)))
            })
           .catch((err) => {
                dispatch(customerCountActionFailure(err));
            });
    }
}

export const customerCountActionSuccess = (data) => {
    return {
        type: constants.CUSTOMERCOUNT_SUCCESS,
        payload: data
    }

}

export const customerCountActionFailure = (err) => {
    return {
        type: constants.CUSTOMERCOUNT_FAILURE,
        payload: err
    }

}