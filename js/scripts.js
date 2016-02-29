
function Myshop (name, image, qty, sold) {
	this.name = name;
	this.image = image;
	this.qty = qty;
	this.sold = sold;
}
myArray = []

var shirt1 = new Myshop("Black Spidey", "img/shirt1.png", 100,5)
var shirt2 = new Myshop("Red Spidey", "img/shirt2.png", 100,10)
var shirt3 = new Myshop("The Flash", "img/shirt3.png", 100,34)
var shirt4 = new Myshop("Green Lantern", "img/shirt4.png", 100,1)
var shirt5 = new Myshop("Capt America", "img/shirt6.png", 100,24)
var shirt6 = new Myshop("DeadPool", "img/dead.png", 100,75)



myArray.push(shirt1)
myArray.push(shirt5)
myArray.push(shirt2)
myArray.push(shirt4)

myArray.push(shirt3)
myArray.push(shirt6)

for (var i = 0; i < myArray.length ; i++) {

	var shirtName = document.createTextNode(myArray[i].name)
	var shirtImg = (myArray[i].image)
	var shirtSize = document.createTextNode("Size: One size fits most")
	var shirtQty = document.createTextNode("In Stock: " + myArray[i].qty)
	var shirtSold = document.createTextNode("Sold in last 24hrs: " + myArray[i].sold)
	var shirtBuy = document.createTextNode("Buy Now")

	var nameH1 = document.createElement("h1")
	var imgH4 = document.createElement("img")
	var sizeH4 = document.createElement("h4")
	var qtyH4 = document.createElement('h4')
	var soldH4 = document.createElement("h4")
	var button = document.createElement("button")
	var newDiv = document.createElement("div")
	var newCol = document.createElement("div")
    
   imgH4.src = shirtImg
	 nameH1.appendChild(shirtName)
	 newDiv.appendChild(nameH1) 
	 newDiv.appendChild(imgH4)
 	 sizeH4.appendChild(shirtSize)
	 newDiv.appendChild(sizeH4)
	 soldH4.appendChild(shirtSold)
	 newDiv.appendChild(soldH4)
	 qtyH4.appendChild(shirtQty)
	 newDiv.appendChild(qtyH4)
	 button.appendChild(shirtBuy)
	 newDiv.appendChild(button)
 	 newCol.appendChild(newDiv)
	 button.className = "blkbutton"
	 newCol.className += "col-md-4"
	 newDiv.className = " thumbnail" + i

document.getElementById('childMaker').appendChild(newCol)

}


     document.getElementById("body").addEventListener("mouseover", function(event){
     	  if (event.target.tagName.toLowerCase() === 'img') {
        document.images[5].src ="img/dead2.png"
       } 
	})


     document.getElementById("body" ).addEventListener("mouseout", function(event){
     	  if (event.target.tagName.toLowerCase() === 'img') {
        document.images[5].src ="img/dead.png"
   
       } 
	})


     document.getElementById("body").addEventListener("mouseover", function(event){
     	  if (event.target.tagName.toLowerCase() === 'img') {
        document.images[4].src ="img/shirt3.5.png"
       } 
	})


     document.getElementById("body" ).addEventListener("mouseout", function(event){
     	  if (event.target.tagName.toLowerCase() === 'img') {
        document.images[4].src ="img/shirt3.png"
   
       } 
	})


     document.getElementById("body").addEventListener("mouseover", function(event){
     	  if (event.target.tagName.toLowerCase() === 'img') {
        document.images[3].src ="img/shirt4.5.png"
       } 
	})


     document.getElementById("body" ).addEventListener("mouseout", function(event){
     	  if (event.target.tagName.toLowerCase() === 'img') {
        document.images[3].src ="img/shirt4.png"
   
       } 
	})
document.getElementById("body").addEventListener("mouseover", function(event){
     	  if (event.target.tagName.toLowerCase() === 'img') {
        document.images[2].src ="img/shirt2.5.png"
       } 
	})


     document.getElementById("body" ).addEventListener("mouseout", function(event){
     	  if (event.target.tagName.toLowerCase() === 'img') {
        document.images[2].src ="img/shirt2.png"
   
       } 
	})

document.getElementById("body").addEventListener("mouseover", function(event){
     	  if (event.target.tagName.toLowerCase() === 'img') {
        document.images[1].src ="img/shirt6.5.png"
       } 
	})


     document.getElementById("body" ).addEventListener("mouseout", function(event){
     	  if (event.target.tagName.toLowerCase() === 'img') {
        document.images[1].src ="img/shirt6.png"
   
       } 
	})
document.getElementById("body").addEventListener("mouseover", function(event){
     	  if (event.target.tagName.toLowerCase() === 'img') {
        document.images[0].src ="img/shirt1.5.png"
       } 
	})


     document.getElementById("body" ).addEventListener("mouseout", function(event){
     	  if (event.target.tagName.toLowerCase() === 'img') {
        document.images[0].src ="img/shirt1.png"
   
       } 
	})






