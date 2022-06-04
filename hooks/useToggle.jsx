import { useState, useCallback } from "react";

export default function useToggle(initialState) {
  const [state, setState] = useState(initialState);

  const isToggle = useCallback(() => setState((state) => !state), []);

  return [state, isToggle];
}
