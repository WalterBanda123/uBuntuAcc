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
import React, { useState } from "react";
import EditPurchasesModal from "../components/EditPurchasesModal";
//import EditInventoryModal from "../components/EditPurchasesModal";
import FabButton from "../components/FabButton";
import InventoryComponent from "../components/PurchasesComponent";
import { INVENTORY } from "../data/Sale";

const Purchases: React.FC = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState<any>();
  const cancelEditHandler = () => {
    setIsEditing(false);
    setSelectedInventory(null);
  };
  const saveEditHandler = () => {};

  const startEditHandler = ()=>{
    setIsEditing(true);
    setSelectedInventory(null);
  }

  const EditInventoryHandler = (stockId: string) => {
    const stock = INVENTORY.find(
      (inv) => inv.id === stockId
    );

    if (!stock) {
      return;
    }
    setIsEditing(true);
    setSelectedInventory(stock);
  };

  return (
    <React.Fragment>
      <EditPurchasesModal
        onCancel={cancelEditHandler}
        onSaveInventory={saveEditHandler}
        EditedInventory={selectedInventory}
        show={isEditing}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar mode="ios">
            <IonButtons slot="start">
              <IonBackButton defaultHref="home" text="Purchases" color="dark" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <FabButton routerLink={undefined} onClickHandler={startEditHandler} />
          <IonGrid>
            {INVENTORY.reverse().map((stock) => (
              <IonRow key={stock.id}>
                <IonCol>
                  <InventoryComponent
                    id={stock.id}
                    name={stock.name}
                    price_per_item={stock.price_per_item}
                    quantity_in_stock={stock.quantity_in_stock}
                    date_bought={stock.date_bought} editInventory={EditInventoryHandler.bind(null, stock.id)}                  />
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Purchases;