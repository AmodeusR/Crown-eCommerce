import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"] 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [import.meta.env.DEV && logger, thunk].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);