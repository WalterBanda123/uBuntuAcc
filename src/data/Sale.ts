

export const PURCHASES = [
    {
        purchaseId: "purch_1",
        purchasesTitle: "Purchases Black friday",
        storeName: "Mahommad Mussa",
        dateBought: new Date().getUTCDate(),
        purchasedItems: [
            {
                id:"inv1",
                name:"Oranges ",
                price_per_item:"0.30",
                quantity_in_stock:"300", 
            }
        ]

    }
]

export const INVENTORY = [
    { id:"inv1",
        name:"Oranges ",
        price_per_item:"0.30",
        quantity_in_stock:"300",
        date_bought:new Date()

    },
    { id:"inv2",
        name:"Bananas ",
        price_per_item:"0.20",
        quantity_in_stock:"600",
        date_bought:new Date()

    },
    { id:"inv3",
        name:"Mazoe Orange Crush ",
        price_per_item:"3.20",
        quantity_in_stock:"600",
        date_bought:new Date()

    },
    { id:"inv4",
        name:"Matemba ",
        price_per_item:"1.50",
        quantity_in_stock:"600",
        date_bought:new Date()

    },
    { id:"inv5",
        name:"Apples",
        price_per_item:"0.45",
        quantity_in_stock:"700",
        date_bought:new Date()

    },
    { id:"inv6",
        name:"Bottled Water",
        price_per_item:"0.10",
        quantity_in_stock:"1000",
        date_bought:new Date()

    }
]


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