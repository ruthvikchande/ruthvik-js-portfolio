console.log("hello");
const search = () => {
  const searchbox = document.getElementById("product-search").value.toUpperCase();
  const storeitrm = document.getElementById("container");
  const product = document.querySelectorAll(".card-body");
  const productname = storeitrm.getElementsByTagName("h3");
// console.log(product);
  for (var i = 0; i < productname.length; i++) {
    // console.log(productname[i]);
    let match = product[i].getElementsByTagName("h3")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
       }
    }
  }
}
