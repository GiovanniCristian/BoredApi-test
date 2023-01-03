import { createContext } from "react";

const ContextValue = {
    activity: [],
    pushActivity: () => null
  };

export const ActivityContext = createContext(ContextValue);