import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Shaders.css';

interface ContainerProps {
  name: string;
}

const Shaders: React.FC<ContainerProps> = ({ name }) => {
  //const { name } = useParams<{ name: string; }>();
  return (
    // <div id="container">
    //   <strong>{name}</strong>
    //   <p>Shaders</p>
    // </div>
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
       <IonHeader collapse="condense">
         <IonToolbar>
           <IonTitle size="large">{name}</IonTitle>
         </IonToolbar>
       </IonHeader>
      
     </IonContent>
   </IonPage>
  );
};

export default Shaders;
