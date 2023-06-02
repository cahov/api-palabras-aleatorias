# Random Word API

Este proyecto implementa una API para obtener una palabra aleatoria de la categoria objeto o animal, contiene alrededor de 300 palabras y modificando el archivo words.json en la carpeta /src/files puedes agregar mas.

Puedes probarlo en [este deploy en Railway](https://api-palabras-aleatorias-production.up.railway.app/api/palabra) (no aseguro su disponibilidad indefinida)

## Instalación

1. Clona este repositorio en tu máquina local o sube a tu servidor.
2. Instala las dependencias ejecutando el comando `npm install`.
3. Ejecuta el servidor en modo produccion con `npm start`.
4. Para iniciar el servidor en modo desarrollo con reinicio automatico (usando nodemon) usa `npm run dev`.

## Uso

- **Obtener una palabra aleatoria:** `/api/palabra`

  - Método: GET
  - Descripción: Devuelve una palabra aleatoria de cualquier categoría.
  - Ejemplo de respuesta:
    ```json
    {
      "palabra": "ejemplo"
    }
    ```

- **Obtener una palabra aleatoria de la categoría "objetos":** `/api/palabra/objeto`

  - Método: GET
  - Descripción: Devuelve una palabra aleatoria de la categoría "objetos".
  - Ejemplo de respuesta:
    ```json
    {
      "palabra": "objeto"
    }
    ```

- **Obtener una palabra aleatoria de la categoría "objetos" con una longitud específica:** `/api/palabra/objeto/:len`

  - Método: GET
  - Descripción: Devuelve una palabra aleatoria de la categoría "objetos" que tenga la longitud especificada.
  - Parámetros:
    - `:len` (entero): Longitud deseada de la palabra.
  - Ejemplo de uso: `/api/palabra/objeto/4`
  - Ejemplo de respuesta:
    ```json
    {
      "palabra": "mesa"
    }
    ```

- **Obtener una palabra aleatoria de la categoría "animales":** `/api/palabra/animal`

  - Método: GET
  - Descripción: Devuelve una palabra aleatoria de la categoría "animales".
  - Ejemplo de respuesta:
    ```json
    {
      "palabra": "animal"
    }
    ```

- **Obtener una palabra aleatoria de la categoría "animales" con una longitud específica:** `/api/palabra/animal/:len`

  - Método: GET
  - Descripción: Devuelve una palabra aleatoria de la categoría "animales" que tenga la longitud especificada.
  - Parámetros:
    - `:len` (entero): Longitud deseada de la palabra.
  - Ejemplo de uso: `/api/palabra/animal/4`
  - Ejemplo de respuesta:
    ```json
    {
      "palabra": "gato"
    }
    ```

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama para tu contribución.
3. Realiza los cambios y mejoras en tu rama.
4. Envía un pull request para revisar tus cambios.

