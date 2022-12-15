import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonLabel } from "@ionic/react";
import React from "react";

 interface inventory{
        id:string;
        name:string;
        price_per_item:any;
        quantity_in_stock:any;
        date_bought:Date
    }

const InventoryComponent: React.FC<inventory> = (props) => {

   
  return (
    <IonCard>
      <IonCardContent>
        <IonLabel>
          <h1>{props.name}</h1> 
          <h2>${props.price_per_item} each</h2>
          <h3>{props.quantity_in_stock}</h3>
          <small>{props.date_bought.toLocaleDateString()}</small> 
        </IonLabel>
        
      </IonCardContent>
    </IonCard>
  );
};

export default InventoryComponent;
