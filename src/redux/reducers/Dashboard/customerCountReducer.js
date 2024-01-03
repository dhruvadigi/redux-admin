import constants from "../../constant/constants";

const customerCountReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.CUSTOMERCOUNT_SUCCESS:
            return action.payload;
        case constants.CUSTOMERCOUNT_FAILURE:
            return {};
        default:
            return state;
    }
};

export default customerCountReducer;