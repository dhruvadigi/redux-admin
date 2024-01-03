import { combineReducers } from "redux";
import ordersReducer from './Dashboard/ordersReducer';
import inventoryCountReducer from "./Dashboard/inventoryCountReducer";
import customerCountReducer from "./Dashboard/customerCountReducer";
import revenueCountReducer from "./Dashboard/revenueCountReducer";

const rootReducer = combineReducers({
    revenueCount:revenueCountReducer,
    customerCount:customerCountReducer,
    inventoryCount: inventoryCountReducer,
    orders: ordersReducer
});

export default rootReducer;