let arr=[]
let total=0;
function cartbtn(){
    if(arr.length==0){
        alert("Your cart is Empty")
    }else{
        alert("Your order is Placed")
    } 
}
function addcartitem(imglink,prdname,rateshw,rate){
    let parentitem=document.getElementById("cartproducts")
    let divitem=document.createElement('div')
    divitem.className="border border-3 p-2"
    if(arr.indexOf(prdname)==-1){
        arr.push(prdname)
        let img=document.createElement('img')
        img.src=imglink
        img.style.width="25%"
        img.style.float="left"
        parentitem.appendChild(divitem)
        divitem.appendChild(img)
        let span=document.createElement('span')
        span.innerText=prdname
        divitem.appendChild(span)
        let span1=document.createElement('span')
        divitem.appendChild(document.createElement('br'))
        rateshw="₹ "+rateshw
        span1.innerText=rateshw
        divitem.appendChild(span1)
        divitem.appendChild(document.createElement('br'))
        let prdqnt=document.createElement('input')
        prdqnt.type="number"
        prdqnt.max=500
        prdqnt.id=prdname
        prdqnt.min=1
        prdqnt.value="1"
        calculateTot(rate,1)
        prdqnt.style.width="20%"
        divitem.appendChild(prdqnt)
        let quantity=0
        prdqnt.addEventListener('change',()=>{
            if(quantity<prdqnt.value){
                calculateTot(rate,1)
            }else if(quantity>prdqnt.value){
                reduceamt(rate,1)
            }  
            quantity=prdqnt.value
        })
        let delbtn=document.createElement('a')
        delbtn.onclick=remove
        function remove(){
            parentitem.removeChild(divitem)
            arr.splice(arr.indexOf(prdname),1)
            reduceamt(rate,prdqnt.value)
        }
        let img1=document.createElement('img')
        img1.src="img/recycle-bin.png"
        delbtn.appendChild(img1)
        img1.style.width="5%"
        img1.style.float="right"
        divitem.appendChild(delbtn)
    }else{
        alert("Your product is Already on cart")
    }
}
let dispspan=document.getElementById("totamt")
function calculateTot(pdrt,qtn){
    total=total+(pdrt*qtn)
    dispspan.innerText=total
}
function reduceamt(pdrt,qtn){
    total=total-(pdrt*qtn)
    dispspan.innerText=total
}

