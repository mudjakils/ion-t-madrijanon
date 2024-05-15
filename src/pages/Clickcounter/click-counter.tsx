import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons } from '@ionic/react';
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
        <IonButtons slot='start'>
              <IonBackButton defaultHref='/ion-t-madrijanon/home'/>
           </IonButtons>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
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
