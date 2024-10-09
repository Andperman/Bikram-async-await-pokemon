//DESARROLLA AQUI TUS SOLUCIONES
//Ejercicio 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.

async function getRandomPokemon() {

    let randomIndex = Math.floor(Math.random() * 20) + 1;
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`)
        if (!response.ok) {
            // Si el código de respuesta no está en el rango 200-299, se lanza un error
            throw new Error('Personaje no encontrado');
        }
//se procesa y response.json obtiene los datos de la respuesta
        let data = await response.json();
        return data
    }
    catch {
        (error) => console.log("hubo un error" + error)
    };
}
//getRandomPokemon().then((data) => console.log(pokemon))



//ejercicio 2-Ejercicio 2.- Declara una funcion getImageAndName que 
//retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})
async function getImageAndName() {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        if (!response.ok) {
            // Si el código de respuesta no está en el rango 200-299, se lanza un error
            throw new Error('Personaje no encontrado');
        }
        let data = await response.json();
        let name = data.name;
        //propiedad que devuelve la url de las imágenes
        let img = data.sprites.front_default;
        return { name, img }
    }
    catch {
        (error) => console.log("hubo un error" + error)
    };
}


//ejercicio 3- Ejercicio 3.- Declara una funcion printImageAndName que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:

//<section>
// <img src="url de imagen" alt="nombre del pokemon">
// <h1>Nombre del pokemon</h1>
//</section>

async function printImageAndName() {
    try {
        let data = await getImageAndName();

        return ` <section>
                         <img src="${data.img}" alt="Imagen de ${data.name}">
                         <h1>${data.name}</h1>
                </section>`
    } catch (error) {
        // Manejar errores de red o del servidor
        console.error('Hubo un problema con la solicitud:', error.message);
    }
}

//Ejercicio 4.- Declara una función getRandomDogImage que retorne
// la url de la imagen de un perro aleatorio

async function getRandomDogImage() {
    try {
        let response = await fetch(`https://dog.ceo/api/breeds/image/random`)
        if (!response.ok) {
            // Si el código de respuesta no está en el rango 200-299, se lanza un error
            throw new Error('Personaje no encontrado');
        }
        let data = await response.json();
        let url = data.message
        return url
    }


    catch {
        (error) => console.log("hubo un error" + error)
    };
}

//console.log(getRandomDog().then(result => console.log(result)))


//5.- Declara una función getRandomPokemonImage que retorne la url de la imagen de un pokemon aleatorio.

async function getRandomPokemonImage() {
    try {
        let response = getRandomPokemon();
        let data = await response.json();
        return data.sprites.front_default;
    }


    catch {
        (error) => console.log("hubo un error" + error)
    };

}

//Ejercicio 6.- Declara una función printPugVsPikachu que pinte la batalla 
//entre "Pug" y "Pikachu" (no se testea)

async function printPugVsPikachu() {
    try {
        const PikachuURL = `https://pokeapi.co/api/v2/pokemon/pikachu`
        const PugURL = `https://dog.ceo/api/breed/pug/images/random`

        if (!response.ok) {
            // Si el código de respuesta no está en el rango 200-299, se lanza un error
            throw new Error('Personaje no encontrado');
        }

       let response = await Promise.all([
            fetch(PikachuUR)
                .then((res) => res.json()),
                
            fetch(PugURL)
                .then((res) => res.json()),

        ])
//obtenemos imágenes con los datos que han recibido
        let pugImage = pugData.message; //obtenemos la imagen de perro
        let pikachuImage = pikachuData.sprites.front_default; //ob.img.pikachu


        //Para mostrarlo en el DOM , url de las imagenes
        let arrayUrls = [
            pugImage,  // Imagen del Pug
            "https://www.freepnglogos.com/uploads/vs-png/vs-fire-icon-png-logo-Image-10.png",  
            pikachuImage  // Imagen de Pikachu
        ];
//ponemos en el div #batalla las imágenes
        let divBatalla = document.querySelector("#batalla");

        //recorremos array de url y creamos elemento img para cada imagen 
        arrayUrls.forEach((url) => {
            let img = document.createElement("img");
            img.src = url; //es igual a la url de cada imagen
            divBatalla.appendChild(img);
        });

    } catch {
        (error) => console.log("hubo un error" + error)
    };
}

printPugVsPikachu();



//Ejercicio 7.- Declara una función getRandomCharacter que retorne un personaje aleatorio.


async function getRandomCharacter() {

    let randomIndex = Math.floor(Math.random() * 20) + 1;
    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/${randomIndex}`)
        if (!response.ok) {
            // Si el código de respuesta no está en el rango 200-299, se lanza un error
            throw new Error('Personaje no encontrado');
        }
//se procesa y response.json obtiene los datos de la respuesta
        let data = await response.json();
        return data
    }
    catch {
        (error) => console.log("hubo un error" + error)
    };
}


