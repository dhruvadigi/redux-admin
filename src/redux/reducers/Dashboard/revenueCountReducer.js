import constants from "../../constant/constants";

const revenueCountReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.REVENUECOUNT_SUCCESS:
            return action.payload;
        case constants.REVENUECOUNT_FAILURE:
            return {};
        default:
            return state;
    }
};

export default revenueCountReducer;