import React from "react";

export interface PurchasesRecord {
  purchaseId: string;
  purchasesTitle: string;
  storeName: string;
  dateBought: Date;
  purchasedItems: PurchasedItem[];
}

export interface PurchasedItem {
  id: string;
  itemTitle: string;
  itemQuantity: any;
  pricePerItem: any;
}

export interface SalesRecord {
  id: string;
  title: string;
  date: Date;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  productTitle: string;
  productPrice: number;
  quantitySold: number;
  amountPaid: number;
  changeLeft: number;
  customerName: string;
  discountAllowed: number;
}

interface SalesContext {
  salesRecords: SalesRecord[];
  purchasesRecords: PurchasesRecord[];
  addSaleRecord: (recordTitle: string, recordDate: Date) => void;
  addPurchaseRecord:(purchaseRecordTitle:string, purchaseStoreName:string, purchaseDate:Date)=>void;
  addSaleTransaction: (
    recordId: string,
    productName: string,
    productPrice: number,
    quantity: number,
    amountPaid: number,
    changeLeft: number,
    customerNumber: string,
    discountAllowed: number
  ) => void;
  deleteSaleTransaction: () => void;
  updateSaleRecord: () => void;
}

const SalesRecordContext = React.createContext<SalesContext>({
  salesRecords: [],
  purchasesRecords: [],
  addSaleRecord: () => {},
  addPurchaseRecord:()=>{},
  addSaleTransaction: () => {},
  deleteSaleTransaction: () => {},
  updateSaleRecord: () => {},
});

export default SalesRecordContext;
