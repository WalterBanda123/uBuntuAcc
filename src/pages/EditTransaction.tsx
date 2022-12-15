import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonPage,
  IonBackButton,
} from "@ionic/react";
import { closeOutline, checkmark } from "ionicons/icons";
import { useContext, useRef } from "react";
import { useParams } from "react-router";
import SalesRecordContext from "../data/Sales-Context";

const EditTransaction: React.FC = () => {

  const saleTransCtx = useContext(SalesRecordContext);

  const selectedSaleRecordId = useParams<{ recordId: string }>().recordId;
  const selectedSaleRecord = saleTransCtx.salesRecords.find(
    (record) => record.id === selectedSaleRecordId
  );

  const selectedTransactionId = useParams<{ transId: string }>()
    .transId;
  const selectedTransaction = selectedSaleRecord?.transactions.find(
    (trans) => trans.id === selectedTransactionId
  );



  /*  const titleRef = useRef<HTMLIonInputElement>(null);
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
    }; */

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonButtons>
            <IonBackButton defaultHref="/sale-record/:recordId" />
          </IonButtons>
          <IonTitle>Edit Transaction</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab
          vertical="bottom"
          horizontal="end"
          slot="fixed"
          //onClick={saveTransactionHandler}
        >
          <IonFabButton>
            <IonIcon icon={checkmark}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Product Name</IonLabel>
                <IonInput type="text" value={selectedTransaction!.productTitle}/>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Product Price</IonLabel>
                <IonInput type={"number"} value={selectedTransaction?.productPrice}/>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Quantity Sold</IonLabel>
                <IonInput type={"number"} value={selectedTransaction?.quantitySold}/>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Amount Paid</IonLabel>
                <IonInput type={"number"} value={selectedTransaction?.amountPaid}/>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Change Left</IonLabel>
                <IonInput type={"number"} value={selectedTransaction?.changeLeft}/>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Customer Name</IonLabel>
                <IonInput type={"text"} value={selectedTransaction?.customerName}/>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Discount Allowed</IonLabel>
                <IonInput type={"number"} value={selectedTransaction?.discountAllowed}/>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default EditTransaction;
