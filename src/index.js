"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fantasy_books_json_1 = __importDefault(require("../json/fantasy-books.json"));
// Functions and procedures.
function findBookById(libray, id) {
    let result = { author: '', language: '', title: '' };
    let arrayOfId = [...library.keys()];
    if (arrayOfId.includes(id)) {
        result = library.get(id);
    }
    return result;
}
function findBookIdByAuthor(library, author) {
    let result = -1;
    for (const entry of library.entries()) {
        if (entry[1].author === author) {
            result = entry[0];
        }
    }
    return result;
}
function findBookIdByTitle(library, title) {
    let result = -1;
    for (const entry of library.entries()) {
        if (entry[1].title === title) {
            result = entry[0];
        }
    }
    return result;
}
function findBookIdByAuthorOrTitle(library, author, title) {
    let result = -1;
    let resultByAuthor = findBookIdByAuthor(library, author);
    let resultByTitle = findBookIdByTitle(library, title);
    if (resultByAuthor !== -1) {
        result = resultByAuthor;
    }
    else if (resultByTitle !== -1) {
        result = resultByTitle;
    }
    return result;
}
function findElementInArrayOfString(array, element) {
    let result = -1;
    let n = array.length;
    let index = 0;
    while (index < n) {
        if (array[index] === element) {
            result = index;
        }
        index = index + 1;
    }
    return result;
}
function print(p) {
    console.log(p);
}
function sortArrayOfString(array) {
    let copyArray = array.slice();
    for (let i = 0; i < copyArray.length; i++) {
        for (let j = i + 1; j < copyArray.length; j++) {
            if (copyArray[i].localeCompare(copyArray[j]) > 0) {
                let temp = copyArray[i];
                copyArray[i] = copyArray[j];
                copyArray[j] = temp;
            }
        }
    }
    return copyArray;
}
// Main body instructions.
let books = Object.values(fantasy_books_json_1.default.results);
let authors = [];
let titles = [];
let library = new Map();
for (let i = 0; i < books.length; i++) {
    let element = books[i];
    let id = element.id;
    let author = element.authors[0].name;
    let language = element.languages[0];
    let title = element.title;
    if (!authors.includes(author)) {
        authors.push(author);
    }
    if (!titles.includes(title)) {
        titles.push(title);
    }
    let book = { author: author, language: language, title: title };
    library.set(id, book);
}
authors.sort();
titles = sortArrayOfString(titles);
print(authors);
print(titles);
print(findBookById(library, 27805));
