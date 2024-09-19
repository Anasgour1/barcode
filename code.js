let imgBox = document.getElementById("imgBox");
let qrimage = document.getElementById("qrimage");
let inpt = document.getElementById("inpt");
let btn = document.getElementById('btn')
btn.addEventListener('click',generateQr);

function generateQr(){
    if(inpt.value.length > 0){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + 
        inpt.value;
        imgBox.classList.add("show-img")
    }

    else{
       inpt.classList.add('error')
       setTimeout(() => {
        inpt.classList.remove('error')
       }, 1000);
        
    }
} 
