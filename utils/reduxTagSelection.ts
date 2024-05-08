import { handleSelection } from "@/app/type/selection";
import {
  removeActivities,
  removeAmentities,
  setActivities,
  setAmentities,
} from "@/lib/features/planning";

export const activitiesFunc: handleSelection = {
  value: "activities",
  handleFunc: {
    setFunc: setActivities,
    rmFunc: removeActivities,
  },
};

export const amenitiesFunc: handleSelection = {
  value: "amentities",
  handleFunc: {
    setFunc: setAmentities,
    rmFunc: removeAmentities,
  },
};

//if your are defining more tags to select, after define set and remove function then put the variable here
export const selectionObj = [activitiesFunc, amenitiesFunc];
