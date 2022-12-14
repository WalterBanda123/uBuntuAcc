import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import SalesRecords from "./pages/SalesRecords";
import SalesReocrdTransactions from "./pages/SalesRecordTransactions";
import SalesRecordsContextProvider from "./data/SalesRecordsContextProvider";

import Inventory from "./pages/PurchasesPage";
import Purchases from "./pages/PurchasesPage";
import PurchasesRecords from "./pages/PurchasesRecords";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <SalesRecordsContextProvider>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/sales-records">
            <SalesRecords />
          </Route>
          <Route exact path="/sales-records/:recordId">
            <SalesReocrdTransactions />
          </Route>
          <Route exact path="/purchases/:purchaseId">
            <Purchases />
          </Route>
          <Route exact path="/purchases">
            <PurchasesRecords />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </SalesRecordsContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
