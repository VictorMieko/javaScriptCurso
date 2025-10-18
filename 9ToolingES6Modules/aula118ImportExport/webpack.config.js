// webpack deve ficar na raiz

// Node utiliza CommonJS como sistema de modulos (padrão do Node)
const path = require('path'); // Importa o path do webpack

//exporta o objeto para fora do namespace local (outros arquivos)
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'public', 'assets', 'js'), // na saida o path resolve a pasta de origem independente do SO até o caminho do public
        filename: 'bundle.js' // e cria um arquivo com esse nome
    },
    module: { // modulo para o babel
        rules: [{ // array com objetos de regras para js (é possivel adicionar outros)
            exclude: /node_modules/, // exclui a pasta para melhor performance
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map' // faz um mapeamento auxiliando a debuggar o bundle.js    
};
