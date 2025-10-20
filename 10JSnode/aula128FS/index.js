const fs = require('fs').promises; // Importa o módulo File System

// Importa o módulo Path (Caminho), que fornece utilitários para trabalhar comcaminhos de arquivos
// e diretórios de uma forma que funciona em qualquer sistema operacional (Windows, Linux, macOS).
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname); // Se nenhum diretório for fornecido, usa o diretório atual do script
    const files = await fs.readdir(rootDir); // Lê todos os nomes de arquivos e pastas dentro do rootDir

    walk(files, rootDir); // é necessário o caminho absoluto
}
async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file); // Cria o caminho completo do arquivo/pasta
        const stats = await fs.stat(fileFullPath); // Obtém estatísticas do item (é um arquivo? é um diretório?)

        // não incluir a pasta .git
        if(/\.git/g.test(fileFullPath)) continue;

        // SE FOR UM DIRETÓRIO:
        if(stats.isDirectory()) {
            readdir(fileFullPath); // Chama a função readdir novamente para "entrar" neste diretório
            continue; // continua para a proxima iteração do loop
        }

        console.log(file, stats.isDirectory());
    }
}
readdir('D:/JavaScriptCurso/');

//fs.readdir(path.resolve(__dirname))
//    .then(files => console.log(files))
//    .catch(e => console.log(e));
