(function () {

    var indexNames;

    function topToContents() {
        $("#top").css("display", "none");
        $("#main-bg-overlay-top").css("display", "none");
        $("#main-bg-overlay").css("display", "block");
        $("#contents").css("display", "flex");
    }

    function showContentIndex(indexNames) {
        $("#content-index").css("display", "block");
    }

    function showContentSearch() {
        $("#content-search").css("display", "block");
    }

    function showContentAnalyze() {
        $("#content-analyze").css("display", "block");
    }

    function showContentSummary() {
        $("#content-index").css("display", "block");
    }

    $("#form-connect-submit").on('click', function () {
        console.log("Submit: form-connect");
        $.ajax({
            url: location.href + "connect",
            dataType: "json",
            type: "POST",
            data: {"port-num": "9200"},
        }).done(function (res) {
            indexNames = res.names;
            topToContents();
            showContentIndex(indexNames);
        }).fail(function (res) {
            console.log(res);
        });
    });

})();