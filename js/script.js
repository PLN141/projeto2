function mostrarDataHora(){
    const date = new Date()

    console.log(date.toLocaleString());

    document.getElementById('date').innerText = date.toLocaleString();
}

mostrarDataHora();

function mostrarVideo(){
    const video = document.getElementById('video');
}