$(function(){function t(t){t=t||$(".gallery__tabs .tab").first();var a=$(t).index(),e=$(".gallery__photos_active");$(".gallery__tabs .tab_active").removeClass("tab_active"),$(t).addClass("tab_active"),$(e).removeClass("gallery__photos_active"),$('.gallery__photos[data-tab="'+a+'"]').addClass("gallery__photos_active")}$(".slider__slides").slick({prevArrow:$(".slider__arrow_prev"),nextArrow:$(".slider__arrow_next"),fade:!0,dots:!0,autoplay:3e3,pauseOnHover:!1}),t(),$(".gallery__tabs .tab").on("click",function(a){a.preventDefault(),t(this)}),$(".gallery__photos").each(function(t,a){var e,r=$(a).children().length;$(a).find(".photo").each(function(t,a){e=++t/r,$(a).css("transition-delay",e+"s")})}),function(){$(".day__date").each(function(t,a){$(a).attr("data-sticky-container",""),$(a).find(".day__date-wrap").attr("data-sticky-class","move")})}();new Sticky(".day__date-wrap");$(".link_tag").on("click",function(t){t.preventDefault();try{$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},500)}catch(t){location.href="/"}}),$(".members__tabs .tab").on("click",function(t){t.preventDefault(),$(".members__tabs .tab.tab_active").removeClass("tab_active"),$(this).addClass("tab_active");var a=$(this).data("group");$(".member").hide(),$(".member").each(function(t,e){var r=$(e).data("group");if(0===a&&$(e).finish().fadeIn(Number(t+"00")),r.length>1){r.length;if(r=r.split(","),!(r.indexOf(String(a))>=0))return;$(e).finish().fadeIn(Number(t+"00"))}else{if(r!==a)return;$(e).finish().fadeIn(Number(t+"00"))}})}),$(".members__tabs .tab").first().trigger("click")});