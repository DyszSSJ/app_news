## APP NEWS
Esta aplicacion se trata de obtener datos de una API de Noticias, la cual en la primera screen se obtienen los articulos mas populares, en los articulos trae la imagen, titulo, descripcion y un boton el cual te lleva a ver mas detalle del mismo, en la screen de detalle se ve mas completo el articulo, el nombre completo y la decripcion completa.

## Características
- Se puede ver los arcticulos mas populares
- Le puede dar click a ver mas para ver mas a detalle cada articulo

## Comenzando
En el repositorio de GitHub podras clonar el proyecto para que lo puedas probar y ver mas a detalle la aplicacion

## Prerrequisitos
Se necesita tener instalado React-Native CLI, Node Js arriba de la version 18

## Instrucciones al clonar el proyecto
Primero abre la consola con CTRL + J, pon el comando: npm install para instalar todas las dependencias, para ejecutar el proyecto tendras que poner el comando: npm start, te aparecera con que lo ejecutaras, oprimiras la tecla: a, y se ejecutara la app

## Lo que se realizo en cada screen de la aplicacion 
# HomeScreen Component Documentation

El componente `HomeScreen` es la screnn principal para la visualización de la aplicación. Este componente se encarga de mandar a llamar la API y mostrar la lista de artículos de noticias.

El componente realiza lo siguiente:

- Inicializa un estado local para almacenar los datos de las noticias.
- Usa `axios` para obtener datos de la API de noticias.
- Renderiza una lista de componentes `Card` para cada artículo de la respuesta de la API.

### Estado y Interfaces

- `useState` se usa para inicializar el estado `data` con un objeto vacío.
- Se definen dos interfaces, `Article` y `NewsResponse`, para tipar la estructura de los datos recibidos de la API.

### Obtención de Datos

- `getData` es una función asíncrona que usa `axios` para hacer una solicitud GET a la API de noticias.
- Utiliza un efecto (`useEffect`) para llamar a `getData` justo después de que el componente se ejecute.

### Renderizado de Lista

- El componente `ScrollView` se utiliza para permitir el desplazamiento si la lista de artículos sobre pasa el tamaño de la pantalla.
- Se utiliza el método `map` para iterar sobre los artículos del estado `data` y renderizar un componente `Card` para cada uno.

### Card Component Documentation

El componente `Card` es un componente utilizado para mostrar la información de un artículo de noticias en un formato de card.

## Funcionalidad

El componente `Card` es responsable de:

- Mostrar la imagen del artículo, si está disponible.
- Presentar el título y la descripción del artículo.
- Proporcionar un botón que, al ser presionado, te lleva a la screen de detalles.

## Detalles de Implementación

### Props

El componente recibe las siguientes props:

- `item`: Un objeto que contiene los detalles del artículo, como el título, la descripción, la imagen y la URL.
- `navigation`: que viene de la navegación de la aplicación, se utiliza para que te lleve a la screen de detalle del articulo.

### Función `truncateText`

- `truncateText` es una función que recorta el texto a un límite agregado y pone puntos suspensivos al final del texto si sobre pasa ese límite.
- Se utiliza para asegurarse de que el título y la descripción no se sobre pasen y no se vea tan grande la card.

# DetailScreen Component Documentation

El componente `DetailScreen` es una pantalla dedicada a mostrar los detalles completos de un artículo de noticias al que le diste click ver mas.

## Funcionalidad

El `DetailScreen` muestra:

- Una imagen representativa del artículo.
- El título completo del artículo.
- La descripción completa del artículo.

## Props

El componente recibe las siguientes props:

- `route`: Un objeto que contiene los siguientes datos que le pasamos por props a esta screen: `urlToImage`, `title` y `description` del artículo.

## Renderizado

El componente renderiza:

- Un `Image` dentro de un `View` que actúa como `imageContainer` al cual le damos estilos.
- Dos componentes `Text` que muestran el título y la descripción del artículo.

### Desarrollado con
React Native - El framework usado
Axios - Cliente HTTP utilizado
Otros

### Autor
Axel David Tellez Alvarez
