import constants from "../../constant/constants";

export const inventoryCountAction = () => {
    console.log("trigger actions")
    return async (dispatch) => {
        await fetch("https://dummyjson.com/products")
            .then(response => response.text())
            .then(result => {
                dispatch(inventoryCountSuccess(JSON.parse(result)))
            })
           .catch((err) => {
                dispatch(inventoryCountFailure(err));
            });
    }
}

export const inventoryCountSuccess = (data) => {
    return {
        type: constants.INVENTORYCOUNT_SUCCESS,
        payload: data
    }

}

export const inventoryCountFailure = (err) => {
    return {
        type: constants.INVENTORYCOUNT_FAILURE,
        payload: err
    }

}