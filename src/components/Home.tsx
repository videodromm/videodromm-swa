import { useEffect } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import useStore from "../data/store";
import UniformList from "./UniformList";
import './Home.css';
import { getPreferences, setPreferences } from '../lib/Utils';
import { CONFIG } from '../config';
import { WsMessage } from '../models/WsMessage'; 
import { Uniform } from '../models/Uniform';

declare const window: any;

interface ContainerProps {
  name: string;
}

const Home: React.FC<ContainerProps> = ({ name }) => {
  const {
    uniforms,
    setUniforms,
    wsReady,
    setWsReady,
  } = useStore();

  // webSocket
  useEffect(() => {
    const _timer = setTimeout(() => {
      
        if (window.socket && window.socket.readyState === 1) {
          setWsReady(true);
          //setPreferences("serverUrl", serverUrl);      
          window.socket.onmessage = function (evt: MessageEvent) {
            let j = JSON.stringify(evt.data);
            let inMsg: WsMessage = {} as WsMessage;
            console.log(`ws rcvd size: ${j.length} str: ${j}`);
            if (j.length > 3) {
              if (evt.data === "[object Blob]") {
                console.log(`ws rcvd evt.data ==="[object Blob]`);
              }
              try {
                inMsg = JSON.parse(evt.data) as WsMessage;
              } catch (error) {
                console.log(
                  `ws rcvd error parsing evt.data: ${evt.data} error: ${error}`
                );
                
              }
              
              console.log(`ws rcvd inMsg: ${JSON.stringify(inMsg)}`);
              // console.log(`ws rcvd inMsg.payload.state: ${inMsg.payload.state}`);
              if (inMsg.params) {
                if (inMsg.params[0]) {
                  let idx = inMsg.params[0].name;
                  console.log(
                    `ws rcvd inMsg.params[0].name: ${idx}`
                  );
                  let val = inMsg.params[0].value;
                  console.log(
                    `ws rcvd inMsg.params[0].value: ${val}`
                  );
                  setUniforms(
                    uniforms.map((uniform:Uniform) => {
                      if (uniform.id === idx) {
                        return {
                          ...uniform,
                          value: val
                        };
                      }
                      return uniform;
                    })
                  );
                }
              }
            }
            console.log(`ws rcvd ${evt.type} ${JSON.stringify(evt.data)}`);
          };
        } else {
          console.log(`ws try to reconnect`);
          //getPreferences();
          setWsReady(false);
          window.socket = new WebSocket(CONFIG.wssUrl);
        }
       
    }, 1000);
    return function cleanup() {
      clearTimeout(_timer);
    };
  });
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{name}</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <UniformList />
     
    </IonContent>
  </IonPage>
  );
};

export default Home;
