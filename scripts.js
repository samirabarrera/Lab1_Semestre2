
/** ****************  LABORATORIO 1       **************
 * Empezaras ordenando las obras de arte de un museo y has decidido hacer
 * un inventario de algunos de los más famosos.
 * 
 * Has decidido declarar una serie de objetos que se corresponderán con 
 * las siguientes pinturas: 
 *  Mona Lisa (Leonardo da Vinci, 1503),
 *  La última cena (Leonardo da Vinci, 1495), 
 *  La noche estrellada (Vincent van Gogh, 1889), 
 *  El grito (Edvard Munch, 1893), 
 *  El Guernica (Pablo Picasso, 1937), 
 *  El beso (Gustav Klimt, 1907), 
 *  La joven de la perla (Johannes Vermeer, 1665), 
 *  El nacimiento de Venus (Sandro Botticelli, 1485), 
 *  Las meninas (Diego Velázquez, 1656), 
 *  La creación de Adán (Miguel Ángel, 1512).

    Mostrar todas las imágenes de la lista en la consola 
    (información completa: título, artista y fecha de creación).   
 */
// Declaración de los objetos de cada cuadro
let cuadros = [
    { title: "Mona Lisa", artist: "Leonardo da Vinci", date: 1503 },
    { title: "La última cena", artist: "Leonardo da Vinci", date: 1495 },
    { title: "La noche estrellada", artist: "Vincent van Gogh", date: 1889 },
    { title: "El grito", artist: "Edvard Munch", date: 1893 },
    { title: "El Guernica", artist: "Pablo Picasso", date: 1937 },
    { title: "El beso", artist: "Gustav Klimt", date: 1907 },
    { title: "La joven de la perla", artist: "Johannes Vermeer", date: 1665 },
    { title: "El nacimiento de Venus", artist: "Sandro Botticelli", date: 1485 },
    { title: "Las meninas", artist: "Diego Velázquez", date: 1656 },
    { title: "La creación de Adán", artist: "Miguel Ángel", date: 1512 }
];

for (let cuadro of cuadros) {
    console.log(`Título: ${cuadro.title}, Artista: ${cuadro.artist}, Año: ${cuadro.date}`);
}