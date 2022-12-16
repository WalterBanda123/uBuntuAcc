import { IonItem, IonLabel } from "@ionic/react";
import React from "react";

interface purchases {
  id: string;
  itemTitle: string;
  itemQuantity: any;
  pricePerItem: any;
  editInventory: any;
}

const PurchasesComponent: React.FC<purchases> = (props) => {
  return (
    <IonItem button onClick={props.editInventory}>
      <IonLabel>
        <i>
          <h2>
            Item Name: <strong>{props.itemTitle}</strong>
          </h2>
          <h2>
            Price for each item: $ <strong>{props.pricePerItem}</strong>
          </h2>
          <h2>
            item Quantity: <strong>{props.itemQuantity}</strong>
          </h2>
        </i>
      </IonLabel>
    </IonItem>
  );
};

export default PurchasesComponent;
