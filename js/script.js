$("html,body").animate({scrollTop:0},1000);
$(".nav-link").click(function () {
    $(".nav-link").parent().siblings().children().removeClass("active")
    $(this).addClass("active")
})
// setTimeout(function () {                  
//     $(window).scrollTop($("#Home"))
//   }, 1000)
//     $(window).scrollTop($("#Home"))
//     $(window).scrollTop($("#Home"))
    navbar = document.getElementsByClassName("navbar");
    var lastScroll = 0;
    window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop ;
    console.log(scrollTop)
    if (scrollTop > lastScroll) {
        $(".navbar").addClass("cc")
        
        $(".navbar").addClass("position-fixed")
        $(".navbar").removeClass("d-none")                  
        this.setTimeout(function () {
            $(".navbar").addClass("o-1")
            
        }, 200)
    }
    else {
        
        $(".navbar").addClass("o-0")                  
        $(".navbar").removeClass("o-1")  
        this.setTimeout(function () {
            $(".navbar").addClass("d-none")                  
            
          }, 200)
          
        }
        if(scrollTop=="0"){
            this.setTimeout(function () {
                $(".navbar").removeClass("d-none")                  
                
                  }, 201)
                
        $(".navbar").removeClass("o-0")                     
        $(".navbar").removeClass("cc")
        $(".navbar").addClass("o-1")
        $(".navbar").addClass("position-fixed")
    }
    lastScroll = scrollTop
})











var imgsList =   Array.from(document.querySelectorAll(".sli img"))
var innerBox = document.querySelector(".innerbox")
var closeEle = document.getElementById("close")
var boxContainer = document.getElementById("boxContainer")
var prevEl = document.getElementById("prev")
var nextEl = document.getElementById("next")
var currentIndex=0



for (var i = 0; i < imgsList.length; i++) {
    imgsList[i].addEventListener("click", function (e) {
        boxContainer.style.display = "flex"
        var imgSrc = e.target.getAttribute("src")
        innerBox.style.backgroundImage = "url("+imgSrc+")"
        currentIndex=imgsList.indexOf(e.target);
    })
}

closeEle.addEventListener("click", function () {
    closee()
})
function closee() {
    boxContainer.style.display = "none"
 
}
nextEl.addEventListener("click",nextElement)
//nextEl.addEventListener("ArrowRight",nextElement)
prevEl.addEventListener("click",prevElement)
document.addEventListener("keyup",function(e){
if(e.key=="ArrowRight")
nextElement()
else if(e.key=="ArrowLeft")
prevElement()
else if(e.key=="Escape")
closee()
})
boxContainer.addEventListener("click",function (e) {
    if(e.target.getAttribute("id")=="boxContainer")
    closee()
})

function nextElement() {
    currentIndex++;
    currentIndex%=imgsList.length
    innerBox.style.backgroundImage = "url("+imgsList[currentIndex].getAttribute("src")+")"
    
}
function prevElement() {
    currentIndex--;
    if(currentIndex<0){
        currentIndex=-1*currentIndex
    }
    currentIndex%=imgsList.length
    innerBox.style.backgroundImage = "url("+imgsList[currentIndex].getAttribute("src")+")"

}




function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
function myFunctionn() {
    var dots = document.getElementById("dotss");
    var moreText = document.getElementById("moree");
    var btnText = document.getElementById("myBtnn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
function myFunctionnn() {
    var dots = document.getElementById("dotsss");
    var moreText = document.getElementById("moreee");
    var btnText = document.getElementById("myBtnnn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }