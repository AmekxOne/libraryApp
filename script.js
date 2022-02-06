let myLibrary = [];

function Book(title, author, pages, finished) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.finished = finished;
}



const libraryDisplay = document.querySelector("#libraryDisplay");

function addBookToLibrary() {
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    let finished = document.querySelector("#finished");

    let errorField = document.querySelector("#errorField");

    let submitButton = document.querySelector("#submitButton");

    submitButton.addEventListener("click", function(){
        

        //check if title is empty
        if(title.value === "" || title.value == null){
            errorField.textContent = "title is empty";
        } 
        //check if author is empty
        else if (author.value === "" || author.value == null){
            errorField.textContent = "author is empty";
        }
        //check if pages is empty
        else if(pages.value === "" || pages.value == null){
            errorField.textContent = "pages is empty";
        }
        
        //if nothing is empty take in user input
        else {

        //check if the book is already present in the array
        let result = 0;

        for(let i=0; i<myLibrary.length; i++){
            if(myLibrary[i].title == title.value && myLibrary[i].author == author.value){
                errorField.textContent = "book already exists in your library";
                result += 1;
                break;
            }
        }
        
        //if no, then push it to array
        if(result < 1){
            //reset error field text
            errorField.textContent = "";
            myLibrary.push(new Book(title.value, author.value, pages.value, finished.value));

            
        
            let bookElement = document.createElement("div");
            bookElement.classList.add("testDisplay");
            bookElement.setAttribute("bookId", myLibrary.length-1);
            
            let bookTitle = document.createElement("p");
            bookTitle.innerText = title.value;

            let bookAuthor = document.createElement("p");
            bookAuthor.innerText = author.value;

            let bookPages = document.createElement("p");
            bookPages.innerText = pages.value;

            let bookRead = document.createElement("p");
            if(finished.checked){
                bookRead.innerText = "Finished reading";
            } else {
                bookRead.innerText = "Still reading";
            }

            let bookReadBtn = document.createElement("button");
            bookReadBtn.classList.add("bookRead");

            let deleteBookBtn = document.createElement("button");
            deleteBookBtn.classList.add("removeBtn");
            deleteBookBtn.innerText = "Delete book";
            let index = myLibrary.findIndex(x => x.title === title.value);
            deleteBookBtn.setAttribute("bookId", index);
            //deleteBookBtn.setAttribute("onclick", "getIndexOfClickedBook()");

            libraryDisplay.appendChild(bookElement);
            bookElement.append(bookTitle, bookAuthor, bookPages, bookRead ,bookReadBtn, deleteBookBtn);
            
            }
        } 
        
    });

}

addBookToLibrary();




const userInput = document.querySelector("#userInput");
const addBookBtn = document.querySelector("#addBook");

const header = document.querySelector("#header");
const buttonLine = document.querySelector("#buttonLine");
const userInputBg = document.querySelector("#userInputBg");


addBookBtn.addEventListener("click", function(){
    userInputBg.classList.toggle("hidden");
});

//read/unread button
document.addEventListener("click", function(e){
    if(e.target && e.target.classList == "bookRead"){
        let titleOfBook = e.target.parentElement.firstChild.innerText;
        let index = myLibrary.findIndex(x => x.title === titleOfBook);
        //find the title of the book to be deleted
        let length = e.target.parentNode.childNodes.length;
        if(e.target.parentNode.childNodes[length-3].innerText == "Still reading"){
            e.target.parentNode.childNodes[length-3].innerText = "Finished reading";
            myLibrary[index].finished = true;
        } else {
            e.target.parentNode.childNodes[length-3].innerText = "Still reading";
            myLibrary[index].finished = false;
        }

        //find the index of the book with this title
       
        

    }
});

//remove button
document.addEventListener("click", function(e){
    if(e.target && e.target.classList == "removeBtn"){
        
        //find the title of the book to be deleted
        let titleOfBook = e.target.parentElement.firstChild.innerText;
        //find the index of the book with this title
        let index = myLibrary.findIndex(x => x.title === titleOfBook);

        //remove the book card
        e.target.parentNode.remove();
        //remove the book from the library array
        myLibrary.splice(index, 1);
    }
});

let closeAddBook = document.querySelector("#closeBtn");
closeAddBook.addEventListener("click", function(){
    userInputBg.classList.toggle("hidden");
});