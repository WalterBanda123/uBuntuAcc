import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext, useState } from "react";
import AddPurchasesRecModal from "../components/AddPurchasesRecModal";
import FabButton from "../components/FabButton";
import PurchasesRecordsComponent from "../components/PurchasesRecordsComponent";
import SalesRecordContext from "../data/Sales-Context";

const PurchasesRecords: React.FC = () => {
  const purchasesCtx = useContext(SalesRecordContext);
  const [showModal, setShowModal] = useState(false);

  const cancelAddingHandler = () => {
    setShowModal(false);
  };

  const startAddingPurchaseHandler = () => {
    setShowModal(true);
  };

  const savePurchaseRecordHandler = (
    title: string,
    storeName: string,
    date: Date
  ) => {
    purchasesCtx.addPurchaseRecord(title, storeName, date);
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <AddPurchasesRecModal
        show={showModal}
        onCancel={cancelAddingHandler}
        onSave={savePurchaseRecordHandler}
      />

      <IonPage>
        <IonHeader>
          <IonToolbar mode="ios">
            <IonButtons>
              <IonBackButton
                defaultHref="/home"
                text="Purchases Records"
                color="dark"
              />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <FabButton
            routerLink={undefined}
            onClickHandler={startAddingPurchaseHandler}
          />
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonList>
                  {purchasesCtx.purchasesRecords.map((purchaseRecord) => (
                    <PurchasesRecordsComponent
                      key={purchaseRecord.purchaseId}
                      purchaseId={purchaseRecord.purchaseId}
                      purchasesTitle={purchaseRecord.purchasesTitle}
                      storeName={purchaseRecord.storeName}
                      dateBought={purchaseRecord.dateBought}
                      routerLink={`/purchases/${purchaseRecord.purchaseId}`}
                    />
                  ))}
                </IonList>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default PurchasesRecords;
