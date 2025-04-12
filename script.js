import { data } from "./data.js";  
console.log(data.items,"items")
function product(){
    data.items.forEach((item)=>{
        item.product.id
        item.product.images
        item.product.name
        item.product.price
    
    })
}
 


function openCarrinho(){
    const button = document.querySelector(".carrrinhobtn")
    button.addEventListener("click",()=>{
        console.log("carrinho")
        const ulcart = document.querySelector(".cartul")
        if(ulcart){
            ulcart.remove()
        }else{
            const header = document.querySelector("header")
        header.insertAdjacentHTML("beforeend",`
             <ul class="cartul">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
            `)
        }
        
    })
}
openCarrinho()
