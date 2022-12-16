import React from "react";

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
  addSaleRecord: (recordTitle: string, recordDate: Date) => void;
  addSaleTransaction: (
    recordId:string,
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
  addSaleRecord: () => {},
  addSaleTransaction: () => {},
  deleteSaleTransaction: () => {},
  updateSaleRecord: () => {},
});

export default SalesRecordContext;
