import {
  IonButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useRef } from "react";

const AddPurchasesRecModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (title: string, storeName: string, date: Date) => void;
}> = (props) => {
  const purchaseTitleRef = useRef<HTMLIonInputElement>(null);
  const storeNameRef = useRef<HTMLIonInputElement>(null);
  const selectedDateRef = useRef<HTMLIonInputElement>(null);

  const onSaveHandler = () => {
    const enteredTitle = purchaseTitleRef.current?.value;
    const enteredStoreName = storeNameRef.current?.value;
    const entereDate = selectedDateRef.current?.value;

    if (
      !enteredTitle ||
      !enteredStoreName ||
      !entereDate ||
      enteredTitle.toString().trim().length === 0 ||
      enteredStoreName.toString().trim().length === 0 ||
      entereDate.toString().trim().length === 0
    ) {
      console.log("enter valid date, title and name of supplier!");
      return;
    }

    props.onSave(
      enteredTitle.toString(),
      enteredStoreName.toString(),
      new Date(entereDate.toString())
    );
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonButtons slot="end">
            <IonButton fill="clear" onClick={props.onCancel}>
              <IonChip color="danger">Cancel</IonChip>
            </IonButton>
          </IonButtons>
          <IonButtons slot="start">
            <IonButton fill="clear" onClick={onSaveHandler} size="large">
              <IonChip color="success">Save</IonChip>
            </IonButton>
          </IonButtons>
          <IonTitle>Add Purchases Record</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Purchase Description</IonLabel>
                <IonInput type="text" ref={purchaseTitleRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Supplier Name</IonLabel>
                <IonInput type="text" ref={storeNameRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Date of Purchase</IonLabel>
                <IonInput type="date" ref={selectedDateRef} />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default AddPurchasesRecModal;
