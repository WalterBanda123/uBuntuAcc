import {
  IonAlert,
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonRow,
  IonSearchbar,
  IonToolbar,
} from "@ionic/react";
import { happyOutline } from "ionicons/icons";
import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AddTransactionModal from "../components/AddTransactionModal";
import FabButton from "../components/FabButton";
import SaleTransComponent from "../components/SaleTransComponent";
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
    setSelectedTrans(null);
  };
  const startAddingTransHandler = () => {
    setIsAdding(true);
    setSelectedTrans(null);
  };

  const [selectedTrans, setSelectedTrans] = useState<any>();

  const EditTransHandler = (transId: string) => {
    const transaction = selectedSaleRecord?.transactions.find(
      (trans) => trans.id === transId
    );

    if (!transaction) {
      return;
    }
    setIsAdding(true);
    setSelectedTrans(transaction);
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

  const startDeletingTransHandler = () => {
    setShowAlert(true);
  };

  const [readTransInfor, setReadTransInfor] = useState(false);

  const readTransInforHandler = (transId: string) => {
    console.log("Modal opened");
    setReadTransInfor(true);
  };

  return (
    <React.Fragment>
      <IonModal
        isOpen={readTransInfor}
        onDidDismiss={() => setReadTransInfor(false)}
        initialBreakpoint={0.2}
        backdropBreakpoint={0.4}
        breakpoints={[0, 0.2, 1]}
      >
        <IonContent>
          <IonGrid>
            {selectedSaleRecord?.transactions.map((transaction) => (
              <IonRow key={transaction.id}>
                <IonCol>
                  <IonLabel>
                    <h3>
                      <strong>Product Id:</strong>
                      <i>{transaction.id.toString()}</i>
                    </h3>
                    <h3>
                      <strong>Product Name:</strong>
                      <i>{transaction.productTitle}</i>
                    </h3>
                    <h3>
                      <strong>Cost per Item:</strong>
                      <i>${transaction.productPrice.toFixed(3)}</i>
                    </h3>
                    <h3>
                      <strong>Quantity Sold:</strong>
                      <i>{transaction.quantitySold}</i>
                    </h3>
                    <h3>
                      <strong>Total Amount Paid:</strong>
                      <i>${transaction.amountPaid.toFixed(3)}</i>
                    </h3>
                    <h3>
                      <strong>Change Left:</strong>
                      <i>${transaction.changeLeft.toFixed(3)}</i>
                    </h3>
                    <h3>
                      <strong>Customer Name:</strong>
                      <i>{transaction.customerName}</i>
                    </h3>
                  </IonLabel>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </IonContent>
      </IonModal>

      <IonAlert
        mode="ios"
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Delete Transaction"
        subHeader="Are you sure?"
        message="Deleted transation is lost forever."
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
        EditedTransaction={selectedTrans}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar mode="ios">
            <IonButtons>
              <IonBackButton
                color="dark"
                defaultHref="/sales-records"
                text={selectedSaleRecord?.title.concat(
                  "," + selectedSaleRecord.date.toDateString()
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
                {selectedSaleRecord?.transactions.length === 0 ? (
                  <IonRow className="ion-text-center">
                    <IonCol>
                      <IonLabel>
                        <h2>
                          <strong>
                            No transactions recorded.<br></br> Start adding your
                            transactions!
                          </strong>
                          <IonIcon icon={happyOutline} size="large" />
                        </h2>
                      </IonLabel>
                    </IonCol>
                  </IonRow>
                ) : (
                  selectedSaleRecord?.transactions.reverse().map((trans) => (
                    <SaleTransComponent
                      key={trans.id}
                      productTitle={trans.productTitle}
                      productQuantity={trans.quantitySold}
                      amountPaid={trans.amountPaid.toFixed(3)}
                      id={trans.id} // routerLink={`/sale-trans/:recordId/${trans.id}`}
                      deleteTransItem={startDeletingTransHandler}
                      editTransItem={EditTransHandler.bind(null, trans.id)}
                      readTransInfro={readTransInforHandler.bind(
                        null,
                        trans.id
                      )}
                    />
                  ))
                )}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default SalesReocrdTransactions;
