var intBakiye = 0;
var bakiye  = document.getElementById("bakiye");
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const ekleB = document.getElementById("eklebutton");
const cikarB = document.getElementById("cikarbutton");
var miktar ;
var aciklama ;
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const data = JSON.parse(localStorage.getItem('items'));
var days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
var d = new Date();
var dateString = "  "+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+" "+days[d.getDay()]+" Saat "+d.getHours()+":"+d.getMinutes();

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  if(text.includes("+")){
    li.setAttribute("class", "yesil");
  }else
  li.setAttribute("class", "kirmizi");
  
  ul.appendChild(li);
}

ekleB.addEventListener('click', function () {
    let girdi = window.prompt("miktar ve olay girin aralarında bir boşluk bırakın ornek:3200 maas");
     miktar = girdi.split(" ");
     aciklama = miktar[1];
    
itemsArray.push("+"+miktar[0]+" "+dateString+" "+aciklama);
localStorage.setItem('items', JSON.stringify(itemsArray));
liMaker("+"+miktar[0]+" "+dateString+" "+aciklama);


intBakiye += Number(miktar[0]);

localStorage.bakiye = intBakiye;

bakiye.innerHTML = JSON.parse(localStorage.bakiye);
silen();
});

cikarB.addEventListener('click', function () {
    let girdi = window.prompt("miktar ve olay girin aralarında bir boşluk bırakın 3200 maas");
     miktar = girdi.split(" ");
    
     aciklama = miktar[1];
    
itemsArray.push("-"+miktar[0]+" "+dateString+" "+aciklama);
localStorage.setItem('items', JSON.stringify(itemsArray));
liMaker("-"+miktar[0]+" "+dateString+" "+aciklama);
    

    intBakiye -= Number(miktar[0]);

    localStorage.bakiye = intBakiye;

bakiye.innerHTML = JSON.parse(localStorage.bakiye);
silen();
    });
    if(data){
    data.forEach(item => {
      liMaker(item);
    });
    }

function sil(){
    localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
itemsArray = [];
location.reload();
}

function guncelle(){
    let deger = prompt("Şu an sahip olduğunuz para miktarını giriniz.");
    if(!deger == null || !deger == "" ){
        localStorage.bakiye = Number(deger);
    bakiye.innerHTML = JSON.parse(localStorage.bakiye);
    intBakiye = Number(JSON.parse(localStorage.bakiye));
    location.reload();
    }
    
}

function onyukle(){
	//if(!JSON.parse(localStorage.bakiye) == null){
    bakiye.innerHTML = JSON.parse(localStorage.bakiye);
    intBakiye = Number(JSON.parse(localStorage.bakiye));
  //}
}

//tıklandığında silinen li item eventi
silen()
function silen(){
var g = document.getElementById('ula');
for (var i = 0, len = g.children.length; i < len; i++)
{

    (function(index){
      
        g.children[i].onclick = function(){
              alert(index);
              intBakiye -= Number(itemsArray[index].split(" ")[0]);

              localStorage.bakiye = intBakiye;
                bakiye.innerHTML = JSON.parse(localStorage.bakiye);
                
        itemsArray.splice(index,1);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        g.removeChild(g.childNodes[index]);
        location.reload();
        }    
       
    })(i);

    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("help");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  
}
function pop(){
  modal.style.display = "block";
  
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}