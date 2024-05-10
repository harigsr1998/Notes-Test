const addForm = document.querySelector('.add');
const notesList = document.querySelector('ul');

const masonrySpan = note => {
  console.log("Entered masonrySpan");
  console.log(note);
  
  if(note.clientHeight < note.scrollHeight){
    const div = Math.ceil(note.scrollHeight / note.clientHeight);
    console.log(div);
    // note.classList.add(`row-span-${div}`);
    note.style.gridRow = `span ${div}`;   // Adding class row-span-(higher than 4) doesn't work
  }
}

notesList.querySelectorAll('li').forEach((note, index) => {
  console.log(`Entered ${index}st spanning`);
  masonrySpan(note);
});

const generateTemplate = addNote => {

  const html = `
    <li class="m-2 rounded-lg p-4 bg-backgroundColorLI relative">
      <span>${addNote}</span>
      <svg class="flex-shrink-0 flex-grow-0 w-6 cursor-pointer absolute top-4 right-3 delete" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
    </li>
  `;
  notesList.innerHTML += html;

  masonrySpan(notesList.lastElementChild);
};

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const addNote = addForm.newNote.value.trim();

  if(addNote.length){
    generateTemplate(addNote);
    addForm.reset();
  }
});

notesList.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});