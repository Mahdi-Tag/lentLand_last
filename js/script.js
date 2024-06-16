// Varibles 
let form = document.querySelector(".form");
let preview = document.querySelector(".preview");
let previewMain = document.querySelector(".preview-main");
let previewDiv = document.querySelector(".preview-div");
let comeBack = document.querySelector(".comeBack");
let formMain = document.querySelector(".form-main");
let previewHeader = document.querySelector(".preview-header");
let formHeader = document.querySelector(".form-header");
let dateP = document.querySelector(".date-p");
let typographyBtn = document.querySelector(".typography-btn");
let colorBtn = document.querySelector(".color-btn");
let fontSizeBtn = document.querySelector(".font-size-btn");
let fontSizeUl = document.querySelector(".font-size-ul");
let ul = document.querySelector(".ul");
let fontBtn = document.querySelector(".font-btn");
let fontUl = document.querySelector(".font-ul");
let colorUl = document.querySelector(".color-ul");
let colorChangeBtn = document.querySelector(".color-change-btn");
let colorBox = document.querySelector(".color-box");
let productInputs = document.querySelectorAll(".product-input");
let divMain = document.querySelector(".div-main");
let typographyDiv = document.querySelector(".typography-div");
let typegraphyImg = document.querySelector(".typegraphy-img");
let saveBtn = document.querySelector(".save-btn");
let colorPicker = document.getElementById("color-picker");
let fontSizeSelect = document.querySelector("#font-size-select");
let test = document.querySelector(".test");
let newDivContainer = document.querySelector(".newDivContainer");
let datee = document.querySelector(".datee");
let templateSelect = document.querySelector("#template-select");
let button = document.querySelector(".button");
let avilibleInput = document.querySelector(".avilible-input");
let valdata_ps = document.querySelectorAll(".valdata_p");
let radios = document.querySelectorAll('.radio');
let start_btn =document.querySelector(".start-btn");
let intro_page = document.querySelector('.intro-page');
let comeBack_intro_page = document.querySelector(".comeBack-intro-page");
let file_input_btn = document.querySelector(".file-input-btn");
let file_input = document.querySelector(".file-input");
let product_main = document.querySelector(".product-main");
let checkbox_div = document.querySelector('.checkbox-div');
let checkbox = document.querySelector('.checkbox');
let radio_container = document.querySelector(".radio-container");
let body =document.querySelector("body");
let selectedColor;
let check = false;

// giving none display to some divs
typographyDiv.style.display = "none";
previewDiv.style.display = "none";
form.style.display = 'none';

// Function None Menus
function noneAll() {
  colorUl.style.display = "none";
  fontSizeUl.style.display = "none";
  fontUl.style.display = "none";
}

// option of select
let selectFontBox = document.getElementById("font-size-select");
let selectedFontValue =
  selectFontBox.options[selectFontBox.selectedIndex].value;
function fontSize() {
  selectedFontValue = selectFontBox.options[selectFontBox.selectedIndex].value;
}

let selectFontFamilyBox = document.getElementById("font-family-select");
let selectedFontFamilyValue =
  selectFontFamilyBox.options[selectFontFamilyBox.selectedIndex].value;
function fontFamily() {
  selectedFontFamilyValue =
    selectFontFamilyBox.options[selectFontFamilyBox.selectedIndex].value;
}

// Select  Template Dropdown
let selectTemplateBox = document.getElementById("template-select");
let selectedTemplateValue =
  selectTemplateBox.options[selectTemplateBox.selectedIndex].value;
function template() {
  selectedTemplateValue =
    selectTemplateBox.options[selectTemplateBox.selectedIndex].value;
  document.querySelector(
    ".form"
  ).style.backgroundImage = `url(${selectedTemplateValue})`;
  document.querySelector( "#preview-main").style.backgroundImage = `url(${selectedTemplateValue})`;
 imageToBase64(selectedTemplateValue, 
  function (base64String) {
   }
   );
}     
// covert image to base64
function imageToBase64(url, callback) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64String = reader.result;
        callback(base64String);
      };
    });
}

function base_url(segment) {
  // get the segments
  pathArray = window.location.pathname.split("/");
  // find where the segment is located
  indexOfSegment = pathArray.indexOf(segment);
  // make base_url be the origin plus the path to the segment
  return (
    window.location.origin + pathArray.slice(0, indexOfSegment).join("/") + "/"
  );
}

// Change text color
function changeTextColor() {
  selectedColor = colorPicker.value;
}


