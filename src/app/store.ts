import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import homePageReducer from './containers/HomePage/homePageSlice';
import ReduxLogger from 'redux-logger';
import {CurriedGetDefaultMiddleware} from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {IHomePageState} from './containers/HomePage/types';

const middleware = (getDefaultMiddleWare: CurriedGetDefaultMiddleware<{
  homePage: IHomePageState;
}>) => getDefaultMiddleWare().concat(ReduxLogger);

export const store = configureStore({
  middleware,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // DO NOT ERASE, IT'S THE SAME THAN THE WRITTEN MIDDLEWARE OVER THE THIS FUNCTION
  reducer: {
    homePage: homePageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
