import constants from "../../constant/constants";

export const ordersAction = () => {
    console.log("trigger actions")
    return async (dispatch) => {
        await fetch("https://dummyjson.com/carts/")
            .then(response => response.text())
            .then(result => {
                dispatch(ordersSuccess(JSON.parse(result)))
            })
           .catch((err) => {
                dispatch(ordersFailure(err));
            });
    }
}

export const ordersSuccess = (data) => {
    return {
        type: constants.ORDERS_SUCCESS,
        payload: data
    }

}

export const ordersFailure = (err) => {
    return {
        type: constants.ORDERS_FAILURE,
        payload: err
    }

}