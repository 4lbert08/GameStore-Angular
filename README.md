# 🎮 GameStore - Plataforma de Venta de Videojuegos (41.3)


## 📌 Integrantes del proyecto

- Juan Francisco Del Rosario Machin
- Juan Boissier García
- Alberto José Rodríguez Ruano


## 📝 Descripción del proyecto

GameStore es una plataforma de comercio electrónico especializada en la venta de videojuegos digitales. Los usuarios pueden explorar un catálogo de juegos, ver detalles y reseñas, agregar productos al carrito y realizar compras de manera rápida y segura.


## 📋 Requisitos del proyecto

### Requisitos Funcionales (RF)

1. Los usuarios deben poder iniciar, cerrar sesión, y registrarse.
2. Los usuarios deben poder pagar con el método de pago definido que prefieran.
3. Los usuarios deben poder agregar y eliminar productos del carrito.
4. Los usuarios deben poder ver su historial de compras.
5. Los usuarios deben poder recuperar su contraseña en caso de olvido.
6. Los usuarios deben poder dejar una reseña en los juegos disponibles.
7. El sistema debe permitir a los usuarios buscar juegos por filtros.
8. Los usuarios podrán ordenar las reseñas por fecha.
9. Los usuarios deben poder cambiar los datos de su perfil.
10. Los usuarios deben poder cambiar el idioma.

### Requisitos No Funcionales (RNF)

1. La web debe manejar fuentes del alfabeto en inglés.
2. Se deben aceptar múltiples métodos de pago (tarjeta de crédito, PayPal, Bizum).
3. Cada videojuego debe tener una descripción, imágenes, precio y calificación de usuarios.
4. Se dispondrán juegos similares para cada videojuego, facilitando así la búsqueda.
5. El sistema debe calcular automáticamente el total de la compra.
6. Debe de tener una temática atractiva visualmente usando una escala de colores de rojo, azul y morado.
7. Permitir una fácil interacción.


## 📂 Estructura del proyecto

<pre>
GameStore-Angular/
├── public/              # Recursos estáticos accesibles públicamente
│   ├── genos/           # Fuente Genos
│   ├── imgs/            # Imágenes del proyecto
│   ├── fonts.css        # Estilos de fuentes personalizadas
├── src/                 # Código fuente del proyecto
│   ├── app/             # Módulo principal de la aplicación Angular
│   │   ├── components/  # Componentes reutilizables de la aplicación
│   │   ├── models/      # Modelos de datos para la aplicación 
│   │   ├── pages/       # Páginas principales de la aplicación
│   │   ├── services/    # Servicios para lógica y comunicación 
│   │   ├── app.component.*  # Componente raíz de la aplicación (HTML, CSS, TS)
│   │   ├── app.config.ts    # Configuración de la aplicación
│   │   ├── app.routes.ts    # Rutas de la aplicación
│   ├── environments/    # Configuraciones de entorno (Firebase)
│   ├── index.html       # Archivo HTML principal de la aplicación
│   ├── main.ts          # Punto de entrada de la aplicación Angular
│   ├── styles.css       # Estilos globales del proyecto
</pre>

## 📄 Páginas (Templates) HTML del proyecto

Estas son las páginas de nuestra web. Estas carpetas contienen: name.html, name.css, name.ts, name.spec.ts.  

| Carpeta de la Página          | Mockup implementado | Notas                              |
| --------------- | ------------------- | ---------------------------------- |
| `landing-page`    | `home_mockup`       | Página de inicio                   |
| `advanced-search-page`    | `advancedSearch_mockup`       | Página de busqueda avanzada                  |
| `game-showcae-page`    | `gameShowcase_mockup`       | Página del título seleccionado                   |
| `view-more-section-page`    | `viewMoreSections_mockup`       | Página de ver más                   |
| `login-page`    | `login_mockup`       | Página de login de usuario                   |
| ``    | `forgotPassword_mockup`       | Página de contraseña olvidada                   |
| ``    | `OTPVerification_mockup`       | Página de verificación de código                   |
| `sign-up-page`    | `signUp_mockup`       | Página de signUp                   |
| ``    | `resetPassword_mockup`       | Página de cambio de contraseña                   |
| `user-settings-page`    | `userSettings_mockup`       | Página de configuración de usuario                   |
| ``    | `myReviews_mockup`       | Página de reseñas de usuario                   |
| ``    | `myOrders_mockup`       | Página de pedidos de usuario                   |
| ``    | `cart_mockup`       | Página de carrito                   |
| ``    | `checkout_mockup`       | Página de pago                   |
| `about-us-page`    | `aboutUs_mockup`       | Página de AboutUs                   |


## 🖼️ Componentes (Templates) utilizados

Estos son elementos html "componentes" que son cargados en las páginas de la web.

| Archivo Template     | Archivo en el que se carga      |
| -------------------- | ------------------------------- |
| `mainHeader.html`        | Todas las páginas menos en advancedSearch.html               |
| `secondHeader.html`        | advancedSearch.html               |
| `footer.html`        | Todas las páginas               |
| `gameCard.html`        | Páginas que usan gamesCardGallery.html y gamesCardRowGallery.html|
| `gameInShoppingCart.html`        | shoppingCart.html               |
| `gameSuggested.html`        | shoppingCart.html               |
| `memberCard.html`        | aboutUs.html               |
| `userMenuButton.html`        | userSetting.html, myOrders.html y myReviews.html               |
| `userReview.html`        | myReviews.html               |
| `gamesCardGallery.html`        | advancedSearch.html y viewMoreSections.html               |
| `gamesCardRowGallery.html`        | index.html y gameShowcase.html               |


## ➕ Otros aspectos

Hemos implementado Bootstrap en nuestro proyecto, siguiendo la recomendación del profesorado, lo que ha enriquecido significativamente nuestro trabajo. Bootstrap, un framework front-end de código abierto, nos ha permitido desarrollar una interfaz responsive y visualmente atractiva de manera eficiente. Gracias a su sistema de cuadrícula flexible, componentes predefinidos como botones, formularios y barras de navegación, y estilos CSS optimizados, hemos logrado una experiencia de usuario consistente y adaptable a diferentes dispositivos, acelerando el desarrollo y asegurando un diseño moderno y funcional que cumple con los estándares actuales de la web.

## 🔗 Enlaces

- **Figma**: [https://www.figma.com/design/cce85AsKYbHsWryGC4aJGa/MOCKUPS-PWM?m=auto&t=PlizMet0r5Rgm5UZ-6](#)
- **Trello**: [https://trello.com/b/qtJ1w6iJ/tablero-pwm](#)
- **PowerPoint**: [https://alumnosulpgc-my.sharepoint.com/:p:/g/personal/juan_del111_alu_ulpgc_es/EVa3iOpl8qNMmvmCZOqM1LEBggGdQMi6UYnNEfOOEYWcng?e=AJuOsa](#)


