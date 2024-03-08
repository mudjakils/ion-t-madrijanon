import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonCard>
      <img alt="Silhouette of mountains" src="src/img/reggie.png" />
      <IonCardHeader>
        <IonCardTitle>Reggie</IonCardTitle>
        <IonCardSubtitle>wala gwapo lang</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Minsan may ni like akong status nang babae kase natawa ako.
After 10 seconds nagpadala sya nang Relationship Request.
Hay Buhay.</IonCardContent>
    </IonCard>
  );
};

export default Tab1;
