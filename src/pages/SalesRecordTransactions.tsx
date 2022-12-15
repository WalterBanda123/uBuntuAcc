import {
  IonAlert,
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonSearchbar,
  IonToolbar,
} from "@ionic/react";
import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AddTransactionModal from "../components/AddTransactionModal";
import FabButton from "../components/FabButton";
import SaleTransComponent from "../components/SaleTransComponent";
import TransPopover from "../components/TransPopover";
import SalesRecordContext from "../data/Sales-Context";
import "../theme/recordTransactions.css";

const SalesReocrdTransactions: React.FC = (props) => {
  const salesRecordsCtx = useContext(SalesRecordContext);

  const selectedSaleRecordId = useParams<{ recordId: string }>().recordId;
  const selectedSaleRecord = salesRecordsCtx.salesRecords.find(
    (salerecord) => salerecord.id === selectedSaleRecordId
  );

  const [isAdding, setIsAdding] = useState(false);

  const cancelAddingHandler = () => {
    setIsAdding(false);
  };
  const startAddingTransHandler = () => {
    setIsAdding(true);
  };

  const saveTransactionHandler = (
    productTitle: any,
    price: any,
    quantity: any,
    amountPaid: any,
    changeLeft: any,
    customerName: any,
    discountAllowed: any
  ) => {
    salesRecordsCtx.addSaleTransaction(
      selectedSaleRecord!.id,
      productTitle,
      price,
      quantity,
      amountPaid,
      changeLeft,
      customerName,
      discountAllowed
    );
    setIsAdding(false);
  };

  const [showAlert, setShowAlert] = useState(false);
  const deleteTransactionHandler = () => {
    console.log("Transaction was successfully deleted");
  };

  const startDeletingTransHandler = ()=>{
    setShowAlert(true);
  };

  return (
    <React.Fragment>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Delete Transaction"
        message="Are you sure? Deleted transation is lost forever."
        buttons={[
          {
            text: "Yes",
            handler: deleteTransactionHandler,
          },
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              setShowAlert(false);
            },
          },
        ]}
      />
      <AddTransactionModal
        onCancel={cancelAddingHandler}
        onSave={saveTransactionHandler}
        show={isAdding}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar mode="ios">
            <IonButtons>
              <IonBackButton
                color="dark"
                defaultHref="/sales-records"
                text={selectedSaleRecord?.title.concat(
                  selectedSaleRecord.date.toDateString()
                )}
              />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <FabButton
            routerLink={undefined}
            onClickHandler={startAddingTransHandler}
          />

          <div className="searchbar-container">
            <IonItem>
              <IonSearchbar mode="ios" />
            </IonItem>
          </div>
          <IonGrid>
            <IonRow>
              <IonCol>
                {selectedSaleRecord?.transactions.reverse().map((trans) => (
                  <SaleTransComponent
                    key={trans.id}
                    productTitle={trans.productTitle}
                    productQuantity={trans.quantitySold}
                    amountPaid={trans.amountPaid}
                    id={trans.id} // routerLink={`/sale-trans/:recordId/${trans.id}`}
                    deleteTransItem={startDeletingTransHandler}
                    editTransItem={undefined}
                    readTransInfro={undefined}
                  />
                ))}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default SalesReocrdTransactions;
