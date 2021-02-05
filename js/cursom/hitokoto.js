!function (e) {
    $(document).ready(function () {
        fetch("https://v1.hitokoto.cn?encode=json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                $("#jinrishici-hitokoto").html("<div id=\"lc-hitokoto\" style=\"margin-left:10px;margin-right:10px; \">" + data.hitokoto + "</div>");
            })
        $("#jinrishici-hitokoto").mouseover(function () {
            $("#lc-hitokoto").css("color", "#c74f00");
        })
        $("#jinrishici-hitokoto").mouseout(function () {
            $("#lc-hitokoto").css("color", "#666");
        })
    });
}(window);
