import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducer";

export const makeStore = () => {
  let store;

  const persistConfig = {
    key: "root",
    storage,
  };

  store = createStore(
    persistReducer(persistConfig, reducer),
    undefined,
    applyMiddleware(thunkMiddleware)
  );
  store.__PERSISTOR = persistStore(store);

  return store;
};
