

export const SALE_DATA = [
    {
        saleId: "s1",
        saleTitle:"Tuesday Sales",
        saleDate:new Date().toDateString(),
        salesTransactions:[
            {
                transId:"trans1",
                productSold:"Mirinda Orange",
                productQuantity:16,
                amountPaid:40,
                
            }
        ]
    },
    {
        saleId: "s2",
        saleTitle:"Wednesday Sales",
        saleDate:new Date(),
        salesTransactions:[
            {
                transId:"trans2",
                productSold:"Mirinda Grape",
                productQuantity:12,
                amountPaid:30,
                
            },
            {
                transId: Math.random().toString(),
                productSold:"Mazoe Orange Crush",
                productQuantity:6,
                amountPaid:17.50,
            
            }
        ]
    }
]