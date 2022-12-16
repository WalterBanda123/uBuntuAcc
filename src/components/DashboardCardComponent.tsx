import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonImg,
  IonLabel,
  IonRow,
  IonThumbnail,
} from "@ionic/react";
import React from "react";

interface componentTitle {
  title: String;
  routerLink: any;
  imageSource: any;
  description: any;
  imageAlt: any;
}

const DashboardCardComponent: React.FC<componentTitle> = (props) => {
  return (
    <IonCard routerDirection="forward" routerLink={props.routerLink}>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size="2">
              <IonAvatar>
                <IonImg src={props.imageSource} alt={props.imageAlt} />
              </IonAvatar>
            </IonCol>
            <IonCol>
              <IonLabel>
                <i>
                  <h1>
                    <strong>{props.title}</strong>
                  </h1>
                  <h4>{props.description}</h4>
                </i>
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default DashboardCardComponent;
