export{};
function caculatePrice(price: number,discountPercent: number): number{
    let afterdisc = price-(price*discountPercent/100);
    if(afterdisc>0){
        return afterdisc;
    }
    else{
        return 0;
    }
}
const price1: number= 200;
let price2: number = 500;
console.log(`สินค้า ${price1} บาท ราคาสุทธิหลังหักส่วนลด ${caculatePrice(price1,120)} บาท`);
console.log(`สินค้า ${price2} บาท ราคาสุทธิหลังหักส่วนลด ${caculatePrice(price2,20)} บาท`);