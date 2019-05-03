(function () {

    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/eclipse");
    editor.setFontSize(14);
    editor.getSession().setMode("ace/mode/json");
    editor.getSession().setTabSize(2);
    editor.setHighlightActiveLine(true);

})();