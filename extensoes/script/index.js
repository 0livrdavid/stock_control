$(function(){
    $("#includeContent_header").load("app/layout/header.html");
    $("#includeContent_script").load("app/layout/script.html");
    $("#includeContent_modal").load("app/layout/modal.html");
    $("#includeContent_end").load("app/layout/end.html");
});

function check_button_link(link) {
    switch (link) {
        case "link_home":
            $("#link_home").addClass("button_link_clicked");
            $("#link_table").removeClass("button_link_clicked");
            $("#link_product").removeClass("button_link_clicked");
            $("#link_about").removeClass("button_link_clicked");
            break;
        case "link_table":
            $("#link_home").removeClass("button_link_clicked");
            $("#link_table").addClass("button_link_clicked");
            $("#link_product").removeClass("button_link_clicked");
            $("#link_about").removeClass("button_link_clicked");
            break;
        case "link_product":
            $("#link_home").removeClass("button_link_clicked");
            $("#link_table").removeClass("button_link_clicked");
            $("#link_product").addClass("button_link_clicked");
            $("#link_about").removeClass("button_link_clicked");
            break;
        case "link_about":
            $("#link_home").removeClass("button_link_clicked");
            $("#link_table").removeClass("button_link_clicked");
            $("#link_product").removeClass("button_link_clicked");
            $("#link_about").addClass("button_link_clicked");
            break;
    }
}

function toggle_view_link(link, sublink=null) {
    switch (link) {
        case "link_home":
            $("#includeContent_start").load("app/start.html");
            break;
        case "link_table":
            $("#includeContent_start").load("app/link_menu/table.html");
            break;
        case "link_add":
            switch (sublink) {
                case "product":
                    $("#includeContent_start").load("app/link_menu/add/add_products.html");
                    break;
                case "user":
                    $("#includeContent_start").load("app/link_menu/add/add_users.html");
                    break;
            }
            break;
        case "link_about":
            $("#includeContent_start").load("app/link_menu/about.html");
            break;
    }
    if (sublink == null) {
        window.history.replaceState("","","?link="+link);
    } else {
        window.history.replaceState("","","?link="+link+"?sublink="+sublink);
    }
}


