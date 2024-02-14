import fantasyBooks from '../json/fantasy-books.json'

// Data types.
type ArrayOfId = number[]
type ArrayOfString = string[]
type Book = { author: string, language: string, title: string }
type BookMap = Map<number, Book>

// Functions and procedures.
function findBookById(libray: BookMap, id: number): Book {
    let result: any = { author: '', language: '', title: '' }

    let arrayOfId: number[] = [...library.keys()]

    if (arrayOfId.includes(id)) {
        result = library.get(id)
    }

    return result
}

function findBookIdByAuthor(library: BookMap, author: string): ArrayOfId {
    let result: ArrayOfId = []

    for (const entry of library.entries()) {
        let bookId: number = entry[0]
        let bookInfo: Book=  entry[1]

        if (bookInfo.author === author) {
            result.push(bookId)
        }
    }

    return result
}

function findBookIdByTitle(library: BookMap, title: string): number {
    let result = -1

    for (const entry of library.entries()) {
        let bookId: number = entry[0]
        let bookInfo: Book=  entry[1]

        if (bookInfo.title === title) {
            result = bookId
        }
    }

    return result
}

// Utility functions and procedures.
function findElementInArrayOfString(array: ArrayOfString, element: string): number {
    let result: number = -1

    let n: number = array.length

    let index: number = 0
    while (index < n) {
        if (array[index] === element) {
            result = index
        }

        index = index + 1
    }

    return result
}

function print(p: any): void {
    console.log(p)
}

function sortArrayOfString(array: ArrayOfString): ArrayOfString {
    let copyArray: ArrayOfString = array.slice()

    for (let i: number = 0; i < copyArray.length; i++) {
        for (let j: number = i + 1; j < copyArray.length; j++) {
            if (copyArray[i].localeCompare(copyArray[j]) > 0) {
                let temp: string = copyArray[i]

                copyArray[i] = copyArray[j]
                copyArray[j] = temp
            }
        }
    }
    
    return copyArray
}

// Main body instructions.
let books: any =  Object.values(fantasyBooks.results)

let authors: ArrayOfString = []
let titles: ArrayOfString = []
let library: BookMap = new Map()
for(let i: number = 0; i < books.length; i++) {
    let element: any = books[i]

    let id: number = element.id
    let author: string = element.authors[0].name
    let language: string = element.languages[0]
    let title: string = element.title

    if (!authors.includes(author)) {
        authors.push(author)
    }

    if (!titles.includes(title)) {
        titles.push(title)
    }

    let book: Book = { author: author, language: language, title: title}    
    library.set(id, book)
}