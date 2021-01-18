// function getImage(url) {
//    var image = document.getElementById('lc-pivot');
//    image.src = url;
// }
// getImage('https://api.luotianyi.work/pixiv/');

// function getPromise(url) {
//    return new Promise((resolve, reject) => {
//       const image = new Image(600, 200);
//       image.onload = () => {
//          resolve(image);
//       };
//       image.onerror = () => {
//          reject();
//       };
//       image.src = url;
//    })
// }
// function renderImage(image) {
//    document.getElementById('lc-pivot')=image;
//    console.log('成功渲染图片');
// }
// function errorHandler() {
//    console.log('获取图片失败');
// }
// function getImage(url) {
//    getPromise(url).then(
//       (image) => {
//          renderImage(image);
//       },
//       () => {
//          errorHandler();
//       });
//    console.log('我先行一步');
// }
// getImage('https://api.luotianyi.work/pixiv/');
