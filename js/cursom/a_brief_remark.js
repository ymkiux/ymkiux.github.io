// //一言
// window.onload = function () {
//     fetch('https://v1.hitokoto.cn').then(response => response.json())
//         .then(data => {
//             var hitokoto = document.getElementById('lc-hitokoto');
//             hitokoto.innerText = data.hitokoto;
//         })
//         .catch(e => {
//             var hitokoto = document.getElementById('lc-hitokoto');
//             hitokoto.innerText = "在未知的未来将要发生的事，一定有它的意义";
//         })
// }

//
// window.onload = function () {
//     fetch('https://api.luotianyi.work/pixiv/', { mode: "no-cors" }).then(response => response.body())
//         .then(data => {
//             document.getElementById('lv_pivot').src = data.large_url;
//         })
//         .catch(e => {
//             // var hitokoto = document.getElementById('lc-hitokoto');
//             // hitokoto.innerText = "在未知的未来将要发生的事，一定有它的意义";
//         })
// }