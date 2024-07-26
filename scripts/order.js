
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

orderObj.handleMouseOver = function(borderSize,borderColor){

    return function(){

        var imgElement =document.querySelector("#logo");
        var styleValue ='border:'+borderSize+'px solid '+ borderColor
        imgElement.setAttribute('style',styleValue)
    
    }
   
}
orderObj.attchEventToLogo = function(){

    var imgElement =document.querySelector("#logo");

    imgElement.addEventListener('mouseover',orderObj.handleMouseOver(7,'red'))


    imgElement.addEventListener('mouseout',function(){

        imgElement.setAttribute('style','1px solid brown')
    })

    // observe the method if its  having circle braces ()
}


orderObj.addHeading();
orderObj.addImage('images/logo.png')
orderObj.attchEventToLogo();
//console.log(orderObj.handleMouseOver)
//console.log(orderObj.handleMouseOver())
