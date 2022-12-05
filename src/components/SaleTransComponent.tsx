import { IonItem, IonLabel } from "@ionic/react";
import React from "react";

interface saleTrans{
    productTitle:String;
    productQuantity:any;
    amountPaid:any;

}

const SaleTransComponent:React.FC<saleTrans> = props =>{

    return<IonItem>
        <IonLabel>
            
            <h2>Product Title: {props.productTitle}</h2>
            <h4>Products Sold:{props.productQuantity}</h4>
            <h5>Amount Paid: ${props.amountPaid}USD</h5>
         
            
        </IonLabel>
    </IonItem>
};


export default SaleTransComponent;