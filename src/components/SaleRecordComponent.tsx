import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonDatetimeButton,
  IonGrid,
  IonIcon,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";
import React from "react";

interface saleRecord {
  saleTitle: string;
  totalTransactions: any;
  saleDate: Date;
  routerLink: any;
}

const SaleRecordComponent: React.FC<saleRecord> = (props) => {
  return (
    <IonCard button routerLink={props.routerLink}>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel>
                <h1>
                  <strong> {props.saleTitle.toLocaleUpperCase()}</strong>
                </h1>
                <h3>{props.totalTransactions} Transactions Recorded</h3>
                <small color="black">
                  <b>
                    <i>{props.saleDate.toDateString()}</i>
                  </b>
                </small>
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default SaleRecordComponent;
