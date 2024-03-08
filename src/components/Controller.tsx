import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {
  Dial,
  RadioButton
} from 'react-nexusui';
import UniformList from "./UniformList";
import './Controller.css';

interface ContainerProps {
  name: string;
}

const Controller: React.FC<ContainerProps> = ({ name }) => {
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

export default Controller;
