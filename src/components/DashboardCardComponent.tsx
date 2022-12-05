import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React from "react";

interface componentTitle{
    title:String;
    routerLink:any
}


const DashboardCardComponent: React.FC<componentTitle> = props=>{
    return(
       <IonCard routerDirection="forward" routerLink={props.routerLink}>
        <IonCardContent>
            <IonCardHeader>
                <IonCardTitle>{props.title}</IonCardTitle>
            </IonCardHeader>
        </IonCardContent>
       </IonCard>
    )
}

export default DashboardCardComponent;