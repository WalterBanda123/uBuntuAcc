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
import salesImage from "../assets/sales1.jpg";
import purchasesImage from "../assets/purchases1.png";
import inventoryImage from "../assets/inventory1.png";
import reportsImage from "../assets/reports2.jpg";
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle>
            <IonLabel>
              <h1>uBuntuAcc</h1>
            </IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <DashboardCardComponent
                title="Sales"
                routerLink="/sales-records"
                imageSource={salesImage}
                description="Record your daily sales as well as transactions."
                imageAlt="Sales Image"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <DashboardCardComponent
                title="Purchases"
                routerLink="/purchases"
                imageSource={purchasesImage}
                description="Record your purchases"
                imageAlt="Purchases Image"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <DashboardCardComponent
                title="Inventory"
                routerLink={undefined}
                imageSource={inventoryImage}
                description="Information on stocks available for sale."
                imageAlt="Inventory Image"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <DashboardCardComponent
                title="Reports"
                routerLink={undefined}
                imageSource={reportsImage}
                description="Reports on business operations, sales & purchases. "
                imageAlt="Reports image"
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
