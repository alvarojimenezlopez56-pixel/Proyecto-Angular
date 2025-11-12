
# Proyecto-Angular
Angular es un framework de desarrollo web creado por Google que permite construir aplicaciones web modernas, interactivas y dinámicas, especialmente aplicaciones de una sola página.
En pocas palabras: es una herramienta que te ayuda a crear sitios web complejos donde el contenido puede cambiar sin necesidad de recargar la página.

-Cómo funciona

Angular funciona dividiendo la aplicación en componentes reutilizables, cada uno con su propio HTML, CSS y TypeScript. Gracias al data binding bidireccional, los cambios en los datos se reflejan automáticamente en la interfaz de usuario y viceversa. Además, Angular utiliza inyección de dependencias para gestionar servicios y objetos de forma eficiente, y su routing integrado permite navegar entre vistas dentro de la misma aplicación sin recargar la página. Todo esto hace que el desarrollo sea más estructurado, modular y fácil de mantener.

-Para qué sirve y en qué casos se usa

Angular sirve para desarrollar aplicaciones web modernas y dinámicas, donde la información debe actualizarse sin recargar la página. Se utiliza especialmente en aplicaciones empresariales, paneles de control, sistemas de administración, tiendas online o cualquier proyecto que requiera una interfaz interactiva y modular. Facilita el desarrollo front-end estructurado, la colaboración en equipo y la escalabilidad de proyectos complejos, gracias a su CLI, soporte para pruebas y organización basada en componentes.

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

