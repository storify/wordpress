jQuery(document).ready(function(a){var b=window.dialogArguments||opener||parent||top;a("#moreLink a").click(function(){for(i=0;20>i;i++)a("#row"+i).show();a(this).fadeOut();return!1});a("#storifyLogout").click(function(){a("#logoutForm").submit();return!1});a(".insertLink a").click(function(){html="<p>"+a(this).parent().siblings(".permalink").text()+"</p>";b.tinyMCE.execCommand("mceInsertContent",!1,html);tinyMCEPopup.close();return!1});a(".story").click(function(){a(this).find(".insertLink a").click()});
storify.iframe&&b.setTimeout("jQuery('.mceTop span').html( storify.dialogTitle )",1);a(window).resize(function(){resizeStorifyIframe()});resizeStorifyIframe()});
function resizeStorifyIframe(){var height,footer;jQuery("iframe#storify")&&(height=jQuery("body").height()-120,footer=jQuery(window).height()-jQuery("#adminmenuwrap").height(),0>footer&&(height-=footer),jQuery("iframe#storify").height(height),1240>jQuery(window).width()?(jQuery("body").addClass("folded"),storifyFolded=!0):storifyFolded&&jQuery("body").removeClass("folded"))}var storifyFolded=!1;