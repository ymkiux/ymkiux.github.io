//一言
window.onload = function () {
    fetch('https://v1.hitokoto.cn').then(response => response.json())
        .then(data => {
            var dom = document.querySelector('#hitokoto'); Array.isArray(dom) ? dom[0].innerText = hitokoto : dom.innerText = data.hitokoto;
        })
        .catch(e => {
            var dom = document.querySelector('#hitokoto'); Array.isArray(dom) ? dom[0].innerText = hitokoto : dom.innerText = "在未知的未来将要发生的事，一定有它的意义";
        })
}