
module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        query: {
          presets: [
            '@babel/preset-react',
            ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
          ],
          plugins: [
            ['import', {libraryName: 'antd', libraryDirectory: 'lib', style: true}]
          ]
        }
      },
    {
      use: ['style-loader', 'css-loader'],
      test: /\.css$/
      },
      {
        test: /\.less$/,
        use: [{
            loader: 'style-loader' // creates style nodes from JS strings
        },
        {
            loader: 'css-loader' // translates CSS into CommonJ
        },
        {
            loader: 'less-loader', // compiles Less to CSS
            options: {
                javascriptEnabled: true
            }
        }]
      }
    ]
  }
};