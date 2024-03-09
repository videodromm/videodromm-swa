import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import UniformItem from './UniformItem';
import { Uniform } from '../models/Uniform';
import useStore from "../data/store";
import { CONFIG } from "../config";
import './UniformList.css';

const UniformList: React.FC = () => {
  const {
    uniforms,
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
              {uniforms.map(uniform => (
                <IonCol size="4"  key={uniform.id}>
                  <UniformItem
                    key={uniform.id}
                    uniform={uniform}
                    
                  />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default UniformList;
