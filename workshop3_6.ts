type Category = "Electronics"| "Clothing" | "Food";
interface Product{
    readonly id: number;
    name: string;
    category: Category;
    price: number;
}
let products: Product[] = [
    {id:1, name:"Laptop", category:"Electronics", price:20000},
    {id:2, name:"T-Shirt", category:"Clothing", price:299},
    {id:3, name:"Apple", category:"Food", price:20},
]
function filtercat(category:Category):Product[]{
    let catlist = []
    for(let i = 0; i<products.length; i++){
        if(products[i].category===category)
            catlist.push(products[i]);
    }
    return catlist;
}
console.log(filtercat("Clothing"));