let avilible_ps = document.querySelectorAll(".avilible_p");
function addNewLine(){ 
  
  var e = document.getElementById("products-select2");
  var valdata = e.options[e.selectedIndex].textContent;
  // Create Div
  let div = document.createElement("div");
  div.classList = "div";
  
  // Create P
  let avilible_p = document.createElement("p");
  avilible_p.classList = "avilible_p";    
  // Create ProductName
  let valdata_p = document.createElement("p");
  valdata_p.classList = "valdata_p";
  // Create Close Btn
  let close_btn = document.createElement("button");
  close_btn.classList = "close_btn";
  // Create Image
  let image = document.createElement("img");
  image.classList = 'image';
  image.src = "Images/img24.jpg";
  // Set Value of P in Div
  avilible_p.textContent = avilibleInput.value;
  valdata_p.textContent = valdata;
  let close_btn_div = document.createElement("div");
  close_btn_div.classList = "close_btn_div";
  
  var yas = `${avilibleInput.value}`;
  yas = yas.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) { return d.charCodeAt(0) - 1632; })
      .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) { return d.charCodeAt(0) - 1776; });

  if(!Number(yas)){    
  }else{
    const number = new Intl.NumberFormat('en-US', {style : "decimal" }).format(yas);    

    // convert en number to fa
    function toFarsiNumber(n) {
      const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];  
      avilible_p.textContent = n.toString().replace(/\d/g, x => farsiDigits[x]);
    }
    let x = toFarsiNumber(number);    
  }    

  close_btn_div.append(valdata_p,avilible_p);  
  if(check == true || body.classList == "theme"){
    let image = document.createElement("img");
    image.classList = 'image';
    image.src = "Images/img24.jpg";
    let imageCounter = document.createElement('div');
    imageCounter.classList = 'imageCounter';  
    imageCounter.append(image,valdata_p);
    close_btn_div.append(imageCounter,avilible_p);  
  } 
  div.append(close_btn_div,close_btn);
  let cross_img = document.createElement("img");
  cross_img.style.width = "20px";
  cross_img.style.height = "20px";
  cross_img.src = "Images/icons8-cross-26 (1).png";  
  close_btn.append(cross_img);
  product_main.append(div);
  
  avilibleInput.value = "";
  let btns = document.querySelectorAll('.close_btn');
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {// 
      allDiv = document.querySelectorAll('.div');
      if(allDiv.length < 9){
        button.style.opacity = "100%";
      }
      btns[i].parentElement.remove();     
    });
  }

  let aviPss = document.querySelectorAll(".avilible_p");
  let valPss = document.querySelectorAll(".valdata_p");
  avilible_ps = document.querySelectorAll(".avilible_p");
  avilible_ps.forEach((e) => {
    e.style.color = selectedColor;
    e.style.fontFamily = selectedFontFamilyValue;
    if(body.classList == "theme"){
      e.fontSize = "14px";
    }else{
      e.style.fontSize = selectedFontValue;
      console.log('it is 1 col');
    }
  });  

  // set font color fontSize for texts of divs
  valdata_ps = document.querySelectorAll(".valdata_p");
  valdata_ps.forEach((e) => {
    e.style.color = selectedColor;
    e.style.fontFamily = selectedFontFamilyValue;
    e.style.fontSize = selectedFontValue;
  });
  dateP.style.fontFamily = selectedFontFamilyValue;
  dateP.style.color = selectedColor;
  preview.textContent = "پیش نمایش";
}
// add new line in form
button.addEventListener("click", () => {  
  let allDiv = document.querySelectorAll('.div');
  if(allDiv.length == 9){
    button.removeEventListener('click',addNewLine);
    button.style.opacity = "50%";
    alert('نمی توانید بیشتر از 9 مورد اضافه کنید');
  }
  else{       
    button.style.opacity = "100%";    
    addNewLine();            
  }  
});

// make new line whit enter
document.addEventListener('keydown',(e)=>{
  if(e.key === "Enter"){
    let allDiv = document.querySelectorAll('.div');
    addNewLine();   
    // check count of divs 
    if(allDiv.length == 9){
      button.style.opacity = "50%";
      button.removeEventListener('click',addNewLine);          
      alert('نمی توانید بیشتر از 11 مورد اضافه کنید');
    } 
  }
});

