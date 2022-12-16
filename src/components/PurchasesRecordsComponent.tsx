import { IonItem, IonLabel } from "@ionic/react";
import React from "react";

interface purchase_record {
  purchaseId: string;
  purchasesTitle: string;
  storeName: string;
  dateBought: Date;
  routerLink:any
}

const PurchasesRecordsComponent: React.FC<purchase_record> = (props) => {
  return (
    <IonItem id={props.purchaseId} button routerLink={props.routerLink}>
      <IonLabel>
        <i>
          <strong><h3>{props.purchasesTitle}</h3></strong>
          <h4>{props.storeName}</h4>
          <h5>{props.dateBought.toLocaleDateString()}</h5>
        </i>
      </IonLabel>
    </IonItem>
  );
};

export default PurchasesRecordsComponent;
