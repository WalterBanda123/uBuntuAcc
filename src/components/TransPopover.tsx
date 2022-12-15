import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonPopover,
} from "@ionic/react";
import {
  documentTextOutline,
  pencilOutline,
  trashBinOutline,
} from "ionicons/icons";
import React from "react";

interface popover {
  trigger: any;
  triggerActions: any;
  readInformation:any;
  deleteTrans:any;
  editTrans:any
}

const TransPopover: React.FC<popover> = (props) => {
  return (
    <IonPopover
      side="right"
      trigger={props.trigger}
      triggerAction={props.triggerActions}
    >
      <IonContent>
        <IonItem button routerLink={props.readInformation}>
          <IonIcon icon={documentTextOutline} />
          Transaction Information
        </IonItem>
        <IonItem button routerLink={props.editTrans}>
          <IonIcon icon={pencilOutline} color="success" />
          Edit transaction
        </IonItem>
        <IonItem button onClick={props.deleteTrans}>
          <IonIcon icon={trashBinOutline} color="danger" />
          Delete transaction
        </IonItem>
      </IonContent>
    </IonPopover>
  );
};

export default TransPopover;
