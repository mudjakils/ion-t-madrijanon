import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cafeOutline, calculatorOutline, ellipse, home, informationCircle, personOutline, speedometerOutline, square, triangle } from 'ionicons/icons';

// Home resources
import Home from './pages/home';

import Profile from './pages/Profile/profile';
import ClickCounter from './pages/Clickcounter/click-counter';
import Calculator from './pages/calculator';
import TodoList from './pages/Todolist/TodoList';
import Quotegenerator from './pages/quotegenerator';
import Notes from './pages/notes/notes';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          
          {/* Application default route */}
          <Route exact path="/ion-t-madrijanon/">
            <Redirect to="/ion-t-madrijanon/home" />
          </Route>

          {/* Home Router */}
          <Route exact path="/ion-t-madrijanon/home">
            <Home />
          </Route>

          <Route exact path="/ion-t-madrijanon/profile">
            <Profile />
          </Route>
          <Route exact path="/ion-t-madrijanon/click-counter">
            <ClickCounter />
          </Route>
          <Route path="/ion-t-madrijanon/calculator">
            <Calculator />
          </Route>
          <Route exact path="/ion-t-madrijanon/TodoList">
            <TodoList />
          </Route>
          <Route exact path="/ion-t-madrijanon/quotegenerator">
            <Quotegenerator />
          </Route>
          <Route exact path="/ion-t-madrijanon/Notes">
            <Notes />
          </Route>

        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {/* Home Tab Button */}
          <IonTabButton tab="home" href="/ion-t-madrijanon/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="#">
            <IonIcon aria-hidden="true" icon={cafeOutline} />
            <IonLabel>Blank</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Click-Counter" href="/ion-t-madrijanon/profile">
            <IonIcon aria-hidden="true" icon={informationCircle} />
            <IonLabel>Info</IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="calculator" href="/calculator">
            <IonIcon aria-hidden="true" icon={calculatorOutline} />
            <IonLabel>Calculator</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
        <IonTabButton tab="todo-list" href="/ion-t-madrijanon/TodoList">
          <IonIcon aria-hidden="true" icon={ellipse} />
         <IonLabel>To-Do List</IonLabel>
       </IonTabButton>
       <IonTabButton tab="notes" href="/ion-t-madrijanon/notes">
          <IonIcon aria-hidden="true" icon={ellipse} />
         <IonLabel>notes</IonLabel>
       </IonTabButton>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
