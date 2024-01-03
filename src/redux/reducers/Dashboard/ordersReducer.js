import constants from "../../constant/constants";

const ordersReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.ORDERS_SUCCESS:
            return action.payload;
        case constants.ORDERS_FAILURE:
            return {};
        default:
            return state;
    }
};

export default ordersReducer;