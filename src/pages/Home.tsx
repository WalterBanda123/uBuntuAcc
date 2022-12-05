import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import DashboardCardComponent from "../components/DashboardCardComponent";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle>Welcom to uBuntuAcc</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <DashboardCardComponent title="Sales" routerLink="/sales-records" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <DashboardCardComponent title="Purchases" routerLink={undefined} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <DashboardCardComponent title="Inventory" routerLink={undefined} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <DashboardCardComponent title="Reports" routerLink={undefined} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
