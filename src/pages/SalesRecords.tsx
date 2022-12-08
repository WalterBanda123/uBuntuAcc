import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext, useState } from "react";
import AddSaleModal from "../components/AddSaleModal";
import FabButton from "../components/FabButton";
import SaleRecordComponent from "../components/SaleRecordComponent";
import { SALE_DATA } from "../data/Sale";
import SalesRecordContext from "../data/Sales-Context";

const SalesRecords: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);

  const startAddSaleRecordHandler = () => {
    setIsAdding(true);
  };

  const onCancelHandler = () => {
    setIsAdding(false);
  };

  const salesReocrdsCtx = useContext(SalesRecordContext);

  const addSaleHandler = (title: string, date: Date) => {
    salesReocrdsCtx.addSaleRecord(title, date);
    setIsAdding(false);
  };

  return (
    <React.Fragment>
      <AddSaleModal
        show={isAdding}
        onCancel={onCancelHandler}
        onSave={addSaleHandler}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton
                defaultHref="/home"
                mode="ios"
                text="Sales Records"
              />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <FabButton
            routerLink={undefined}
            onClickHandler={startAddSaleRecordHandler}
          />
          {salesReocrdsCtx.salesRecords.reverse().map((saleRecord) => (
            <SaleRecordComponent
              key={saleRecord.id}
              saleTitle={saleRecord.title}
              routerLink={`/sales-records/${saleRecord.id}`}
              saleDate={saleRecord.date}
            />
          ))}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default SalesRecords;
