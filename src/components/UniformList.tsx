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
    
  );
};

export default UniformList;
