const applyBtn = document.querySelector(".btnB");
const cancelBtn=document.querySelector(".btnA");
const addBtn=document.querySelector(".circle");
const addNote=document.querySelector(".note");
const background=document.querySelector('.background');
addBtn.addEventListener('click',function(e){
  addNote.style.display="block";
  document.querySelector(".empty").style.display="none";
  document.querySelector(".img1").style.display="none";
  background.style.display="block";
  if (document.body.style.backgroundColor === 'black') {
    addNote.classList.add('noteinblack');
    document.querySelector('.inputNote').style.backgroundColor='black';
  }
  else{
    addNote.classList.remove('noteinblack');
    document.querySelector('.inputNote').style.backgroundColor='white';
  }

})
//here i will be adding the js for the new note section and array, 
const arr = [];
applyBtn.addEventListener('click',function(e){
  background.style.display="none";
  const inputTextField=document.querySelector(".inputNote");
  const inputText=inputTextField.value.trim();
  const allNotes=document.querySelector(".lists");
  if(inputText.length>0){
  addNote.style.display="none";
  const todoNote=document.createElement("li");
  const checkBox=document.createElement("input");
  checkBox.type='checkbox';
  const label=document.createElement('label');
  // const img1=document.createElement('img');
  // const img2=document.createElement('img');
  const clearImg=document.createElement('img');
  updateClearImg(clearImg);

    function add(){
      arr.push(inputText);
    }
  add();
  label.textContent=arr.map(function(text){
    return text;
  })
 
  clearImg.addEventListener('click',function(e){
    todoNote.remove();
    if(allNotes.childElementCount===0){ 
    document.querySelector(".empty").style.display="flex";
    document.querySelector(".img1").style.display="inline-block";}
  });
  function render(){
  if(arr[0]!==''){
    arr.shift();
    todoNote.appendChild(checkBox);
    todoNote.appendChild(label);
    todoNote.appendChild(clearImg);
    // todoNote.appendChild(noteTextNode);
    allNotes.appendChild(todoNote);
    todoNote.appendChild(checkBox);
  todoNote.appendChild(label);
  // todoNote.appendChild(noteTextNode);
  allNotes.appendChild(todoNote);
}
   
  }
 
  render();
  // const noteTextNode = document.createTextNode(inputText);
  checkBox.addEventListener('change', function() {
    if (checkBox.checked) { 
     label.style.textDecoration = 'line-through';
    } else { 
     label.style.textDecoration = 'none'; 
   }
  });
  inputTextField.value='';
  
}
});
// function to update the image color of the clear image!
function updateClearImg(clearImg){
  if (document.body.style.backgroundColor==='black') {
 clearImg.src='image/clear.png';}
else{
 clearImg.src='image/clear-black.png';
 }
}
const ul=document.querySelector('.lists');
cancelBtn.addEventListener('click', function(e){
  addNote.style.display="none";
  background.style.display="none";
  if(ul.childElementCount>0){
    document.querySelector(".empty").style.display="none";
    document.querySelector(".img1").style.display="none";
  }
  else{
    document.querySelector(".empty").style.display="flex";
    document.querySelector(".img1").style.display="inline-block";
  }
  // document.querySelector(".lists").style.display="none";
})

background.addEventListener('click',function(e){
   addNote.style.display="none";
   background.style.display="none";
   if(arr.length!==0){
    document.querySelector(".empty").style.display="none";
  document.querySelector(".img1").style.display="none";
  }
  else{
    document.querySelector(".empty").style.display="flex";
  document.querySelector(".img1").style.display="inline-block";
  }
})
const moon = document.querySelector(".btn.img")
moon.addEventListener('click',function(e){
  if (document.body.style.backgroundColor === 'black') {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.querySelector('.type input').style.color='#6C63FF';
    document.querySelector('.inputNote').style.color='#6C63FF';
    document.querySelector('.type input').style.backgroundColor='white';
    document.querySelector('.btn.img img').setAttribute('src', 'image/moon.png');
  }
    else{
       document.body.style.backgroundColor = 'black';
       document.body.style.color = 'white';
       document.querySelector('.inputNote').style.color='white';
       document.querySelector('.type input').style.color='white';
       document.querySelector('.type input').style.backgroundColor='black';
       document.querySelector('.btn.img img').setAttribute('src', 'image/sun.png');
      }
      const allClearImgs = document.querySelectorAll('.lists li img');
      allClearImgs.forEach(function(clearImg){
        updateClearImg(clearImg);
      });
  })

   
console.log(arr);