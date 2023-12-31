// Verificar si hay una preferencia de modo almacenada
const darkModePreference = localStorage.getItem('darkMode');

// Aplicar el modo oscuro si está almacenado
if (darkModePreference === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Función para cambiar y guardar la preferencia
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Agregar un evento de clic a la imagen
const logo = document.getElementById('logo');
logo.addEventListener('click', toggleDarkMode);