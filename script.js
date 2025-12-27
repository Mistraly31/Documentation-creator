// Cambio de Tema
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
});

// Navegación simple
function showSection(id) {
    document.getElementById('main-menu').classList.add('hidden');
    document.querySelectorAll('.form-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function goBack() {
    document.getElementById('main-menu').classList.remove('hidden');
    document.querySelectorAll('.form-section').forEach(s => s.classList.add('hidden'));
}

// Función para generar y descargar la imagen
function generateImage(elementId) {
    // Aquí podrías agregar lógica para actualizar los campos del preview antes de capturar
    // Ejemplo para Tarjeta:
    if(elementId === 'tarjeta-preview') {
        const nombre = document.getElementById('t-nombre').value;
        const idNum = document.getElementById('t-id').value;
        document.getElementById('t-info').innerText = `${nombre} - ID: ${idNum}`;
    }

    const element = document.getElementById(elementId);
    
    html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.download = 'system-image.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Lógica para previsualizar imágenes cargadas (opcional pero recomendado)
document.querySelectorAll('input[type="file"]').forEach(input => {
    input.onchange = evt => {
        const [file] = input.files;
        if (file) {
            const previewId = input.id.startsWith('t') ? 't-preview-img' : 'p-preview-img';
            const imgEl = document.getElementById(previewId);
            imgEl.src = URL.createObjectURL(file);
            imgEl.style.display = 'block';
        }
    }
});
