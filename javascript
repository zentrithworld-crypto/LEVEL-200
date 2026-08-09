// ✅ TU SERVIDOR REAL
const SERVIDOR_BASE = "https://zentrithworld-crypto.github.io";
const RUTA_ARCHIVOS = "/level200/archivos/"; // 📂 Creá esta carpeta en tu repositorio

// 📸 Función para tomar/previsualizar foto
async function tomarFoto() {
    // Creamos un input oculto para elegir archivo o sacar foto
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*,video/*";
    input.capture = "environment"; // usa la cámara trasera
    input.onchange = async e => {
        const archivo = e.target.files[0];
        if (!archivo) return;

        // ✅ 1. Mostramos al instante en la pantalla
        const urlVista = URL.createObjectURL(archivo);
        mostrarArchivoEnPantalla(urlVista, archivo.type);

        // ✅ 2. Guardamos localmente para que se vea siempre
        guardarLocalmente(urlVista, archivo.name, archivo.type);

        // ✅ 3. Descargamos automáticamente para que lo subas a GitHub
        descargarParaServidor(archivo);

        // ✅ 4. Marcamos los desafíos completados
        completarDesafio(2);
        completarDesafio(3);
    };
    input.click();
}

// 🖼️ Mostramos la imagen o video en la caja
function mostrarArchivoEnPantalla(url, tipo) {
    const caja = document.getElementById("cajaFoto");
    caja.innerHTML = ""; // limpiamos lo anterior

    if (tipo.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = url;
        img.style.maxWidth = "100%";
        img.style.borderRadius = "8px";
        img.style.marginBottom = "10px";
        caja.appendChild(img);
    } else if (tipo.startsWith("video/")) {
        const video = document.createElement("video");
        video.src = url;
        video.controls = true;
        video.style.maxWidth = "100%";
        video.style.borderRadius = "8px";
        video.style.marginBottom = "10px";
        caja.appendChild(video);
    }

    const aviso = document.createElement("p");
    aviso.style.color = "#80ffb0";
    aviso.textContent = "✅ Guardado! Subí el archivo descargado a tu repositorio GitHub en: " + SERVIDOR_BASE + RUTA_ARCHIVOS;
    caja.appendChild(aviso);
}

// 💾 Guardamos la referencia para que al recargar siga apareciendo
function guardarLocalmente(urlTemporal, nombreArchivo, tipo) {
    const guardados = JSON.parse(localStorage.getItem("archivosSubidos") || "[]");
    guardados.push({
        url: urlTemporal, // Esta es temporal, al recargar se pierde
        nombre: nombreArchivo,
        tipo: tipo,
        fecha: new Date().toISOString(),
        equipo: equipoSeleccionado,
        usuario: usuarioActual?.usuario
    });
    localStorage.setItem("archivosSubidos", JSON.stringify(guardados));
}

// ⬇️ Descargamos el archivo con nombre ordenado para subir a GitHub
function descargarParaServidor(archivo) {
    const nombreLimpio = `${equipoSeleccionado}_${Date.now()}_${archivo.name}`;
    const copia = new File([archivo], nombreLimpio, { type: archivo.type });
    const url = URL.createObjectURL(copia);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = nombreLimpio;
    a.click();
    
    URL.revokeObjectURL(url);
    
    alert(`📥 Archivo descargado: ${nombreLimpio}\n\n🔼 Subilo a tu repositorio:\n${SERVIDOR_BASE}\nEn la carpeta: level200/archivos/`);
}

// 📂 Al entrar, cargamos lo que ya está subido a GitHub
async function cargarArchivosDelServidor() {
    try {
        // Buscamos un índice o intentamos listar — GitHub Pages no permite listar archivos fácilmente
        // Por eso cuando subas un archivo, agregalo a un archivo lista.json en esa carpeta
        const respuesta = await fetch(`${SERVIDOR_BASE}${RUTA_ARCHIVOS}lista.json`);
        if (!respuesta.ok) return;
        
        const lista = await respuesta.json();
        lista.forEach(item => {
            console.log("📄 Archivo en servidor:", item.nombre, item.url);
            // Acá podés mostrar la galería con lo que ya está subido
        });
    } catch (e) {
        console.log("ℹ️ Todavía no hay archivos subidos en el servidor");
    }
}
