
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

orderObj.createListItem = (value) =>{

    var list =document.querySelector("#staff")
    var listItem = document.createElement('li')
    listItem.textContent=value

    list.append(listItem)

}


orderObj.createList =function(...staffList){

    staffList.forEach(this.createListItem)

}

orderObj.createTableRow =function(row1,row2){

    //destructuring
    const {orderId,customerName,orderValue}=row1

    var tbodyElemnt =document.querySelector("tbody")

    tbodyElemnt.innerHTML=
     "<tr><td>"+orderId+
    "</td><td>"+customerName+
    "</td><td>"+orderValue+
    "</td></tr>"
}

const orderList =[
    {"orderId":101,"customerName":'ramesh','orderValue':45000},
    {"orderId":102,"customerName":'shiva','orderValue':55000}
]
const [order1,order2]= orderList

orderObj.createTableRow(...orderList)
orderObj.createList('Ramesh','Suresh',"Magesh")
orderObj.addHeading();
orderObj.addImage('images/logo.png')
orderObj.attchEventToLogo();
//console.log(orderObj.handleMouseOver)
//console.log(orderObj.handleMouseOver())
