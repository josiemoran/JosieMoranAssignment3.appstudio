/*let list= ["Crocheted Dog Toy, $10.00", "Slow Feeder Bowl, $14.00","Pawz Grey Treat Jar, $20.00 ","Blue Sweet Dreams Thermal Pajamas, $30.00", "Checker Chewy Vuiton Bowl, $32.00","Red Heart Sweater Dress, $27.00", "Velvet Hair Bow - Sun Kissed, $12.00", "Into the Wild Leash, $27.00"]
let productsList= ["Crocheted Dog Toy", "Slow Feeder Bowl","Pawz Grey Treat Jar","Blue Sweet Dreams Thermal Pajamas", "Checker Chewy Vuiton Bowl","Red Heart Sweater Dress", "Velvet Hair Bow - Sun Kissed", "Into the Wild Leash"]
lblHeader.textContent = ("List of the products and prices of Dogs R Us ")
lblList.textContent = list
let MyList = []
btnAdd.onclick=function(){
  let product= iptProduct.value
  n=productsList.includes(product)
  if (n==true)
    MyList.push(product)
  if(n==false)
    alert("Type a product that is on the list")
}

btnMyList.onclick=function(){
  lblList.textContent = MyList
  lblHeader.textContent= ("Your Wish list")
}
*/