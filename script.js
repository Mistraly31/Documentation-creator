// TEMA
document.getElementById('theme-toggle').onclick = () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
};

// NAVEGACIÓN
function showSection(id) {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('main-header').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function goBack() {
    location.reload(); // Recarga para resetear estados fácilmente
}

// ACTUALIZACIÓN EN TIEMPO REAL
function updateCard() {
    document.getElementById('vt-nombre').innerText = document.getElementById('t-nombre').value;
    document.getElementById('vt-edad').innerText = document.getElementById('t-edad').value;
    document.getElementById('vt-sexo').innerText = document.getElementById('t-sexo').value;
    document.getElementById('vt-raza').innerText = document.getElementById('t-raza').value;
    document.getElementById('vt-id').innerText = document.getElementById('t-id').value;
    document.getElementById('vt-residencia').innerText = document.getElementById('t-residencia').value;
}

function updateDoc() {
    document.getElementById('vd-titulo').innerText = document.getElementById('d-titulo').value;
    document.getElementById('vd-fecha').innerText = document.getElementById('d-fecha').value;
    document.getElementById('vd-ubicacion').innerText = document.getElementById('d-ubicacion').value;
    document.getElementById('vd-autor').innerText = document.getElementById('d-autor').value;
    document.getElementById('vd-texto').innerText = document.getElementById('d-texto').value;
}

function updateProfile() {
    document.getElementById('vp-nombre').innerText = document.getElementById('p-nombre').value;
    document.getElementById('vp-trabajo').innerText = document.getElementById('p-trabajo').value;
    document.getElementById('vp-edad').innerText = document.getElementById('p-edad').value;
    document.getElementById('vp-sexo').innerText = document.getElementById('p-sexo').value;
    document.getElementById('vp-raza').innerText = document.getElementById('p-raza').value;
    document.getElementById('vp-id').innerText = document.getElementById('p-id').value;
    document.getElementById('vp-residencia').innerText = document.getElementById('p-residencia').value;
    document.getElementById('vp-cargos').innerText = document.getElementById('p-cargos').value;
    document.getElementById('vp-extra').innerText = document.getElementById('p-extra').value;
}

// IMÁGENES
function handleImage(input, divId) {
    input.onchange = e => {
        const reader = new FileReader();
        reader.onload = () => {
            document.getElementById(divId).style.backgroundImage = `url(${reader.result})`;
        }
        reader.readAsDataURL(e.target.files[0]);
    };
}
handleImage(document.getElementById('t-img-input'), 't-photo-div');
handleImage(document.getElementById('p-img-input'), 'p-photo-div');

// DESCARGA
function download(id) {
    html2canvas(document.getElementById(id)).then(canvas => {
        const link = document.createElement('a');
        link.download = `${id}.png`;
        link.href = canvas.toDataURL();
        link.click();
    });
}
