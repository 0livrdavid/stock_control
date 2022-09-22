var urlParams = new URLSearchParams(window.location.search);
var link = urlParams.get('link');
var sublink = urlParams.get('sublink');

if (link == undefined || link == null) {
    window.location.replace("?link=link_home");
    link = "link_home";
    sublink = null;
}

toggle_view_link(link,sublink);
check_button_link(link);

$( "#link_home" ).click(function() {
    link = "link_home";
    sublink = null;
    if (!($("#link_home").hasClass("button_link_clicked"))) {
        check_button_link(link);
        toggle_view_link(link);
    }
});

$( "#link_table" ).click(function() {
    link = "link_table";
    sublink = null;
    if (!($("#link_table").hasClass("button_link_clicked"))) {
        check_button_link(link);
        toggle_view_link(link);
    }
});

$( "#link_about" ).click(function() {
    link = "link_about";
    sublink = null;
    if (!($("#link_about").hasClass("button_link_clicked"))) {
        check_button_link(link);
        toggle_view_link(link);
    }
});

$( "#link_add_product" ).click(function() {
    link = "link_add";
    sublink = "product";
    if ($("#link_add").hasClass("button_link_clicked")) {
        toggle_view_link(link,sublink);
    } else if (!($("#link_add").hasClass("button_link_clicked"))) {
        check_button_link(link);
        toggle_view_link(link,sublink);
    }
});

$( "#link_add_user" ).click(function() {
    link = "link_add";
    sublink = "user";
    if ($("#link_add").hasClass("button_link_clicked")) {
        toggle_view_link(link,sublink);
    } else if (!($("#link_add").hasClass("button_link_clicked"))) {
        check_button_link(link);
        toggle_view_link(link,sublink);
    }
});


