
var currentImage = 1; // Variável para rastrear a imagem atual

function toggleImage() {
    var backgroundImage; // Variável para armazenar a imagem de fundo a ser definida

    // Se a imagem atual for a primeira, alternar para a segunda imagem
    if (currentImage === 1) {
        currentImage = 2;
        document.getElementById("image").src = "Captura_de_tela_2024-03-02_090437-removebg-preview.png"; // Substitua 'outra-imagem.png' pelo caminho da sua segunda imagem
        backgroundImage = "url('imagemdia.jpeg')"; // Substitua 'outra-imagem-fundo.jpg' pelo caminho da sua segunda imagem de fundo
    } else { // Caso contrário, alternar para a primeira imagem
        currentImage = 1;
        document.getElementById("image").src = "Captura_de_tela_2024-03-02_090018-removebg-preview.png"; // Substitua pelo caminho da primeira imagem
        backgroundImage = "url('imagens-e-gifs-do-ceu-estrelado-18.gif')"; // Substitua pelo caminho da primeira imagem de fundo
    }

    // Definir o fundo da página para a imagem de fundo correspondente
    document.body.style.backgroundImage = backgroundImage;
}

    
    

