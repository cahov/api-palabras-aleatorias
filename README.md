# Random Word API

Este proyecto implementa una API para generar palabras aleatorias de diferentes categorías.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias ejecutando el comando `npm install`.
3. Asegúrate de tener Node.js y npm instalados en tu sistema.

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
  - Ejemplo de uso: `/api/palabra/objeto/5`
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
  - Ejemplo de uso: `/api/palabra/animal/6`
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

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo [LICENSE](./LICENSE) para obtener más información.
