let myLibrary = [
    {
        title: "book",
        author: "obama",
        pages: "123",
        finished: true
    },
    {
        title: "harry",
        author: "potter",
        pages: "456",
        finished: true
    }
]

function Book(title, author, pages, finished) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.finished = finished;
}

function addBookToLibrary() {
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    
    let errorField = document.querySelector("#errorField");

    let testButton = document.querySelector("#testButton");
    
    testButton.addEventListener("click", function(){
        let finished = document.querySelector("#finished");

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
            myLibrary.push(new Book(title.value, author.value, pages.value, true));

            
            let libraryDisplay = document.querySelector("#libraryDisplay");
        
            let bookElement = document.createElement("div");
            bookElement.classList.add("testDisplay");
            bookElement.setAttribute("bookId", myLibrary.length-1);
            
            let bookTitle = document.createElement("p");
            bookTitle.innerText = title.value;

            let bookAuthor = document.createElement("p");
            bookAuthor.innerText = author.value;

            let bookPages = document.createElement("p");
            bookPages.innerText = pages.value;

            let bookReadBtn = document.createElement("button");
            bookReadBtn.classList.add("bookRead");

            let deleteBookBtn = document.createElement("button");
            deleteBookBtn.classList.add("removeBtn");
            deleteBookBtn.setAttribute("onclick", "deleteBook();");
            
            libraryDisplay.appendChild(bookElement);
            bookElement.append(bookTitle, bookAuthor, bookPages, bookReadBtn, deleteBookBtn);
            }
            
        } 

    });
}

function deleteBook () {
    //this needs to be done without a for loop
    let testowanie = document.querySelectorAll(".removeBtn");
    
    for(let i=0; i<testowanie.length; i++){
        testowanie[i].addEventListener("click", function(){
            this.parentNode.remove();
        });
    }
}

addBookToLibrary();
deleteBook ();

let userInput = document.querySelector("#userInput");
let addBookBtn = document.querySelector("#addBook");

addBookBtn.addEventListener("click", function(){
    userInput.classList.toggle("hidden");
});


//1. Push user input as object into the 'myLibrary' array
//2. At the same time add the object to the display