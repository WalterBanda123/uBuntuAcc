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
  IonItem,
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
    <IonItem button routerLink={props.routerLink}>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonLabel>
              <h1>
                <strong>
                  <i>{props.saleTitle.toLocaleUpperCase()}</i>
                </strong>
              </h1>
              <h3>
                <i>{props.totalTransactions} Transactions Recorded</i>
              </h3>
              <small color="black">
                <b>
                  <i>{props.saleDate.toDateString()}</i>
                </b>
              </small>
            </IonLabel>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
};

export default SaleRecordComponent;
