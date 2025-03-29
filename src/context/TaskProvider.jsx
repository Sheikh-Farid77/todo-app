import { useContext } from "react";
import { createContext } from "react";

const taskContext = createContext(null);

export default function TaskProvider({ children }) {
  return <taskContext.Provider>{children}</taskContext.Provider>;
}

// custom hook for clean and less code
// eslint-disable-next-line react-refresh/only-export-components
export const useTask = () => {
  return useContext(taskContext);
};
