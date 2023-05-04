// import { configureStore } from "@reduxjs/toolkit";
// import tabsReducer from './features/tabs/tabSlice';
// import { persistStore, persistReducer } from "redux-persist";
// // const reducer = persistReducer(reducer)
// export const store = configureStore({
//     reducer: {
//         tabs: tabsReducer,
//     },
// })


import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import tabsReducer from './features/tabs/tabSlice';
const rootReducer = combineReducers({
    tabs: tabsReducer,
});
const persistConfig = {
    key: "authType",
    storage: storage,
    whitelist: ["tabs"],
};
const Reducer = persistReducer(persistConfig, rootReducer);
const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);
export { persistor, store };