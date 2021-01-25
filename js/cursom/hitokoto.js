//一言
window.onload = function () {
    fetch('https://v1.hitokoto.cn').then(response => response.json())
        .then(data => {
            var dom = document.querySelector('#lc-hitokoto'); Array.isArray(dom) ? dom[0].innerText = hitokoto : dom.innerText = data.hitokoto;
        })
        .catch(e => {
            var dom = document.querySelector('#lc-hitokoto'); Array.isArray(dom) ? dom[0].innerText = hitokoto : dom.innerText = "在未知的未来将要发生的事，一定有它的意义";
        })
}
$("#lc-hitokoto").mouseover(function () {
    $("#lc-hitokoto").css("color", "#c74f00");
    $("#lc-hitokoto").css("border-bottom", "1px dashed #c74f00");
})

$("#lc-hitokoto").mouseout(function () {
    $("#lc-hitokoto").css("color", "#666");
    $("#lc-hitokoto").css("border-bottom", "0px dashed #c74f00");
})
