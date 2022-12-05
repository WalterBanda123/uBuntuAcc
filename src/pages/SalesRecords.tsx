import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import FabButton from "../components/FabButton";

const SalesRecords: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" mode="ios" />
          </IonButtons>
          <IonTitle>Sales records</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       <FabButton routerLink={undefined}/>
        <IonRow>
          <IonCol>
            <IonLabel>
              <h2>Wait for the sales records for each month and year</h2>
            </IonLabel>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default SalesRecords;
