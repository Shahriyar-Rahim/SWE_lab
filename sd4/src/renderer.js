const noteInp = document.querySelector('#noteInp')
const addBtn = document.querySelector('#addBtn')
const notesList = document.querySelector('#noteList')

function addNote() {
    const text = noteInp.value.trim()
    if(text === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = text;

    const delteBtn = document.createElement('button');
    delteBtn.textContent = 'Delete'
    delteBtn.addEventListener('click', () => {
        li.remove()
    })

    li.appendChild(span);
    li.appendChild(delteBtn)
    notesList.appendChild(li)

    noteInp.value = ''
    noteInp.focus()
}

addBtn.addEventListener('click', addNote)

noteInp.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') addNote()
})