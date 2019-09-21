/**
 * @description Router configuration
 * 
 */
const pageRender = [{
        path: '/',
        template: './template/index.html'
    },
    {
        path: '/about',
        template: './template/about.html'
    },
];
// const something = [1, 2, 3, 4, 4];
module.exports = pageRender;
// module.exports = { pageRender, something };
// module.exports = { "pageRender": pageRender, 'something': something };