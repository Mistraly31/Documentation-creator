// Asegurar que el script cargue después del HTML
document.addEventListener('DOMContentLoaded', () => {

    // Cambiar Tema
    document.getElementById('theme-toggle').onclick = () => {
        const doc = document.documentElement;
        doc.setAttribute('data-theme', doc.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    };

    // Vincular todos los inputs para sincronización automática
    const allInputs = document.querySelectorAll('input, textarea');
    allInputs.forEach(input => {
        input.addEventListener('input', () => {
            const outputId = input.id.replace('in-', 'out-');
            const outputEl = document.getElementById(outputId);
            if (outputEl) {
                if (input.type !== 'file') {
                    outputEl.innerText = input.value;
                }
            }
        });
    });

    // Carga de Fotos
    const photoInputs = ['in-t-img', 'in-p-img'];
    photoInputs.forEach(id => {
        const el = document.getElementById(id);
        el.onchange = (e) => {
            const reader = new FileReader();
            reader.onload = () => {
                const outId = id.replace('in-', 'out-');
                document.getElementById(outId).style.backgroundImage = `url(${reader.result})`;
            };
            reader.readAsDataURL(e.target.files[0]);
        };
    });
});

// Funciones Globales para los botones
function openSection(id) {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('hero-header').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function goHome() {
    location.reload(); 
}

function takeSnapshot(divId) {
    const target = document.getElementById(divId);
    html2canvas(target).then(canvas => {
        const link = document.createElement('a');
        link.download = `imagen_${divId}.png`;
        link.href = canvas.toDataURL();
        link.click();
    });
}
