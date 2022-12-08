import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import React from "react";
import {add} from "ionicons/icons";

interface fabContent {
  routerLink: any;
  onClickHandler:any
}


const FabButton: React.FC<fabContent> = (props) => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton  routerLink={props.routerLink} onClick={props.onClickHandler}>
        <IonIcon icon={add}/>
      </IonFabButton>
    </IonFab>
  );
};

export default FabButton;
