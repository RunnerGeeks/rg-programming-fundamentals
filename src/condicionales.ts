// Este codigo necesita ser modificado para probar como funcionan los condicionales
// Es necesario que realice lo siguiente:
// 1. Practica buscando los libros '1984' y 'Moby-Dick'
// 2. Modifique el algoritmo para buscar cualquier libro del siglo XX disponible
// 3. Modifique el algoritmo para buscar cualquieer libro disponible pero si detecta que no es del siglo XX imprima
//    'Descartando libro muy viejo'

// Declaración de un tipo para los libros
type Book = {
    title: string;
    author: string;
    published: number;
    available: boolean;
}

// Declaración de una variable para almacenar los libros
let books: Book[] = [
    {title: 'Cien años de soledad', author: 'Gabriel García Márquez', published: 1967, available: true},
    {title: '1984', author: 'George Orwell', published: 1949, available: false},
    {title: 'Moby-Dick', author: 'Herman Melville', published: 1851, available: true},
    {title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', published: 1605, available: true},
    {title: 'Crimen y castigo', author: 'Fyodor Dostoevsky', published: 1866, available: false}
];

// Función para buscar libros por autor y verificar si están disponibles
function findBooksByAuthor(authorToSearch: string): Book[] {
    let authorBooks: Book[] = [];
    for (let book of books) {
        if (book.author === authorToSearch) {
            if (book.available) {
                authorBooks.push(book);
            } else {
                console.log(`El libro ${book.title} no está disponible.`);
            }
        }
    }
    return authorBooks;
}

// Uso de la función findBooksByAuthor
let booksOfGarciaMarquez = findBooksByAuthor('Gabriel García Márquez');
console.log(booksOfGarciaMarquez);
