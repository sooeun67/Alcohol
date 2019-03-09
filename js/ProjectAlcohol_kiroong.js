function showSection(id) {
    $("nav li").removeClass("active")
    $("#" + id).parent().addClass("active")
    $("#section_container > div").css("display", "none")
    $("#" + id.slice(4)).css("display", "inline")
}

showSection("clk_intro")