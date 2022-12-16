import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { checkmark, closeOutline } from "ionicons/icons";
import React, { useState } from "react";

const EditPurchasesModal: React.FC<{
  onCancel: () => void;
  onSaveInventory: () => void;
  EditedInventory: {
   
    id: string;
    itemTitle: string;
    itemQuantity: any;
    pricePerItem: any;
  };
  show: boolean;
}> = (props) => {
  return (
    <IonModal
      isOpen={props.show}
      //initialBreakpoint={0.9}
     // breakpoints={[0, 0.9, 1]}
     // backdropBreakpoint={0.4}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {props.EditedInventory ? "Edit" : "Add"} Purchases
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab
          vertical="bottom"
          horizontal="end"
          slot="fixed"
          onClick={props.onSaveInventory}
        >
          <IonFabButton color="success">
            <IonIcon icon={checkmark}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonFab
          vertical="bottom"
          horizontal="start"
          slot="fixed"
          onClick={props.onCancel}
        >
          <IonFabButton color="danger">
            <IonIcon icon={closeOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem >
                <IonLabel position="stacked">Inventory Name</IonLabel>
                <IonInput type="text" value={props.EditedInventory?.itemTitle} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Price per item</IonLabel>
                <IonInput
                  type="number"
                  value={props.EditedInventory?.pricePerItem}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem >
                <IonLabel position="stacked">Quantity in stock</IonLabel>
                <IonInput
                  type="text"
                  value={props.EditedInventory?.itemQuantity}
                />
              </IonItem>
            </IonCol>
          </IonRow>
         {/*  <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Date of Purchase</IonLabel>.
                <IonInput
                  type="date"
                  value={props.EditedInventory?.date_bought.toLocaleDateString()}
                />
              </IonItem>
            </IonCol>
          </IonRow>*/}
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default EditPurchasesModal;
