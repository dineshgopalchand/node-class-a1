var pageRender = require('./router');
console.log(pageRender);
/**
 * @description to get the details to randerd the template
 * @param urVal Accept url form req
 * @returns returns an array
 * @author Dinesh gopal chand  
 */
function checkPage(urVal) {
    // return pageRender.filter(item => item.path == urVal);
    filterData = [];
    // for (const item of pageRender.pageRender) {
    for (const item of pageRender) {
        if (item.path == urVal) {
            filterData.push(item);
        }
    }
    return filterData;
}
exports.checkPage = checkPage;
// function checkPage(urVal) {
//     // return pageRender.filter(item => item.path == urVal);
//     filterData = [];
//     for (const item of pageRender) {
//         if (item.path == urVal) {
//             filterData.push(item);
//         }
//     }
//     return filterData;
// }