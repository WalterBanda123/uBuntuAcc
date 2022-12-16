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
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { checkmark, closeOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import { INVENTORY } from "../data/Sale";

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
  EditedTransaction: {
    id: string;
    productTitle: string;
    productPrice: number;
    quantitySold: number;
    amountPaid: number;
    changeLeft: number;
    customerName: string;
    discountAllowed: number;
  };
}> = (props) => {
  const titleRef = useRef<HTMLIonInputElement>(null);
  const priceRef = useRef<HTMLIonInputElement>(null);
  const quantityRef = useRef<HTMLIonInputElement>(null);
  const amountPaidRef = useRef<HTMLIonInputElement>(null);
  const changeLeftRef = useRef<HTMLIonInputElement>(null);
  const customerNameRef = useRef<HTMLIonInputElement>(null);
  const discountAllowedRef = useRef<HTMLIonInputElement>(null);

  const saveTransactionHandler = () => {
    //const enteredTitle = titleRef.current?.value;
    const enteredPrice = priceRef.current?.value;
    const enteredQuantity = quantityRef.current?.value;
    const enteredAmount = +enteredPrice! * +enteredQuantity!;
    const enteredChange = changeLeftRef.current?.value;
    const enteredCustomer = customerNameRef.current?.value;
    const enteredDiscount = discountAllowedRef.current?.value;

    if (!chosenProduct || !enteredPrice || !enteredAmount || !enteredQuantity) {
      console.log("enter the title,price,change,and customer name");
      return;
    }

    props.onSave(
      chosenProduct,
      enteredPrice,
      enteredQuantity,
      enteredAmount,
      enteredChange,
      enteredCustomer?.toString(),
      enteredDiscount
    );

    console.log("transaction saved");
  };

  //const inventory_Item = INVENTORY.filter(inv_item => inv_item.name != null);
  const [chosenProduct, setChosenProduct] = useState<any | string>(
    props.EditedTransaction?.productTitle
  );

  const selectedProductHandler = (event: CustomEvent) => {
    const selectedName = event.detail.value;
    setChosenProduct(selectedName);
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle>
            {props.EditedTransaction ? "Edit" : "Add"} Transaction
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab
          vertical="bottom"
          horizontal="end"
          slot="fixed"
          onClick={saveTransactionHandler}
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
              <IonItem>
                <IonLabel position="stacked">Product Name</IonLabel>
                <IonSelect
                  mode="ios"
                  onIonChange={selectedProductHandler}
                  value={chosenProduct}
                >
                  {INVENTORY.map((inv) => (
                    <IonSelectOption
                      //key={inv.id}
                      key={inv.id}
                      value={
                        // ? props.EditedTransaction.productTitle
                        inv?.name
                      }
                    >
                      {inv.name}
                    </IonSelectOption>
                  ))}
                </IonSelect>
                {/*  
                <IonInput type="text" ref={titleRef} />*/}
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Product Price</IonLabel>
                <IonInput
                  type={"number"}
                  ref={priceRef}
                  value={props.EditedTransaction?.productPrice.toFixed(3)}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Quantity Sold</IonLabel>
                <IonInput
                  type={"number"}
                  ref={quantityRef}
                  value={props.EditedTransaction?.quantitySold}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Amount Paid</IonLabel>
                <IonInput
                  type={"number"}
                  ref={amountPaidRef}
                  value={props.EditedTransaction?.amountPaid.toFixed(3)}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Change Left</IonLabel>
                <IonInput
                  type={"number"}
                  ref={changeLeftRef}
                  value={props.EditedTransaction?.changeLeft.toFixed(3)}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Customer Name</IonLabel>
                <IonInput
                  type={"text"}
                  ref={customerNameRef}
                  value={props.EditedTransaction?.customerName}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Discount Allowed</IonLabel>
                <IonInput
                  type={"number"}
                  ref={discountAllowedRef}
                  value={props.EditedTransaction?.discountAllowed.toFixed(3)}
                />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default AddTransactionModal;
