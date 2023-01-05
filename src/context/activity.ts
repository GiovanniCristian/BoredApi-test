import { createContext } from "react";

interface ContextInterface {
  activities: string[];
  pushActivity: ( activity: string ) => void;
}

const ContextValue = {
    activities: [],
    pushActivity: () => null
  };

export const ActivityContext = createContext<ContextInterface>(ContextValue);