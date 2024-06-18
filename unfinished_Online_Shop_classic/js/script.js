document.getElementById('company_icon-btn').addEventListener('click',function(){
    if(document.getElementById('companyId').classList.contains('open')){
        document.getElementById('companyId').classList.remove('open')
    }else{
        document.getElementById('companyId').classList.add('open')
    }
} )

const popup = document.querySelector(".popup");
const popupClose = document.querySelector("#popup_close");
const body = document.body;
const popupContainer = document.querySelector("#popup_container");
const popupProductList = document.querySelector("#popup_product_list");
const popupCost = document.querySelector("#popup_cost")
const trash = document.querySelector('#trash')




trash.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("popup--open");
    body.classList.add("lock");
  });
  
  popupClose.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("popup--open");
    body.classList.remove("lock");
  });






 document.onclick = event => {
   
    if(event.target.classList.contains('product_cart')){
       
        plusFunction(event.target.datset.id);
    }

  
    
    }

   const plusFunction = id => {
        cart[id] ++;
        renderCart();
    }

   const minusFunction = id => {
        if(cart[id] - 1 == 0) {
            deleteFunction(id);
            return true
        }
        cart[id] -- ;
        renderCart()
    }

    const deleteFunction = id => {
        delete cart[id];
        renderCart();
    }

    const renderCart = () => {
        console.log(cart);
    }
 