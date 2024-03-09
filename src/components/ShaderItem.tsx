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
  //const [shaderValue, setShaderValue] = React.useState<string>("0.5");
  const emitToSocket = (value: string, index: number) => {
    //setShaderValue(value);
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
  const emitFragToSocket = () => {
    let msg = shader.fragtext.replace(/uniform vec2 resolution/, 'uniform vec3 iResolution');
    /*msg = msg.replace(/resolution/g, 'iResolution');
    msg = msg.replace(/uniform float time/, 'uniform float iTime');
    msg = msg.replace(/time/g, 'iTime');
    msg = msg.replace(/void main\(\)/, 'vec4 glreact(vec2 uv)');
    msg = msg.replace(/gl_FragColor =/, 'return ');
    msg += 'void main(){vec2 uv = gl_FragCoord.xy / iResolution.xy;gl_FragColor = glreact(uv);}';*/
    console.log(`emitFragToSocket ${msg}`);
    let cleanMsg = `{"event":"frag","message":"${msg}"}`;
    //cleanMsg = cleanMsg.replace(/\"/gi, '"');
    cleanMsg = cleanMsg.replace(/\t/gi, " ");
    cleanMsg = cleanMsg.replace(/\n/gi, "");
    if (window.socket && window.socket.readyState === 1) {
      window.socket.send(cleanMsg);
      console.log(`emitFragToSocket readyState`);
    } else {
      console.log(`emitFragToSocket not ready`);
    }
  };
  return (
    <>
      <IonCard className="shader-card">
        <IonCardHeader onClick={emitFragToSocket}>
          <IonLabel>
          <h3>{shader.name}</h3>
         
          </IonLabel>
        </IonCardHeader>

        <IonCardContent>
           { shader.thumbnail && (<img
            src={shader.thumbnail}
            alt="thumbnail"
          />)}
         
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default ShaderItem;
