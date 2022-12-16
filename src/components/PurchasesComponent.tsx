import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React from "react";

interface purchases {
  id: string;
  name: string;
  price_per_item: any;
  quantity_in_stock: any;
  date_bought: Date;
  editInventory:any
}

const PurchasesComponent: React.FC<purchases> = (props) => {
  return (
    <IonItem button onClick={props.editInventory}>
      <IonLabel>
        <h1>{props.name}</h1>
        <h2>${props.price_per_item} each</h2>
        <h3>{props.quantity_in_stock}</h3>
        <small>{props.date_bought.toLocaleDateString()}</small>
      </IonLabel>
    </IonItem>
  );
};

export default PurchasesComponent;
