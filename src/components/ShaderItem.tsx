import React from "react";
import { Shader } from "../models/Shader";
import { IonCard, IonCardHeader, IonLabel, IonCardContent } from "@ionic/react";
import { Dial, RadioButton } from "react-nexusui";
import useStore from "../data/store";

declare const window: any;

interface ShaderItemProps {
  shader: Shader;
}

const ShaderItem: React.FC<ShaderItemProps> = ({ shader }) => {
  const {
    shaders,
    setShaders,
  } = useStore();
  const [shaderValue, setShaderValue] = React.useState<string>("0.5");
  const emitToSocket = (value: string, index: number) => {
    setShaderValue(value);
    setShaders( 
      shaders.map((shader:Shader) => {
        if (shader.id === index) {
          return {
            ...shader,
            value: value
          };
        }
        return shader;
      })
    );
    if (window.socket && window.socket.readyState === 1) {
      window.socket.send(
        '{"params" :[{"name" : ' + index + ',"value" :' + value + "}]}"
      );
    } 
  };
  
  return (
    <>
      <IonCard className="shader-card">
        <IonCardHeader>
          <IonLabel>
          <h3>{shader.name}</h3>
          { shader.thumbnail && (<img
            src={shader.thumbnail}
            alt="thumbnail"
          />)}
          <p>
            {shader.author}
          </p>
          </IonLabel>
        </IonCardHeader>

        <IonCardContent>
          
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default ShaderItem;
