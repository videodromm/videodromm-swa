import { create } from "zustand";
import { CONFIG } from "../config";
import { Uniform } from '../models/Uniform';
import { UNIFORMS } from "../uniforms";

type RFState = {
  uniforms: Uniform[];
  setUniforms: (uniforms: Uniform[]) => void;
  wsReady: boolean;
  setWsReady: (wsReady: boolean) => void;
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>((set, get) => ({
  uniforms: UNIFORMS,
  setUniforms: (uniforms: Uniform[]) => set({ uniforms }),
  wsReady: false,
  setWsReady: (wsReady: boolean) => set({ wsReady }),
}));

export default useStore;
