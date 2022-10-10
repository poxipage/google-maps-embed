import { state, type State } from "poxi";

type Schema = { position: string };
export const getState = () => state<Schema>();
export const getPosition = () => getState().get("position")

export function onCreate(state: State<Schema>) {
  state.set({ position: "Gløshaugen" });
}
