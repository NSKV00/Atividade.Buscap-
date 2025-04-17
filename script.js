import { data } from "./data.js";  
console.log(data.items,"items")
function product(){
    data.items.forEach((item)=>{
        item.product.id
        item.product.images
        item.product.name
        item.product.value
        item.product.installment
        item.product.installmentValua
    
    })
}product()
const carrinho = [];
// const carrinho = []
// function mCarrinho(){
//     const ul = document.querySelector("ul")
//     data.forEach((data,items)=>{
//         ul.insertAdjacentHTML("beforeend",`
//             <li>
//                 <fieldset>
//                     <img src="TV.jpeg" alt="TV">
//                     <img src="TV.jpeg" alt="TV">
//                     <img src="TV.jpeg" alt="TV">
//                 </fieldset>
//                 <img src="TV.jpeg" alt="TV">
//                 <div>
//                     <p>${product.name}</p>
//                     <div>
//                         <div>
//                             <p>${product.installment}x R$${product.installmentValua} sem juros</p>
//                         <p>ou ${product.value} á vista</p>
//                         </div>
//                         <button id="${product.id}add">Adicionar ao carrinho</button>
//                     </div>
//                 </div>
//             </li>`)
//             const button = document.getElementById(`${product.id}add`)
//             button.addEventListener("click",()=>{
//             console.log("click",product)
//             carrinho.push(product)
//             montarCarrinho(carrinho)
//         })
//     })
// mCarrinho()

montarProdutos()
function montarProdutos(){
const ul = document.querySelector("ul")
    data.items.forEach((produto)=>{
        ul.insertAdjacentHTML("beforeend",`
        <li>
            <fieldset>
                <img src="TV.jpeg" alt="TV">
                <img src="TV.jpeg" alt="TV">
                <img src="TV.jpeg" alt="TV">
               </fieldset>
            <img src="TV.jpeg" alt="TV">
            <div>
                <p>${produto.product.name}</p>
                <div>
                    <div>
                        <p>${produto.product.price.installments}x R$${produto.product.price.installmentValue} sem juros</p>
                    <p>ou R$${produto.product.price.value} á vista</p>
                    </div>
                    <button id="${produto.product.id}add">Adicionar ao carrinho</button>
                </div>
            </div>
        </li>`)
        const button = document.getElementById(`${produto.product.id}add`)
        button.addEventListener("click",()=>{
            console.log("click",produto.product)
            carrinho.push(produto.product)
            //mCarrinho(carrinho)
        })
    })
}
// mCarrinho()
function mCarrinho(){
    const ul = document.querySelector(".cartul")
    ul.innerHTML = ""
    carrinho.forEach((produto)=>{
        ul.insertAdjacentHTML("afterbegin",`
            <li>
            
            <img src="TV.jpeg" alt="TV">
            <div>
                <p>${produto.name}</p>
                <div>
                    <div>
                        <p>${produto.price.installments}x R$${produto.price.installmentValue} sem juros</p>
                    <p>ou R$${produto.price.value} á vista</p>
                    </div>
                    <button id="${produto.id}cancel">Remover do carrinho</button>
                </div>
            </div>
        </li>`)
           const button = document.getElementById(`${produto.id}cancel`)
           button.addEventListener("click",(e)=>{
                console.log(e,"event")
                removerItemDoCarrinho(produto)
                //mCarrinho()
           })
    })
}
// function montarCarrinho(carrinho=[]){
//     const ul = document.querySelector(".carrinho")
//     ul.innerHTML = ""
//     carrinho.forEach((items)=>{
//         ul.insertAdjacentHTML("afterbegin",`
//             <li>
//                 <fieldset>
//                     <img src="TV.jpeg" alt="TV">
//                     <img src="TV.jpeg" alt="TV">
//                     <img src="TV.jpeg" alt="TV">
//                 </fieldset>
//                 <img src="TV.jpeg" alt="TV">
//                 <div>
//                     <p>${product.name}</p>
//                     <div>
//                         <div>
//                             <p>${product.installment}x R$${product.installmentValua} sem juros</p>
//                         <p>ou ${product.value} á vista</p>
//                         </div>
//                         <button id="${product.id}add">Adicionar ao carrinho</button>
//                     </div>
//                 </div>
//             </li>`)
//     })
    
// }
function removerItemDoCarrinho(product){
    console.log(product,"produto")
    const index = carrinho.findIndex((cart)=>{
        return cart.id === product.id
    })
    carrinho.splice(index,1)
    mCarrinho(carrinho)
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
                </ul>
            `)
            mCarrinho()
            // const ulcart = document.querySelector(".cartul")
            // carrinho.forEach((cart)=>{
            //     ulcart.insertAdjacentHTML("beforeend",`
            //         <li>${cart.name}</li>
            //         `)
            // })
        }
        
    })
}
openCarrinho()
