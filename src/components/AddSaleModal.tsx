import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonModal,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { checkmark, closeOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";

const AddSaleModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (title: string, date: Date) => void;
}> = (props) => {
  const saleTitleRef = useRef<HTMLIonInputElement>(null);
  const saleDateRef = useRef<HTMLIonDatetimeElement>(null);

  const onSaveHandler = () => {
    const enteredTitle = saleTitleRef.current!.value;
    const selectedDate = saleDateRef.current!.value;

    if (
      !enteredTitle ||
      !selectedDate ||
      enteredTitle.toString().trim().length === 0
    ) {
      setError("Please enter a valid title and select a date");
      return;
    }
    setError("");
    props.onSave(enteredTitle.toString(), new Date(selectedDate.toString()));
  };

  const [error, setError] = useState("");

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle>Add Sale Record</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab
          vertical="bottom"
          horizontal="end"
          slot="fixed"
          onClick={onSaveHandler}
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
              <IonItem lines="inset">
                <IonLabel position="floating">Enter Sale Name</IonLabel>
                <IonInput type="text" required mode="ios" ref={saleTitleRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonLabel position="floating">Select Date</IonLabel>
                <IonDatetime locale="en-GB" mode="ios" ref={saleDateRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          {error && (
            <IonRow className="ion-text-center">
              <IonCol>
                <IonText color={"danger"}>{error}</IonText>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default AddSaleModal;
