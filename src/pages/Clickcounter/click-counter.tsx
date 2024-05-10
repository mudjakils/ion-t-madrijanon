import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/react';
import './click-counter.css';

const clickcounter: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <IonPage>
      <IonHeader>
        
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>

      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          {/* <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar> */}
        </IonHeader>
        <div className="container">
          <p>Number of clicks: {clickCount}</p>
          <IonButton onClick={handleButtonClick}>Click me!</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default clickcounter;