// Preview Button Show Preview Main
preview.addEventListener("click", function () {
  // Set Date
  datee.textContent = date.toLocaleDateString("fa-IR", option);
  let aviPss = document.querySelectorAll(".avilible_p");
  let valPss = document.querySelectorAll(".valdata_p");
  previewDiv.style.display = "block";
  form.style.display = "none";  
  newDivContainer.innerHTML = "";
  // Make Line In Preview Main
  for (let i = 0; i <= valdata_ps.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList = "new-div";    
    // set new line image or texts
    if(check == true || body.classList == "theme"){
      newDiv.innerHTML = `<div class="new-div-child"><img class="image" src="Images/img24.jpg" alt=""> <span class="aviP">${valPss[i].innerHTML}</span></div> <span class="valP">${aviPss[i].textContent}</span>`;                      
    }
    else{
      newDiv.innerHTML = `<span class="aviP">${valPss[i].innerHTML}</span> <span class="valP">${aviPss[i].textContent}</span>`;        
    }

    let newDivs = document.querySelectorAll(".new-div");
    for(let i =0;i < newDivs.length;i++){
      newDivs[i].style.borderBottom = "1px solid #e5e4e4";
    }
    newDivContainer.append(newDiv);
    previewMain.append(newDivContainer);
    let aviPs = document.querySelectorAll(".aviP");
    let valPs = document.querySelectorAll(".valP");
    aviPs.forEach((e) => {
      e.style.color = selectedColor;
      e.style.fontFamily = selectedFontFamilyValue;
      e.style.fontSize = selectedFontValue;
    });
    valPs.forEach((e) => {      
      e.style.color = selectedColor;
      e.style.fontFamily = selectedFontFamilyValue;
      if(body.classList == "theme"){
        e.fontSize = "14px";
      }else{
        e.style.fontSize = selectedFontValue;        
      }
    });
    datee.style.color = selectedColor;
    datee.style.fontFamily = selectedFontFamilyValue;
  }
});

// Button For Come To First Page
comeBack.addEventListener("click", () => {
  previewDiv.style.display = "none";
  form.style.display = "block";
});

// Header Font,FontSize,Color Button
saveBtn.addEventListener("click", () => {  
  valdata_ps = document.querySelectorAll(".valdata_p"); 
  avilibleInput.style.color = selectedColor;
  valdata_ps.forEach((e) => {
    e.style.color = selectedColor;
    e.style.fontFamily = selectedFontFamilyValue;
    e.style.fontSize = selectedFontValue;    
  });
  avilible_ps = document.querySelectorAll(".avilible_p");
  avilible_ps.forEach((e) => {
    e.style.color = selectedColor;
    e.style.fontFamily = selectedFontFamilyValue;
    if(body.classList == "theme"){
      e.fontSize = "14px";
      // checkbox.      
    }else{
      e.style.fontSize = selectedFontValue;
      console.log('it is 1 col');
    }  
  });
  dateP.style.color = selectedColor;
  dateP.style.fontFamily = selectedFontFamilyValue;
  typographyDiv.style.display = "none";
  formMain.style.display = "flex";
  formMain.style.marginTop = "50px";
  divMain.style.marginTop = "5px";
  typegraphyImg.style.rotate = "360deg";
});

// Footer Upload Button Main Function (Done)
document.getElementById("upload-button").onclick = () =>
  document.getElementById("file-input").click();
document.getElementById("file-input").onchange = function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => (
      (document.querySelector(
        ".form"
      ).style.backgroundImage = `url(${e.target.result})`),
      (document.querySelector(
        ".preview-main"
      ).style.backgroundImage = `url(${e.target.result})`),
      console.log(e.target.result)
    );
    reader.readAsDataURL(file);
  }
};

