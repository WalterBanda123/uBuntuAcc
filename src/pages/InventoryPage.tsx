import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import InventoryComponent from "../components/InventoryComponent";
import { INVENTORY } from "../data/Sale";

const Inventory: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" text="Inventory" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          {INVENTORY.reverse().map((stock) => (
            <IonRow key={stock.id}>
              <IonCol>
                <InventoryComponent
                  id={stock.id}
                  name={stock.name}
                  price_per_item={stock.price_per_item}
                  quantity_in_stock={stock.quantity_in_stock}
                  date_bought={stock.date_bought}
                />
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Inventory;
