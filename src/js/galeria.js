function abrirModal(tipo) {
    const modal = document.getElementById("modalGaleria");
    const conteudo = document.getElementById("conteudoGaleria");
    conteudo.innerHTML = "";

    if (tipo === "fotos") {
        conteudo.innerHTML = `
            <img src="../assets/imgs/foto1.jpg" alt="Foto 1">
            <img src="../assets/imgs/foto2.jpg" alt="Foto 2">
            <img src="../assets/imgs/foto3.jpg" alt="Foto 3">
            <img src="../assets/imgs/foto4.jpg" alt="Foto 4">
            <img src="../assets/imgs/foto5.jpg" alt="Foto 5">
        `;
    } else if (tipo === "videos") {
        conteudo.innerHTML = `
            <iframe src="https://www.youtube.com/embed/VID1" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/VID2" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/VID3" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/VID4" allowfullscreen></iframe>
        `;
    }

    modal.style.display = "block";
}

function fecharModal() {
    document.getElementById("modalGaleria").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modalGaleria");
    if (event.target === modal) {
        fecharModal();
    }
};
