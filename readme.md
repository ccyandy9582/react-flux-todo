# what is Webpack?
Webpack is a tool that convert the react or other framework JavaScript file to the browser JavaScript. Frontend framework using specially JavaScript syntax like JSX, es6, es7, all of these JavaScript is not readable of every browser. That why we need Webpack to translate the JavaScript.
## Core concept
- Entry: which file you want to convert?
- Output: where the translated file place?
- Loaders: Webpack default handle JavaScript only. If you want to translate other file format, like `css, sass, less, html, pug`, etc. You need to config it.
- Plugins: to handle the job that except read file such as generate html file, css file.
- Mode: there are two mode, development and production. Development will not zip your code that readable. Production will zip the code, clear space and return, that human hard to read, it is lighter than development mode.
## Useful plugins/ tools
|plugin|function|
|------|--------|
|HtmlWebpackPlugin|generate a html file with the JavaScript file|
|MiniCssExtractPlugin| extract the css|
|babel | convert the latest JavaScript syntax to older syntax that make all browser readable|
|source-map | show the source code on the browser terminal |
|asset-module | allow webpack to translate more type of file |
------
**acknowledgement**:
[【前端速成】Webpack5 快速入門｜Tiktok工程師帶你入門前端｜布魯斯前端](https://www.youtube.com/watch?v=uP6KTupfyIw)