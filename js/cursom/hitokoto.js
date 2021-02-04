!function (e) {
    $(document).ready(function () {
        fetch('https://v1.hitokoto.cn').then(response => response.json())
            .then(data => {
                //     var dom = document.querySelector('#div-hitokoto');
                //     Array.isArray(dom) ? dom[0].innerText = hitokoto : dom.innerHTML = "<div id=\"lc-hitokoto\" style=\"margin-left:10px;margin-right:10px; \">" + data.hitokoto + "</div>";
                $("#div-hitokoto").html("<div id=\"lc-hitokoto\" style=\"margin-left:10px;margin-right:10px; \">" + data.hitokoto + "</div>");
            })
        $("#div-hitokoto").mouseover(function () {
            $("#lc-hitokoto").css("color", "#c74f00");
            // $("#lc-hitokoto").css("border-bottom", "1px dashed #c74f00");
        })
        $("#div-hitokoto").mouseout(function () {
            $("#lc-hitokoto").css("color", "#666");
            //  $("#lc-hitokoto").css("border-bottom", "0px dashed #c74f00");
        })
    });
}(window);