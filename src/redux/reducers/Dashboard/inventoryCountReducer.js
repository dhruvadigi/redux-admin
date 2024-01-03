import constants from "../../constant/constants";

const inventoryCountReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.INVENTORYCOUNT_SUCCESS:
            return action.payload;
        case constants.INVENTORYCOUNT_FAILURE:
            return {};
        default:
            return state;
    }
};

export default inventoryCountReducer;