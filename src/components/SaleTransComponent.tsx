import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";
import React from "react";
import TransPopover from "./TransPopover";

interface saleTrans {
  id: string;
  productTitle: string;
  productQuantity: any;
  amountPaid: any;
  deleteTransItem: any;
  editTransItem: any;
  readTransInfro: any;
  //routerLink: any;
}

const SaleTransComponent: React.FC<saleTrans> = (props) => {
  return (
    <>
      <TransPopover
        trigger={props.id}
        triggerActions="click"
        readInformation={props.readTransInfro}
        deleteTrans={props.deleteTransItem}
        editTrans={props.editTransItem}
      />
      <IonItem id={props.id}>
        <IonGrid>
          <IonLabel>
            <IonRow>
              <IonCol size="11">
                <h2>
                  Product Title: <strong>{props.productTitle}</strong>{" "}
                </h2>
                <h4>
                  Products Sold: <strong>{props.productQuantity}</strong>
                </h4>
                <h5>
                  Amount Paid:
                  <i>
                    <b>${props.amountPaid}USD</b>
                  </i>
                </h5>
              </IonCol>
              <IonCol size="1" className="ion-no-padding-left">
                <IonIcon
                  icon={ellipsisVertical}
                  size="large"
                  id={props.id}
                  // onClick={props.renderItems}
                />
              </IonCol>
            </IonRow>
          </IonLabel>
        </IonGrid>
      </IonItem>
    </>
  );
};

export default SaleTransComponent;
