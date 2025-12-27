const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Cambio de Tema
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
});

const config = {
    tarjeta: ["Nombre", "Edad", "Sexo", "Raza", "Número ID", "Residencia"],
    documento: ["Título", "Fecha", "Ubicación", "Autor", "Texto"],
    perfil: ["Nombre", "Edad", "Sexo", "Raza", "Número ID", "Residencia", "Trabajo", "Cargos", "Información Adicional"]
};

function showSection(type) {
    document.getElementById('home-menu').style.display = 'none';
    const formContainer = document.getElementById('form-container');
    const fieldsDiv = document.getElementById('fields');
    formContainer.style.display = 'block';
    fieldsDiv.innerHTML = ''; // Limpiar

    config[type].forEach(field => {
        const input = field === "Texto" || field === "Información Adicional" 
            ? document.createElement('textarea') 
            : document.createElement('input');
        input.placeholder = field;
        input.id = `input-${field.replace(/\s/g, '')}`;
        fieldsDiv.appendChild(input);
    });

    document.getElementById('create-btn').onclick = () => generateImage(type);
}

function goBack() {
    location.reload();
}
