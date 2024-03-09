import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import ShaderItem from './ShaderItem';
import { Shader } from '../models/Shader';
import useStore from "../data/store";
import { CONFIG } from "../config";
import './ShaderList.css';

const ShaderList: React.FC = () => {
  const {
    shaders,
  } = useStore();
  return (
    

          <IonGrid fixed>
            <IonRow>
              {shaders.map(shader => (
                <IonCol size="4"  key={shader.id}>
                  <ShaderItem
                    key={shader.id}
                    shader={shader}
                    
                  />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
     
  );
};

export default ShaderList;
