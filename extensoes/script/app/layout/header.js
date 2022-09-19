var urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('link');

if (param == undefined) {
    window.location.replace("?link=link_home");
    param = "link_home";
}

toggle_view_link(param);
check_button_link(param);

$( "#link_home" ).click(function() {
    param = "link_home";
    if (!($("#link_home").hasClass("button_link_clicked"))) {
        check_button_link(param);
        toggle_view_link(param);
    }
});

$( "#link_table" ).click(function() {
    param = "link_table";
    if (!($("#link_table").hasClass("button_link_clicked"))) {
        check_button_link(param);
        toggle_view_link(param);
    }
});

$( "#link_about" ).click(function() {
    param = "link_about";
    if (!($("#link_about").hasClass("button_link_clicked"))) {
        check_button_link(param);
        toggle_view_link(param);
    }
});

$( ".link_add_product" ).click(function() {
    param = "link_product";
    if (!($("#link_product").hasClass("button_link_clicked"))) {
        check_button_link(param);
        toggle_view_link(param);
    }
});




