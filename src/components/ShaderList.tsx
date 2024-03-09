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
    <IonPage id="uniform-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Uniforms</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Uniforms</IonTitle>
          </IonToolbar>
        </IonHeader>

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
      </IonContent>
    </IonPage>
  );
};

export default ShaderList;
