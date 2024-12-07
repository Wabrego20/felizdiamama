function ver() {
    const loginElement = document.getElementById('change_password');
    document.getElementById('login').reset();
    document.getElementById('change_password').reset();
    if (loginElement.classList.contains('hidden')) {
        document.getElementById('change_password').classList.add('show');
        document.getElementById('change_password').classList.remove('hidden');
        document.getElementById('login').classList.remove('show');
        document.getElementById('login').classList.add('hidden');
    } else {
        document.getElementById('login').classList.add('show');
        document.getElementById('login').classList.remove('hidden');
        document.getElementById('change_password').classList.remove('show');
        document.getElementById('change_password').classList.add('hidden');
    }
}

// Función para generar un copo de nieve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * window.innerWidth * 0.95 + 'px';
    snowflake.style.animationDuration = Math.random() * 10 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.body.appendChild(snowflake);

    // Eliminar el copo de nieve después de que termine la animación
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(snowflake.style.animationDuration) * 950);
}

// Crear copos de nieve a intervalos regulares
setInterval(createSnowflake, 100);

