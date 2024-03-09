import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import UniformItem from "./UniformItem";
import { Uniform } from "../models/Uniform";
import useStore from "../data/store";
import { CONFIG } from "../config";
import "./UniformList.css";

const UniformList: React.FC = () => {
  const { uniforms } = useStore();
  return (
    <IonGrid fixed>
      <IonRow>
        {uniforms.map((uniform:Uniform) => (
          <IonCol size="4" key={uniform.id}>
            <UniformItem key={uniform.id} uniform={uniform} />
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default UniformList;
