function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


Book.prototype.info = function (){
    let readOrNot = this.read === 1 ? ' readed.' : ' not read yet.';
    return this.title+" by "+this.author+", "+this.pages+" pages,"+ readOrNot;
}


export default function Hobbit(){
let theHobbit = new Book( 'The Hobbit', 'J.R.R Tolkien', 295, 0);
console.log(theHobbit.info());
return (
    <div>
    <h1>{theHobbit.info()}</h1>
    </div>
);
}

//theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

// Keep only even numbers
let evenNumbers = [1, 2, 5, 6].filter(item => item % 2 === 0); // => [2, 6]
console.log(evenNumbers);
