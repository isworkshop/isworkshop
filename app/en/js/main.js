// globalne promenjive

// pokretanje particles.js 
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

// button za navigaciju na mobilnim uredjajima
function toggleButton(){
  var prva = document.getElementById("prva");
  var druga = document.getElementById("druga");
  var treca = document.getElementById("treca");
  var wrapper = document.getElementById("wrapper");
  var mediaTablet = window.matchMedia("(max-width: 1024px)").matches;
  var mediaMobile = window.matchMedia("(max-width: 425px)").matches;
  if (wrapper.classList.contains("active")){
    prva.style.transform = "initial";
    prva.style.top = "5px";
    druga.style.opacity = "1";
    treca.style.transform = "initial";
    treca.style.top = "29px";
    wrapper.style.width = "0";
    wrapper.classList.toggle("active");
  } else {
    prva.style.transform = "rotate(45deg)";
    prva.style.top = "17px";
    druga.style.opacity = "0";
    treca.style.transform = "rotate(-45deg)";
    treca.style.top = "17px";
    if(mediaTablet){
      wrapper.style.width = "50%";
    }
    if(mediaMobile) {
      wrapper.style.width = "100%";
    }
    wrapper.classList.toggle("active");
  }
};
  
document.getElementById('button').addEventListener('click', toggleButton, false);



function setActiveWindow(e) {
var tag = e.getAttribute("tag");
 switch(tag) {
  case "pocetna": 
    toggleActive(tag);
    resetSectionsClass();
    document.getElementById('particles-js').classList.toggle("active");
    break;
  case "o-nama": 
    toggleActive(tag);
    resetSectionsClass();
    document.getElementById('o-nama').classList.toggle("active");
    break;
  case "usluge": 
    toggleActive(tag);
    resetSectionsClass();
    document.getElementById('usluge').classList.toggle("active");
    break;
  case "cenovnik": 

    break;
  case "portfolio": 

    break;
  case "kontakt": 

    break;
}

}

function toggleActive(tag){
  // var menu = document.getElementsByClassName("meni");
  // for(var i=0;i<menu.length;i++){
  //   var nodes = menu[i].childNodes;
  //   for(var o=0;o<nodes.length;o++){
  //     var node = nodes[o];
  //     if(node.nodeName === "LI"){
  //       var link = node.getElementsByTagName('a')[0];
  //       link.classList = "";
  //     }
  //   }
  // }

  var nodes = document.querySelectorAll('[tag]');
  for(var i=0;i<nodes.length;i++){
    nodes[i].classList = "";
  } 

  var el = document.querySelectorAll('[tag=' + tag + ']');
  for(var i=0;i<el.length;i++){
    el[i].classList.toggle("active");
  }
}

function resetSectionsClass(){
  document.getElementById("particles-js").className = "";
  document.getElementById("o-nama").className = "";
  // document.getElementById("usluge").className = "";
  // document.getElementById("cenovnik").className = "";
  // document.getElementById("portfolio").className = "";
  // document.getElementById("kontakt").className = "";
}


window.addEventListener('scroll', function() {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
})



// Proveravanje input polja
function validateForm(){
  var userName = document.getElementById("name").value;
  var userEmail = document.getElementById("email").value;
  var userMessage = document.getElementById("message").value;
  // Provera da li je neko od polja prazno
  if(userName == "" || userEmail == "" || userMessage == ""){
    printErrorMsg("Sva polja su obavezna!");
    return false; 
  } else {
    var isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);
    // Provera da li polja sadrze tagove
    if(isHTML(userName) || isHTML(userEmail) || isHTML(userMessage)){
      printErrorMsg("Neki delovi unetih podataka nisu dozvoljeni.<br>Molimo obrišite ih.");
      return false;
    } else {
      // Provera da li je ime jednako ili duze od 3 karaktera
      if(userName.length >= 3){    
        var validation =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Provera da li je format email adrese ispravan
        if(validation.test(userEmail)) {
          return true;
        } else {
          printErrorMsg("Email adresa nije ispravna!");
          return false;
        }
      } else {
        printErrorMsg("Ime mora da sadrži najmanje 3 slova!");
        return false;
      }
    }
  }
}

// Ispisivanje greske
function printErrorMsg(errMessage){
  document.getElementById("error-message").innerHTML = errMessage;
}

// Slanje poruke ako su ispunjeni svi uslovi
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', function(event){
  var checkForm = validateForm();
  if(!checkForm){
    event.preventDefault();
  }
});



const modalOverlay = document.querySelectorAll(".modal-overlay");
const openModalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelectorAll(".close-btn");
const modalIzrada = document.querySelector('.modal-izrada');
const modalMarketing = document.querySelector('.modal-marketing');



modalIzrada.addEventListener("click", function () {
   document.getElementById('izrada').classList.add('open-modal');
   console.log(modalIzrada)

  });

  modalMarketing.addEventListener("click", function () {
    document.getElementById('marketing').classList.add('open-modal');
 
   });
 
  // modalOverlay.classList.add("open-modal");


closeModalBtn[0].addEventListener("click", function () {
  document.getElementById('izrada').classList.remove("open-modal");
  console.log(modalOverlay.classList);
});

