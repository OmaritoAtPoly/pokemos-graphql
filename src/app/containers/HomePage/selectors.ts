import {createSelector} from "reselect";
import {RootState} from "../../store";

const selectHomePage = (state: RootState) => state.homePage;

export const makeSelectAnimePage = createSelector(selectHomePage, (homePage) => homePage.animePage)