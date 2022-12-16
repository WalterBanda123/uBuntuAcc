import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import EditPurchasesModal from "../components/EditPurchasesModal";
//import EditInventoryModal from "../components/EditPurchasesModal";
import FabButton from "../components/FabButton";
import PurchasesComponent from "../components/PurchasesComponent";
import InventoryComponent from "../components/PurchasesComponent";
import { INVENTORY } from "../data/Sale";
import SalesRecordContext, { PurchasedItem } from "../data/Sales-Context";

const Purchases: React.FC = () => {
  const purchasesCtx = useContext(SalesRecordContext);

  const selectedPurchasesRecordId = useParams<{ purchaseId: string }>()
    .purchaseId;
  const selectedPurchaseRecord = purchasesCtx.purchasesRecords.find(
    (record) => record.purchaseId === selectedPurchasesRecordId
  );

  const [isEditing, setIsEditing] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState<any>();

  const cancelEditHandler = () => {
    setIsEditing(false);
    setSelectedInventory(undefined);
  };
  const saveEditHandler = () => {};

  const startEditHandler = () => {
    setIsEditing(true);
    setSelectedInventory(undefined);
  };

  const EditInventoryHandler = (stockId: string) => {
    const stock = selectedPurchaseRecord?.purchasedItems.find(
      (inv) => inv.id === stockId
    );

    if (!stock) {
      console.log(stock);
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
              <IonBackButton
                defaultHref="/purchases"
                text={`List of purchases made form ${selectedPurchaseRecord?.storeName}`}
                color="dark"
              />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <FabButton routerLink={undefined} onClickHandler={startEditHandler} />
          <IonGrid>
            {selectedPurchaseRecord?.purchasedItems.length === 0 ? (
              <IonRow className="ion-text-center">
                <IonCol>
                  <IonLabel>
                    <h2>
                      <strong>
                        No purchases recorded! Start adding the items you have
                        bought for resell
                      </strong>
                    </h2>
                  </IonLabel>
                </IonCol>
              </IonRow>
            ) : (
              selectedPurchaseRecord?.purchasedItems.reverse().map((stock) => (
                <IonRow key={stock.id}>
                  <IonCol>
                    <PurchasesComponent
                      id={stock.id}
                      itemTitle={stock.itemTitle}
                      itemQuantity={stock.itemQuantity}
                      pricePerItem={stock.pricePerItem}
                      editInventory={EditInventoryHandler.bind(null, stock.id)}
                    />
                  </IonCol>
                </IonRow>
              ))
            )}
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Purchases;
