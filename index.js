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
  const img1=document.createElement('img');
  const img2=document.createElement('img');
    function add(){
      arr.push(inputText);
    }
  add();
  label.textContent=arr.map(function(text){
    return text;
  })
  function render(){
  if(arr[0]!==''){
    arr.shift();
    todoNote.appendChild(checkBox);
    todoNote.appendChild(label);
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
    if (this.checked) { 
     label.style.textDecoration = 'line-through';
    } else { 
     label.style.textDecoration = 'none'; 
   }
  });
  inputTextField.value='';
}
});
cancelBtn.addEventListener('click', function(e){
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
  document.body.style.backgroundColor="black";
  document.body.style.color='white';
})
console.log(arr);