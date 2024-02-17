/*
 * Archivo: variables.js
 *
 * Este archivo está diseñado para ayudarte a entender el uso de 'var', 'let' y 'const' en JavaScript.
 * Se te proporcionarán una serie de ejemplos que deberás probar para comprender cómo funcionan estas declaraciones de variables.
 *
 * Para probar este archivo, debes escribir en el terminal el siguiente comando: node variables.js
 *
 * A continuación, encontrarás algunos ejemplos que puedes probar:
 *
 * Ejemplo 1: Uso de 'let'
 * ------------------------
 * Descomenta el siguiente código para probarlo:
 *
 * let autor = 'Gabriel García Márquez';
 * if (true) {
 *     let libro = 'Cien años de soledad';
 * }
 * console.log(libro);  // Esto dará un error porque 'libro' no está definido en este ámbito
 *
 * Ejemplo 2: Uso de 'var'
 * -----------------------
 * Descomenta el siguiente código para probarlo:
 *
 * let autor = 'Gabriel García Márquez';
 * if (true) {
 *     var libro = 'Cien años de soledad';
 * }
 * console.log(libro);  // Esto imprimirá 'Cien años de soledad'
 *
 * Ejemplo 3: Uso de 'const'
 * -------------------------
 * Descomenta el siguiente código para probarlo:
 *
 * const autor = 'Gabriel García Márquez';
 * autor = 'Julio Cortázar';  // Esto dará un error porque no puedes cambiar el valor de una const
 *
 * Recuerda que 'var' es una declaración de variable de alcance de función, mientras que 'let' y 'const' son declaraciones de variable de alcance de bloque.
 * Además, 'const' se utiliza para declarar una variable cuyo valor no se pretende que cambie después de la asignación inicial.
 *
 * ¡Buena suerte con tu aprendizaje!
 */
