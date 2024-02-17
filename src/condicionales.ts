// Este codigo necesita ser modificado para probar como funcionan los condicionales
// Es necesario que realice lo siguiente:
// 1. Practica buscando los libros '1984' y 'Moby-Dick'
// 2. Modifique el algoritmo para buscar cualquier libro del siglo XX disponible
// 3. Modifique el algoritmo para buscar cualquieer libro disponible pero si detecta que no es del siglo XX imprima
//    'Descartando libro muy viejo'

// Declaración de una interfaz para los libros
interface Libro {
    titulo: string;
    autor: string;
    publicado: number;
    disponible: boolean;
}

// Declaración de una variable para almacenar los libros
let libros: Libro[] = [
    {titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', publicado: 1967, disponible: true},
    {titulo: '1984', autor: 'George Orwell', publicado: 1949, disponible: false},
    {titulo: 'Moby-Dick', autor: 'Herman Melville', publicado: 1851, disponible: true},
    {titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', publicado: 1605, disponible: true},
    {titulo: 'Crimen y castigo', autor: 'Fyodor Dostoevsky', publicado: 1866, disponible: false}
];

// Función para buscar libros por autor y verificar si están disponibles
function buscarLibrosPorAutor(autorABuscar: string) {
    let librosDelAutor = [];
    for (let libro of libros) {
        if (libro.autor === autorABuscar) {
            if (libro.disponible) {
                librosDelAutor.push(libro);
            } else {
                console.log(`El libro ${libro.titulo} no está disponible.`);
            }
        }
    }
    return librosDelAutor;
}

// Uso de la función buscarLibrosPorAutor
let librosDeGarciaMarquez = buscarLibrosPorAutor('Gabriel García Márquez');
console.log(librosDeGarciaMarquez);
