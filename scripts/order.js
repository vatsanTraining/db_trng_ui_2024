
var orderObj = {}

orderObj.addHeading = function(){
   var headElement =document.querySelector("#majheading");
   headElement.innerHTML="Shiv Online Store"
   headElement.setAttribute('class','centerText')

}

// create a method addImage and add a image to header element 

orderObj.addImage = function(imageRef){
    var headElement =document.querySelector("header");
    var imageElement =document.createElement("img");
    imageElement.setAttribute('src',imageRef)
    imageElement.setAttribute('class','logo')
    imageElement.setAttribute('id','logo')
    

    headElement.append(imageElement)
 }

 // Attach an moveover to the image and change the border
// use an annonymous call back function and also a named call back function

orderObj.handleMouseOver = function(){

    var imgElement =document.querySelector("#logo");

    imgElement.setAttribute('style','border:5px solid red')

}
orderObj.attchEventToLogo = function(){

    var imgElement =document.querySelector("#logo");

    // imgElement.addEventListener('mouseover',function(){

    //     imgElement.setAttribute('style','border:5px solid red')
    // })

    // observe the method is not having circle braces ()
    imgElement.addEventListener('mouseover',orderObj.handleMouseOver)
}


orderObj.addHeading();
orderObj.addImage('images/logo.png')
orderObj.attchEventToLogo();
console.log(orderObj.handleMouseOver)
//console.log(orderObj.handleMouseOver())
