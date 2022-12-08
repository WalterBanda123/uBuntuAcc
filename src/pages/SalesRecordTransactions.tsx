import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { time } from "console";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AddTransactionModal from "../components/AddTransactionModal";
import FabButton from "../components/FabButton";
import SaleTransComponent from "../components/SaleTransComponent";
import { SALE_DATA } from "../data/Sale";
import SalesRecordContext from "../data/Sales-Context";

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

  return (
    <React.Fragment>
      <AddTransactionModal
        onCancel={cancelAddingHandler}
        onSave={saveTransactionHandler}
        show={isAdding}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar mode="ios">
            <IonButtons color="dark">
              <IonBackButton
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
          {selectedSaleRecord?.transactions.reverse().map((trans) => (
            <SaleTransComponent
              key={trans.id}
              productTitle={trans.productTitle}
              productQuantity={trans.quantitySold}
              amountPaid={trans.amountPaid}
            />
          ))}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default SalesReocrdTransactions;
