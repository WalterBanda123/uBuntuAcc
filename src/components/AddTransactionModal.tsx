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
import React, { useRef } from "react";


const AddTransactionModal: React.FC<{
  onCancel: () => void;
  onSave: (
    productTitle: any,
    price: any,
    quantity: any,
    amountPaid: any,
    changeLeft: any,
    customerName: any,
    discountAllowed: any
  ) => void;
  show: boolean;
}> = (props) => {
  const titleRef = useRef<HTMLIonInputElement>(null);
  const priceRef = useRef<HTMLIonInputElement>(null);
  const quantityRef = useRef<HTMLIonInputElement>(null);
  const amountPaidRef = useRef<HTMLIonInputElement>(null);
  const changeLeftRef = useRef<HTMLIonInputElement>(null);
  const customerNameRef = useRef<HTMLIonInputElement>(null);
  const discountAllowedRef = useRef<HTMLIonInputElement>(null);

  const saveTransactionHandler = () => {
    const enteredTitle = titleRef.current?.value;
    const enteredPrice = priceRef.current?.value;
    const enteredQuantity = quantityRef.current?.value;
    const enteredAmount = +enteredPrice! * +enteredQuantity!;
    const enteredChange = changeLeftRef.current?.value;
    const enteredCustomer = customerNameRef.current?.value;
    const enteredDiscount = discountAllowedRef.current?.value;

    if (!enteredTitle || !enteredPrice || !enteredAmount || !enteredQuantity) {
      console.log("enter the title,price,change,and customer name");
      return;
    }

    props.onSave(
      enteredTitle.toString(),
      enteredPrice,
      enteredQuantity,
      enteredAmount,
      enteredChange,
      enteredCustomer?.toString(),
      enteredDiscount
    );

    console.log("transaction saved");
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonButtons>
            <IonButton onClick={props.onCancel} slot="start">
              <IonIcon slot="icon-only" icon={closeOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Add Transaction</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab
          vertical="bottom"
          horizontal="end"
          slot="fixed"
          onClick={saveTransactionHandler}
        >
          <IonFabButton>
            <IonIcon icon={checkmark}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Product Name</IonLabel>
                <IonInput type="text" ref={titleRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Product Price</IonLabel>
                <IonInput type={"number"} ref={priceRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Quantity Sold</IonLabel>
                <IonInput type={"number"} ref={quantityRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Amount Paid</IonLabel>
                <IonInput type={"number"} ref={amountPaidRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Change Left</IonLabel>
                <IonInput type={"number"} ref={changeLeftRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Customer Name</IonLabel>
                <IonInput type={"text"} ref={customerNameRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Discount Allowed</IonLabel>
                <IonInput type={"number"} ref={discountAllowedRef} />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default AddTransactionModal;
