// 1.Targeting by ID / class
const el = document.getElementById('title');
el.textContent = 'Hello World';

// 2. innerHTML — replace inner HTML entirely
document.getElementById('container') &&
  (document.getElementById('container').innerHTML = '<p>New content</p>');

// 3. Changing styles and attributes
const btn = document.querySelector('.my-btn');
if (btn) {
  btn.style.backgroundColor = 'red';
  btn.setAttribute('disabled', true);
}

// 4. Adding / removing classes
const card = document.querySelector('.card');
if (card) {
  card.classList.add('active');
  card.classList.remove('hidden');
}

// 5. Creating and inserting new nodes
const li = document.createElement('li');
li.textContent = 'New item';
const ul = document.querySelector('ul');
if (ul) ul.appendChild(li);


const users = ['Alice', 'Bob', 'Orkhan'];

function renderList() {
  const ul = document.getElementById('user-list');
  ul.innerHTML = ''; // wipe everything first

  users.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });
}

// Initial render
renderList();

// Later, add a user and re-render
users.push('Diana');
renderList(); // ← destroys all existing <li>s and rebuilds from scratch

// React's Virtual DOM would diff the old and new lists, 
// find that only one <li> needs to be added, and insert just that one node