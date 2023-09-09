// jQuery(document).ready(($) => {
//     $('.quantity').on('click', '.plus', function(e) {
//         let $input = $(this).prev('input.qty');
//         let val = parseInt($input.val());
//         $input.val( val+1 ).change();
//     });

//     $('.quantity').on('click', '.minus', 
//         function(e) {
//         let $input = $(this).next('input.qty');
//         var val = parseInt($input.val());
//         if (val > 0) {
//             $input.val( val-1 ).change();
//         } 
//     });
// });



let plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
numInput = document.querySelector(".num")

let a = 1

plus.addEventListener("click", ()=>{
    a++;
    a = (a < 10) ? 0 + a : a;
    numInput.innerText = a 
    console.log(a);
})

minus.addEventListener("click", ()=>{
    a--;
    a = (a < 10) ? 0 + a : a;
    numInput.innerText = a 
    console.log(a);
})


let cartBox = document.querySelector(".cart-box"),
modalCart = document.getElementById("modal-cart")
openCart = document.querySelector(".cart-btn"),
closeCart = document.querySelector(".close-cart")

openCart.addEventListener("click", ()=>{
modalCart.style.display = "block"
})
closeCart.addEventListener("click", () => {
    modalCart.style.display = "none"
})



// openCart.addEventListener("click", () => modalCart.classList.add("active"))
// console.log();
 
// let modalCart = document.getElementById("modal-cart")
// function openCart(){
//     modalCart.classList.add("open-cart")
// }
// function closeCart(){
//     modalCart.classList.remove("open-cart")
// }