// Download image (Done)
document.getElementById("export-btn").addEventListener("click", function () {
  const preview_elemet = document.querySelector(".preview-div");
  document.querySelector(".preview-footer").style.display = "none";
  aviPss = document.querySelectorAll(".aviP");
  newDivs = document.querySelectorAll('.new-div'); 
  for(let i= 0;i < newDivs.length;i++){
    newDivs[i].classList.add('new-divv');
  }
  if(check == false){
    for(let i= 0;i < aviPss.length;i++){
      aviPss[i].classList.add("add-class-aviP")
    }
  }else{
    for(let i= 0;i < aviPss.length;i++){
      aviPss[i].classList.add("add-class-aviP-image")
    }
  }
  // Convert Webp To jpeg
  html2canvas(preview_elemet, {
    useCORS: true,
    allowTaint: false,
  }).then((canvas) => {
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;    
    link.download = `Story-${date}.jpeg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    document.querySelector(".preview-footer").style.display = "flex";
    if(check == false){
      for(let i= 0;i < aviPss.length;i++){
        aviPss[i].classList.remove("add-class-aviP")
      }
    }else{
      for(let i= 0;i < aviPss.length;i++){
        aviPss[i].classList.remove("add-class-aviP-image")
      }
    }
  });
});

// Today date
const date = new Date();
const option = {
  year: "numeric",
  month: "long",
  weekday: "long",
  day: "numeric",
};
dateP.textContent = `${date.toLocaleDateString("fa-IR", option)}`;

// Typography button
typographyBtn.addEventListener("click", () => {
  if (typographyDiv.style.display == "none") {
    formMain.style.marginTop = "0px";
    divMain.style.marginTop = "-10px";
    typographyDiv.style.display = "flex";
    typegraphyImg.style.rotate = "180deg";
    saveBtn.style.width = "70px";
    if (document.body.clientWidth < 768) {
    }
    if (document.body.clientWidth > 1440) {
      typographyDiv.style.height = "70px";
    }
    if (document.body.clientWidth == 1920) {
    }
  } else {
    typographyDiv.style.display = "none";
    formMain.style.marginTop = "50px";
    divMain.style.marginTop = "5px";
    typegraphyImg.style.rotate = "360deg";
  }
});

// write avilible or not avilible in input
avilibleInput.value = "";
avilibleInput.addEventListener("keyup",(e)=>{  
 // alert(e.key);
  for(let i = 0; i < avilibleInput.value.length;i++){      
    if(e.key == 'm'){
      if(avilibleInput.value.length == 1){
        avilibleInput.value = "";                                                                                                           
        avilibleInput.value = "ناموجود";
      }     
    }
    else if(e.key == 'م'){
      if(avilibleInput.value.length == 1){
        avilibleInput.value = "";                                                                                                           
        avilibleInput.value = "موجود";
      }
    }
  }
});

// Intro Menu Codes
start_btn.addEventListener('click',()=>{  
  intro_page.style.display = 'none';
  form.style.display = 'flex';    
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', () => {
      boxShadowColor();
      radio_container.parentElement.boxShadow = "0px 0px 10px #0a847a";     
      if (i == 0){        
        formMain.classList.add("formMain-add"); 
        product_main.classList.add("product-main-add-class");           
      } 
      else{
        file_input_btn.style.display = 'none';
        }
    });
    
  }  
  if(body.classList == "theme"){
    console.log(check);
    check = false;
    console.log("check if true");
}
  product_main.innerHTML = '';
});

// function for intro page items
function boxShadowColor(){
  for(let i= 0;i < radios.length;i++){
    radio_container.parentElement.boxShadow = "0px 0px 10px #0a847a";
  }
}

let items = document.querySelectorAll('.item');
// function for selected item in intro page
function noShadow(){
  for(let i= 0;i < items.length;i++){
    items[i].style.boxShadow = "0px 0px 10px #b8ceca";
    items[i].style.transform = "scale(1)";
  }  
}

// check cols
for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', () => {    
    boxShadowColor();
    radio_container.parentElement.boxShadow = "0px 0px 10px #0a847a";
    if(i == 0){      
      checkbox_div.style.opacity = "100%";         
      let s = radios[i].parentElement;
      noShadow();
      s.parentElement.style.boxShadow = "0px 0px 10px #0a847a";
      s.parentElement.style.transform = "scale(1.02)";         
      document.querySelector('body').classList.remove("theme");  
    }
    if(i == 1){            
      product_main.classList.add("product-main-add-class");   
      checkbox_div.style.opacity = "0";      
      document.querySelector('body').classList.add("theme"); 
      console.log(document.querySelector('body').classList);
      let s = radios[i].parentElement;
      // avilible_p.style.fontSize = "16px";
      noShadow();
      s.parentElement.style.boxShadow = "0px 0px 10px #0a847a";
      s.parentElement.style.transform = "scale(1.02)";         
      }
  });
}

// come to form main with this btn
comeBack_intro_page.addEventListener('click',()=>{
  intro_page.style.display = 'flex';
  form.style.display = 'none';
});

// check checkBox
checkbox.addEventListener('change',()=>{
if(checkbox.checked){        
    check = true;
    console.log(check);   
}else{    
    check = false;
    console.log(check);    
  }
});

for(let i= 0;i < items.length;i++){
  items[i].addEventListener('click',()=>{
    radios[i].click();
  })
}

// check box event code
checkbox_div.addEventListener('click',()=>{
  checkbox.click();
})
checkbox.addEventListener("click",()=>{
  checkbox.click();  
})

