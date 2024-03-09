import { create } from "zustand";
import { CONFIG } from "../config";
import { Uniform } from '../models/Uniform';
import { UNIFORMS } from "../uniforms";
import { Shader } from "../models/Shader";
import { SHADERS } from "../shaders";

type RFState = {
  uniforms: Uniform[];
  setUniforms: (uniforms: Uniform[]) => void;
  shaders: Shader[],
  setShaders: (shaders: Shader[]) => void;
  wsReady: boolean;
  setWsReady: (wsReady: boolean) => void;
  wssServerUrl: string;
  setWssServerUrl: (serverUrl: string) => void;
  status: string;
  setStatus: (status: string) => void;
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>((set, get) => ({
  uniforms: UNIFORMS,
  setUniforms: (uniforms: Uniform[]) => set({ uniforms }),
  shaders: SHADERS,
  setShaders: (shaders: Shader[]) => set({ shaders }),
  wsReady: false,
  setWsReady: (wsReady: boolean) => set({ wsReady }),
  wssServerUrl: CONFIG.wssUrl,
  setWssServerUrl: (wssServerUrl: string) => set({ wssServerUrl }),
  status: "WsNotConnected",
  setStatus: (status: string) => set({ status }),
}));

export default useStore;
