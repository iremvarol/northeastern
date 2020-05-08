"use strict";
! function ($) {
    $().ready(function () {
        $("[data-toggleDropdown]").on("click", function (e) {
            e.preventDefault();
            var dropdown = $(this).attr("data-toggleDropdown");
            $(this).toggleClass("active"), $('[data-dropdown="' + dropdown + '"]').toggleClass("open"), console.log("dropdown toggled")
        }), $("[data-toggleMenu]").on("click", function () {
            var menu = $(this).attr("data-toggleMenu");
            $("html,body").toggleClass("open"), $(this).toggleClass("active"), $('[data-menu="' + menu + '"]').toggleClass("open")
        }), $(".nav").on("click", function (event) {
            $(event.target).closest(".nav__container").length || ($("html,body,.nav").toggleClass("open"), $("[data-toggleMenu]").toggleClass("active"))
        }), $("body").on("click", function (event) {
            $(event.target).closest(".section-nav").length || $(".section-nav__wrapper").removeClass("open")
        }), $(document).on("click", function (event) {
            $(event.target).closest(".header-search").length || $(event.target).closest(".global__button--search").length || ($(".header-search").removeClass("open"), $(".global__button--search").removeClass("active"))
        }), $('[data-toggleDropdown="searchDropdown"]').on("click", function () {
            $("#dnn_dnnSEARCH_q").focus()
        }), $("#dnn_ContentPane").hasClass("DNNEmptyPane") && $("#dnn_RightPane").hasClass("DNNEmptyPane") && $(".page-top").hide(), $("#dnn_ThirdLeft").hasClass("DNNEmptyPane") && $("#dnn_ThirdMiddle").hasClass("DNNEmptyPane") && $("#dnn_ThirdRight").hasClass("DNNEmptyPane") && $(".page-thirds").hide(), $("#dnn_ActionBoxPane").hasClass("DNNEmptyPane") && $("#mainContent").addClass("no-action-box"), $(".skip-nav").click(function (event) {
            var skipTo = "#" + this.href.split("#")[1];
            $(skipTo).attr("tabindex", -1).on("blur focusout", function () {
                $(this).removeAttr("tabindex")
            }).focus()
        }), $(".scrollable-table").each(function () {
            function checkScrollable() {
                element.find("table").width() > element.width() ? element.addClass("has-scroll") : element.removeClass("has-scroll")
            }
            var element = $(this);
            checkScrollable(), $(window).on("resize", function () {
                checkScrollable()
            })
        })
    })
}(jQuery);