import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import ShaderItem from "./ShaderItem";
import { Shader } from "../models/Shader";
import useStore from "../data/store";
import { CONFIG } from "../config";
import "./ShaderList.css";

const ShaderList: React.FC = () => {
  const { shaders } = useStore();
  return (
    <IonGrid fixed>
      <IonRow>
        {shaders.map((shader:Shader) => (
          <IonCol size="4" key={shader.id}>
            <ShaderItem key={shader.id} shader={shader} />
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default ShaderList;