closeModalBtn[1].addEventListener("click", function () {
  document.getElementById('marketing').classList.remove("open-modal");
  console.log(modalOverlay.classList);
});


// gsap.fromTo(".banner", {opacity: 0, x: "-1000px"}, {opacity: 1, x: "-50%", duration: 3});
// gsap.fromTo(".banner-under", {opacity: 0, x: "-1000px"}, {opacity: 0.5, x: "0px", duration: 2, delay: 2});
// gsap.fromTo(".title", {opacity: 0,}, {opacity: 1, duration: 3, delay: 3});

// gsap.registerPlugin(ScrollTrigger);

// gsap.from('.o-nama1', {
//   scrollTrigger: {
//     trigger: '.o-nama1',
//     toggleActions: "restart none restart none"
//   },
//   x: "-500px",
//   opacity: 0,
//   ease: "power1. out",
//   duration: 2
// })

// gsap.from('.o-nama2', {
//   scrollTrigger: {
//     trigger: '.o-nama2',
//     toggleActions: "restart none restart none"
//   },
//   x: "500px",
//   opacity: 0,
//   ease: "power1. out",
//   duration: 2
// })

// gsap.from('.usluge1', {
//   scrollTrigger: {
//     trigger: '.usluge1',
//     toggleActions: "restart none restart none"
//   },
//   x: "-500px",
//   opacity: 0,
//   ease: "power1. out",
//   duration: 2
// })

// gsap.from('.usluge2', {
//   scrollTrigger: {
//     trigger: '.usluge2',
//     toggleActions: "restart none restart none"
//   },
//   x: "500px",
//   opacity: 0,
//   ease: "power1. out",
//   duration: 2
// })

// gsap.from('.usluge3', {
//   scrollTrigger: {
//     trigger: '.usluge3',
//     toggleActions: "restart none restart none"
//   },
//   x: "-500px",
//   opacity: 0,
//   ease: "power1. out",
//   duration: 2
// })

// gsap.from('.usluge4', {
//   scrollTrigger: {
//     trigger: '.usluge4',
//     toggleActions: "restart none restart none"
//   },
//   x: "500px",
//   opacity: 0,
//   ease: "power1. out",
//   duration: 2,
// })

// gsap.from('.modal-izrada', {
//   scrollTrigger: {
//     trigger: '.modal-izrada',
//     toggleActions: "restart none restart none"
//   },
//   y: "-300px",
//   opacity: 0,
//   ease: "power1. out",
//   duration: 2, 
// })

// gsap.from('.cenovnik', {
//   scrollTrigger: {
//     trigger: '.cenovnik',
//     toggleActions: "restart none restart none",
//   },
//   x: "500px",
//   opacity: 0,
//   ease: "power1. out",
//   duration: 2,
// })
// gsap.timeline()
//     .from('.card', {opacity: 0,stagger:0.2, duration: 2.8,  ease: "back"});


//     gsap.from('.title3', {
//       scrollTrigger: {
//         trigger: '.title3',
//         toggleActions: "restart none none none"
//       },
//       y: "500px",
//       opacity: 0,
//       ease: "power1. out",
//       duration: 1,
//     })


//gsap 

gsap.to('.banner', {
  opacity: 1,
  // x: 0,
  duration: 1
})
gsap.fromTo(".banner-under", 
  {
    opacity: 0, 
    x: "-1000px"
  },
  {
    opacity: 0.5, 
    x: "0px", 
    duration: 1, 
    delay: 1
  });
gsap.fromTo(".title", 
  {
    opacity: 0
  },
  {
    opacity: 1, 
    duration: 2, 
    delay: 2
  });
gsap.registerPlugin(ScrollTrigger);
const fadein = gsap.utils.toArray('.fadein');
fadein.forEach(fade => {
  gsap.to(fade, { 
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: fade,
      toggleActions: "restart none restart none"
    }
  })
});
const zoomin = gsap.utils.toArray('.zoomin');
zoomin.forEach(zoom => {
  gsap.to(zoom, { 
    scale: 1,
    duration: 1,
    scrollTrigger: {
      trigger: zoom,
      toggleActions: "restart none restart none"
    }
  })
});
const slideFromLeft = gsap.utils.toArray('.slidefromleft');
slideFromLeft.forEach(slide => {
  gsap.to(slide, { 
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: slide,
      toggleActions: "restart reset restart reset"
    }
  })
});
const slideFromRight = gsap.utils.toArray('.slidefromright');
slideFromRight.forEach(slide => {
  gsap.to(slide, { 
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: slide,
      toggleActions: "restart reset restart reset"
    }
  })
});
const slideFromTop = gsap.utils.toArray('.slidefromtop');
slideFromTop.forEach(slide => {
  gsap.to(slide, { 
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: slide,
      toggleActions: "restart reset restart reset"
    }
  })
});
const slideFromBottom = gsap.utils.toArray('.slidefrombottom');
slideFromBottom.forEach(slide => {
  gsap.to(slide, { 
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: slide,
      toggleActions: "restart reset restart reset"
    }
  })
});
gsap.to('.fadein-line .fadein-item', {
    scrollTrigger: {
        trigger: '.fadein-line',
        toggleActions: 'restart none none none'
    },
    stagger: 0.8,
    opacity: 1,
    duration: 1
})