import { createSelector } from "reselect";
import { get } from "lodash";
const selectTest = state => get(state, "test", {});
const selectTest1 = state => get(state, "test1", {});

export const makeAllTest = createSelector(
  selectTest,
  selectTest1,
  (test, test1) => {
    return {
      test,
      test1
    };
  }
);
