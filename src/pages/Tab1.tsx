import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton, IonActionSheet } from '@ionic/react';

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

<IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>

<IonButton id="open-action-sheet">Open</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>f


    </IonCard>
  );
};

export default Tab1;
