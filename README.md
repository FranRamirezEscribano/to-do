# ToDoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.4.

## Project explanation
Se han creado dentro de la carpeta shared todos los componentes relacionados a las tareas y su gestión.

El task.service está en la raíz del proyecto debido a problemas a la hora de importar módulos
y por agilizar el proceso se ha dejado ahí.

Dentro del servicio, se ha creado un array de tasks asociado a su interface, inicializado con unos valores por defecto para poder mostrar algunas tareas.

Además, en el mismo fichero podemos encontrar todos los métodos para crear, eliminar, actualizar y detectar cambios en el estado de las tareas.

Los componentes en los que se ha dividido el proyecto son:
- Contenedor de tareas (task-container).
- Las tareas como tal (task-item).
- Modal de creación de nueva tarea (add-task-modal).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
