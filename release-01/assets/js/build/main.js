$(document).ready(function(){function t(){o=Math.max(document.documentElement.clientHeight,window.innerHeight||0),s=parseInt((a.position().top+a.height()/2-o).toFixed())}var e=$(".hidden-content"),n=$(".read-more"),a=$(".contact-section"),i=$(".mail-button"),o=0,s=0;window.setTimeout(function(){$(".page").addClass("js-active")},200),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},600),!1}})}),$(n.find("a")).on("click",function(a){a.preventDefault(),e.hasClass("js-visible")||(e.addClass("js-visible"),n.remove(),t())}),t(),window.setInterval(function(){var t=$(window).scrollTop();t>20&&s>t?i.addClass("js-active"):i.hasClass("js-active")&&i.removeClass("js-active")},100)});