# Proyecto-Angular
Angular es un framework de desarrollo web de código abierto creado y mantenido por Google. Está diseñado para construir aplicaciones web dinámicas y de gran escala con una arquitectura robusta y modular.

Características principales:

-Basado en TypeScript:

  - Angular utiliza TypeScript, un superconjunto de JavaScript que permite tipado estático y detección de errores en tiempo de compilación.
  - Esto hace que el código sea más seguro y fácil de mantener.

-Arquitectura basada en componentes:

  - Las aplicaciones se dividen en componentes reutilizables.
  - Cada componente tiene su HTML, CSS y TypeScript, lo que mejora la organización y modularidad.

-Data binding bidireccional (Two-way binding):

  - Los cambios en la interfaz de usuario se reflejan automáticamente en los datos y viceversa, lo que simplifica la sincronización entre la vista y el modelo.

-Inyección de dependencias:

  - Angular maneja automáticamente la creación y gestión de objetos y servicios, lo que facilita la escalabilidad y la prueba de aplicaciones.

-Routing integrado:

  - Permite gestionar múltiples vistas y rutas dentro de la aplicación sin recargar la página, lo que facilita la creación de Single Page Applications (SPA).

-CLI potente:

  - Angular CLI (Command Line Interface) permite generar componentes, servicios, módulos y realizar compilaciones rápidas, agilizando el desarrollo.

-Soporte para pruebas:

  - Angular está diseñado para ser testeable, con soporte para unit tests y end-to-end tests integrados.

# Pasos de instalación
-Actualizar el sistema.
La instalación de Angular en Linux implica preparar el sistema, instalar las herramientas necesarias y finalmente crear y ejecutar un proyecto Angular. Primero, es importante actualizar el sistema para asegurar que todos los paquetes estén al día, evitando conflictos durante la instalación. Esto se realiza mediante los comandos sudo apt update y sudo apt upgrade.

-Instalar Node.js y npm.
El siguiente paso es instalar Node.js y npm, ya que Angular CLI depende de estas herramientas. Se recomienda usar una versión reciente de Node.js (20 o superior) para garantizar compatibilidad con Angular. Para ello, se eliminan versiones antiguas, se añade el repositorio oficial de Node.js y se instala la versión más reciente. La instalación se verifica comprobando las versiones de Node.js y npm mediante node -v y npm -v.

-Instalar Angular CLI.
A continuación, se instala Angular CLI, la interfaz de línea de comandos oficial de Angular, que permite crear y gestionar proyectos de manera rápida. La instalación global se realiza con npm install -g @angular/cli, y se comprueba con ng version

-Crear un proyecto Angular.
Una vez instalada la CLI, se puede crear un nuevo proyecto Angular usando ng new nombre-proyecto, en este caso, 'nombre-proyecto' es cambiado por 'Proyecto-Entornos', que es el nombre de nuestro proyecto. Durante la creación, Angular solicita si se desea habilitar routing para varias páginas y el tipo de estilos (CSS, SCSS, etc.).

-Ejecutar la aplicación.
Finalmente, se entra en la carpeta del proyecto y se ejecuta la aplicación con ng serve --open, lo que inicia un servidor local y abre automáticamente el navegador para ver la aplicación en funcionamiento. En este caso, mediante 'http://localhost:4200' se puede entrar también, ya que por defecto, Angular se crea en el puerto 4200 del host.
