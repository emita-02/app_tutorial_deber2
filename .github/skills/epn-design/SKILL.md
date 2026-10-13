---
  name: epn-design
  description: Úsala para modificar colores, estilos, imagenes de la aplicación, sustituyendo los colores, iconos e imagenes predeterminados de la aplicación, incluidos los iconos de navegación, el icono de la aplicación y la imagen del inicio.
---
## Consideraciones
- Antes de realizar cambios, inspecciona el proyecto y localiza los archivos de configuraciones, estilos, imagenes y componentes que ya existen. 
- Sustituye los valores predeterminados por los colores y recursos especificados, evitando duplicar archivos o modificar partes del código que no sean relevantes.
- Identifica las rutas y funciones de los recursos existentes antes de modificarlos.
- Conserva la estructura y las funcionalidades implementadas.
- No agregues colores ni imágenes adicionales sin necesidad.

## Roles (fondo, texto y contraste)
- Iconos de las pestañas Home y About en la parte inferior: #77ABD9
- Encabezado y pie de fondo: fondo #002A5C, texto e iconos #F2ECCE
- Fondo general de las pantallas Home y About: #002A5C
- Tarjetas, botones y otros componentes: utiliza los colores definidos en esta paleta y asegúrate de que se distingan del fondo.
- Mantén un contraste adecuado para que los textos y los iconos sean legibles.

## Imagenes
- Asigna icon-epn.png como icono de la aplicación, sustituyendo el icono predeterminado(icon, favicon, splash screen).
- Asigna BUHO_EPN.png como imagen de inicio (PlaceholderImage), sustituyendo la imagen predeterminada
- Verifica que ambos archivos existan y localiza sus rutas reales antes de modificar la configuración. 
- Conserva los formatos y las dimensiones compatibles con Expo. Si es necesario adaptar una imagen, no sobrescribas el original sin justificación.
- Actualiza las referencias de los recursos en la configuración correspondiente para que se utilicen al ejecutar la aplicación.

## Restricciones
- No elimines ni modifiques la lógica de selección de imágenes, incorporación y movimiento de stickers, guardado o uso compartido.
- No cambies dependencias ni la versión del SDK de Expo sin una justificación técnica.
- No modifiques archivos ajenos al rediseño visual.
- No afirmes que un recurso se sustituyó correctamente sin verificarlo.

## Verificacion
- Comprueba que los colores se apliquen a las pantallas y a los iconos de navegación.
- Verifica que Expo utilice las imágenes indicadas para el icono y la pantalla de inicio.
