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
import SaleRecordComponent from "../components/SaleRecordComponent";
import { SALE_DATA } from "../data/Sale";

const SalesRecords: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              defaultHref="/home"
              mode="ios"
              text="Sales Records"
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <FabButton routerLink={undefined} />
        {SALE_DATA.map((saleRecord) => (
          <SaleRecordComponent
            key={saleRecord.saleId}
            saleTitle={saleRecord.saleTitle}
            routerLink={`/sales-records/${saleRecord.saleId}`}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default SalesRecords;
