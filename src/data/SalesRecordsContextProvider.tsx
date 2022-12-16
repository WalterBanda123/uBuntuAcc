import React, { useState } from "react";
import SalesRecordContext, {
  PurchasesRecord,
  SalesRecord,
  Transaction,
} from "./Sales-Context";

const SalesRecordsContextProvider: React.FC<{ children: any }> = (props) => {
  const [purchases, setPurchases] = useState<PurchasesRecord[]>([
    {
      purchaseId: "purch_1",
      purchasesTitle: "Purchases Black friday",
      storeName: "Mahommad Mussa",
      dateBought: new Date(),
      purchasedItems: [
        {
          id: "inv1",
          itemTitle: "Oranges ",
          itemQuantity: "300",
          pricePerItem: "0.30",
        },
      ],
    },
  ]);

  const [records, setRecords] = useState<SalesRecord[]>([
    {
      id: Math.random().toString(),
      title: "Tuesday Sales",
      date: new Date(),
      transactions: [
        {
          id: Math.random().toString(),
          productTitle: "Mirinda Orange",
          productPrice: 300,
          quantitySold: 60,
          amountPaid: 400,
          changeLeft: 100,
          customerName: "Tichaona",
          discountAllowed: 0.0,
        },
      ],
    },
  ]);

  const addRecord = (title: string, date: Date) => {
    const newSalesReocrd: SalesRecord = {
      id: Math.random().toString(),
      title: title,
      date: date,
      transactions: [],
    };
    setRecords((curSalesRecords) => {
      return curSalesRecords.concat(newSalesReocrd);
    });
  };

  const addPurchaseRecord = (
    title: string,
    storeName: string,
    dateOfPurch: Date
  ) => {
    const newPurchaseRecord: PurchasesRecord = {
      purchaseId: Math.random().toString(),
      purchasesTitle: title,
      storeName: storeName,
      dateBought: dateOfPurch,
      purchasedItems: [],
    };
    setPurchases(curPurchasesRecords =>{
      return curPurchasesRecords.concat(newPurchaseRecord);
    });
  };

  const addTransaction = (
    recordId: string,
    productTitle: string,
    price: number,
    quantity: number,
    amountPaid: number,
    changeLeft: number,
    customerName: string,
    discountAllowed: number
  ) => {
    setRecords((salesRecords) => {
      const newTransaction: Transaction = {
        id: Math.random().toString(),
        productTitle,
        productPrice: price,
        quantitySold: quantity,
        amountPaid,
        changeLeft,
        customerName,
        discountAllowed,
      };

      const updateSaleRecords = [...salesRecords];

      const updateSaleRecordIndex = updateSaleRecords.findIndex(
        (salerecord) => salerecord.id === recordId
      );

      const updateSaleRecordTrans =
        updateSaleRecords[updateSaleRecordIndex].transactions.concat(
          newTransaction
        );
      const updateSaleRecord = { ...updateSaleRecords[updateSaleRecordIndex] };
      updateSaleRecord.transactions = updateSaleRecordTrans;
      updateSaleRecords[updateSaleRecordIndex] = updateSaleRecord;
      return updateSaleRecords;
    });
  };
  const deleteTransaction = () => {};
  const updateTransaction = () => {};

  return (
    <SalesRecordContext.Provider
      value={{
        salesRecords: records,
        purchasesRecords: purchases,
        addSaleRecord: addRecord,
        addPurchaseRecord: addPurchaseRecord,
        addSaleTransaction: addTransaction,
        deleteSaleTransaction: deleteTransaction,
        updateSaleRecord: updateTransaction,
      }}
    >
      {props.children}
    </SalesRecordContext.Provider>
  );
};

export default SalesRecordsContextProvider;
