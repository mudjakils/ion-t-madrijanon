import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton, IonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './profile.css';

const profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        
    <IonCard>
      <img alt="Silhouette of mountains" src="../src/img/reggie.png" />
        <IonCardHeader>
          <IonCardTitle>Madrijanon, Reggie</IonCardTitle>
           <IonCardSubtitle>Student</IonCardSubtitle>
            </IonCardHeader>

      <IonCardContent>Nothing more, nothing less.</IonCardContent>

      <IonButton id="present-alert" expand="full" color="success">Quick Facts</IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>

<IonButton id="open-action-sheet" expand="block" color="medium">Open Action Sheet</IonButton>
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
      ></IonActionSheet>
    </IonCard>
        </IonContent>
      </IonPage>
  );
};

export default profile;