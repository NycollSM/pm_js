//1. busca el  primer elemento que tenga un id, clase o selector para css y se modifica el css
//2. solo lo aplica AL PRIMER ELEMENTO , 
//3. retorna una propiedad de css al primer el elemento que contiene una clase o id 
document.querySelector("#qs").style.color = 'yellow';
console.log('#qs');

//queryselerctorAll crea un array (nodelist) con  los elementos de un ul y la clase o id que se le asigno 
//se puede llamar por la  clase o el selector y de esa forma se retornan los elementos
//ejemplo 
document.querySelectorAll(a[nombre de la clase]);
//puede retornar la cantidad de TODOS elementos que tienen dicha clase EN COMUN
console.log(nombre de variable donde se guardans.length);

//2.1: Parentnode para seleccionar el elemento PADRE de otro elemento.
//ej:<div
// <p id=blah> chdd</p>
// </div>
//ej: document.getElementById(blah).parentnode esto seleccionaria al div  que encierra al elemento ps

//2.2 firxtchild selecciona al primer elemento HIJO  de un elemento
//ej: <div id="content">
// <p> hola </p>
// <p> mundo </p>
// </div>
// seleccionara al primer <P> (solo en internet explorer)

//2.3 nextsibling se obtiene el siguiente hermano del elemento

//2.4 , pero se refiere el último de los hijos de un elemento. Se aplican, por tanto, las mismas indicaciones anteriores.

//previousSibling
//previousSibling funciona igual que nextSibling, pero selecciona el hermano anterior de un elemento.
//Igual para sus limitaciones.//