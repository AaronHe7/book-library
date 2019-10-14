let library = [new Book('Harry Potter and the Philosopher\'s Stone', 'J. K. Rowling', 1997, false), 
new Book('The Giver', 'Lois Lowry', 1993, true)];
let table = document.querySelector('#library')

function Book(title, author, year, isRead) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.isRead = isRead;
}

function render() {
  let books = document.querySelectorAll('.library > .book-list')
  books.forEach(book => {
    book.remove();
  })

  library.forEach(book => {
    let template = document.getElementById('item-template');
    let book = template.cloneNode(true);
  })
}

function addBook() {
  let title = document.querySelector('input[name="title"]').value;
  let author = document.querySelector('input[name="author"]').value;
  let year = document.querySelector('input[name="year"]').value;
  library.push(new Book(title, author, year, false));
  setFormDisplay('none');
  clearForm();
  render();
}
render();

function setFormDisplay(style) {
  document.querySelector('.book-form').style.display = style;
}

function clearForm() {
  let inputs = document.querySelectorAll('.book-form > input');
  inputs.forEach(input => input.value = '')
}