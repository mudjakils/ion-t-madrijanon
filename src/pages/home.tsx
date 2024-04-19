import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  const handleCardClick = (route: string) => {
    // Navigate to the desired route when the card is clicked
    history.push(route);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="home-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* First Card */}
        <IonButton onClick={() => handleCardClick('/calculator')} fill="clear">
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle className="bold-text"></IonCardSubtitle>
              <IonCardTitle>Calculator</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {/* No content here */}
            </IonCardContent>
          </IonCard>
        </IonButton>

        {/* Second Card */}
        <IonButton onClick={() => handleCardClick('/click-counter')} fill="clear">
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle className="bold-text"></IonCardSubtitle>
              <IonCardTitle>Click Counter</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {/* No content here */}
            </IonCardContent>
          </IonCard>
        </IonButton>

        {/* Third Card */}
        <IonButton onClick={() => handleCardClick('/todo-list')} fill="clear">
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle className="bold-text"></IonCardSubtitle>
              <IonCardTitle>To-Do List</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {/* No content here */}
            </IonCardContent>
          </IonCard>
        </IonButton>

        {/* Fourth Card */}
        <IonButton onClick={() => handleCardClick('#')} fill="clear">
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle className="bold-text"></IonCardSubtitle>
              <IonCardTitle>Blank</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {/* No content here */}
            </IonCardContent>
          </IonCard>
        </IonButton>
        

      </IonContent>
    </IonPage>
  );
};

export default Home;
