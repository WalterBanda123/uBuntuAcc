import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonDatetimeButton,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";
import React from "react";

interface saleRecord {
  saleTitle: String;
  routerLink:any
}

const SaleRecordComponent: React.FC<saleRecord> = (props) => {
  return (
    <IonCard button routerLink={props.routerLink} >
      <IonCardContent>
        <IonCardHeader>
          <IonGrid>
            <IonRow>
              <IonCol size="9">
                <IonCardSubtitle>{props.saleTitle}</IonCardSubtitle>
              </IonCol>
              
            </IonRow>
          </IonGrid>
        </IonCardHeader>
      </IonCardContent>
    </IonCard>
  );
};

export default SaleRecordComponent;
