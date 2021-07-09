
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// modal js

var img = document.querySelectorAll(".modal-img");  // resmi seçiyor
var modalImg = document.querySelectorAll(".modal-box"); // büyüyen resim close altında

img.forEach(element =>{
  element.onclick = function(){
     let modal = element.nextElementSibling;
     let modalImg = modal.children[1]; //spanı seç
     let modalclose= modal.children[0]; //close seç
     modal.style.display = "block"; 
     modalImg.setAttribute("src", element.src);
     
     modalclose.addEventListener('click', () => modal.style.display = "none");
  }
})


$( ".modal-img" ).click(function() {

    $("body").css("overflow-y", "hidden");

  });
  
$( ".close" ).click(function() {

    $("body").css("overflow-y", "scroll");

  });




// scroll animation

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)


function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}


// up js

var arrow = document.getElementsByClassName('up')[0];


window.addEventListener('scroll', () => {
  const distance = window.scrollY;

  if (distance>300) {
    arrow.classList.add('show-arrow')
  } else {
    arrow.classList.remove('show-arrow')
  }

})

arrow.addEventListener('click', () => {
  window.scrollTo(0,0);
})