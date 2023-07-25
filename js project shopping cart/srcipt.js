console.log("hello world!");
let addtocartbtn=document.getElementsByClassName('btn-primary');
let maincointainer=document.getElementsByTagName("tbody")[0];
let quantity=document.getElementsByClassName("num");
let removebutton=document.getElementsByClassName("uk-button-danger")



for(let i=0;i<addtocartbtn.length;i++){
    // console.log(addtocartbtn[i]);
    addtocartbtn[i].addEventListener('click',addtocard);
}

    function addtocard(event){

        let btn=event.target;
        console.log(btn);
        let btn_parent=btn.parentElement;
        let btn_grandparent=btn.parentElement.parentElement;
        let itemname=btn_parent.children[0].innerText;
        let itemprice=btn_parent.children[1].innerText;
        let itemimage=btn_grandparent.children[0].src;

         let itemcointainer=document.createElement("tr");
         itemcointainer.innerHTML=`
         <td><input class="uk-checkbox" type="checkbox"></td>
         <td><img class="uk-preserve-width uk-border-circle" src="${itemimage}" width="40" alt=""></td>
         <td class="uk-table-link">
             <h3 class = "item-name">${itemname}</h3>
         </td>
         <td class="uk-text-truncate item-price"><h3>${itemprice}</h3></td>
         <td><input type = 'number' class = 'num' value = '1'></td>
         <td class="uk-text-truncate total-price"><h3>${itemprice}</h3></td>
         <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>

         
         `
         maincointainer.appendChild(itemcointainer);
         for(let i=0;i<quantity.length;i++){
            // console.log(addtocartbtn[i]);
            quantity[i].addEventListener('click',updatetotal);
        }
        for(let i=0;i<removebutton.length;i++){
            removebutton[i].addEventListener('click',removeitem);
        }
        grandtotal();
    }

    function updatetotal(event){
       let  numberofitem=event.target
      let  numberofitemparent=numberofitem.parentElement.parentElement;
      let pricefield=numberofitemparent.getElementsByClassName("item-price")[0];
      let totalfield=numberofitemparent.getElementsByClassName("total-price")[0];
      let pricefieldcontain=pricefield.children[0].innerText.replace('$',' ');
       totalfield.children[0].innerText= '$' + numberofitem.value*pricefieldcontain;

       if(isNaN(numberofitem.value) || (numberofitem.value <=0)){
        numberofitem.value=1;
       }
       grandtotal();

    }
    function grandtotal(){
        let total=0;
        let grandtotals=document.getElementsByClassName("grand-total")[0];
        let totalprice=document.getElementsByClassName("total-price");
        for(let i=0; i<totalprice.length; i++){
           totalpricecontent=Number(totalprice[i].innerText.replace('$',' '));
           total +=totalpricecontent;
        }
        grandtotals.children[0].innerText='$' + total;
        grandtotals.children[0].style.fontWeight='bold';

    }
    function removeitem(event){
       let remove=event.target;
      let removegrandparent=remove.parentElement.parentElement;
       removegrandparent.remove();
       grandtotal();

    }