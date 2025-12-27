// Gestión de Temas
document.getElementById('theme-toggle').onclick = () => {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
};

// Navegación
function showSection(id) {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('hero-header').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function goHome() {
    location.reload(); // Forma más limpia de volver al menú inicial
}

// Sincronización en tiempo real
function syncText(inputId, outputId) {
    const val = document.getElementById(inputId).value;
    document.getElementById(outputId).innerText = val;
}

// Carga de imágenes para Tarjeta y Perfil
function setupImageLoader(inputId, previewId) {
    document.getElementById(inputId).onchange = function(e) {
        const reader = new FileReader();
        reader.onload = function() {
            document.getElementById(previewId).style.backgroundImage = `url(${reader.result})`;
        }
        reader.readAsDataURL(e.target.files[0]);
    };
}

setupImageLoader('t-img-input', 't-photo-div');
setupImageLoader('p-img-input', 'p-photo-div');

// Descarga de Imagen
function downloadImg(divId) {
    const target = document.getElementById(divId);
    html2canvas(target, { scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = `sistema_${divId}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}
