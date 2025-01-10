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
//here i will be adding the js for the new note section
applyBtn.addEventListener('click',function(e){
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
  label.textContent=inputText;
  // const noteTextNode = document.createTextNode(inputText);
  todoNote.appendChild(checkBox);
  todoNote.appendChild(label);
  // todoNote.appendChild(noteTextNode);
  allNotes.appendChild(todoNote);
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



