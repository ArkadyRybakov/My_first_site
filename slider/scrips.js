function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
  
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')

const images = document.querySelectorAll(".photos img");

let imageIndex = 0;

nextButton.onclick = function() {
    images[imageIndex].classList.remove("show");

    if(imageIndex >= images.length - 1) {
        imageIndex = 0;
    }    else {
            imageIndex = imageIndex + 1;
        }
    


    images[imageIndex].classList.add("show");

}

prevButton.onclick = function() {
    images[imageIndex].classList.remove("show");

    if(imageIndex <= 0){
        imageIndex = images.length - 1;
    } else {
        imageIndex = imageIndex - 1
    }


    images[imageIndex].classList.add("show");

}
