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
import React from "react";
import { useParams } from "react-router-dom";
import FabButton from "../components/FabButton";
import SaleTransComponent from "../components/SaleTransComponent";
import { SALE_DATA } from "../data/Sale";

const SalesReocrdTransactions: React.FC = (props) => {
  const selectedSaleRecordId = useParams<{ recordId: string }>().recordId;
  const selectedSaleRecord = SALE_DATA.find(
    (salerecord) => salerecord.saleId === selectedSaleRecordId
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonButtons>
            <IonBackButton
              defaultHref="/sales-records"
              text="Sales Transactions"
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <FabButton routerLink={undefined} />
        {selectedSaleRecord?.salesTransactions.map((trans) => (
          <SaleTransComponent
            key={trans.transId}
            productTitle={trans.productSold}
            productQuantity={trans.productQuantity}
            amountPaid={trans.amountPaid}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default SalesReocrdTransactions;
