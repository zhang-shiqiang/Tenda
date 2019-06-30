//在小于    768大小屏幕时,展开折叠
function my_footer() {
        n = $(window).width();
    return  n <= 768
}
$(function () {
    //768大小屏幕时展开导航
    $(".ftLeftLinks dl").click(function () {
        var self = $(this);
        if (my_footer()) {
            self.hasClass("active") ? self.removeClass("active") : self.addClass("active");
        }
    });
});
//使用ajax请求
    (function() {
        $.ajax({
            url: "footer.html",
            success: function(res){
                $(res).replaceAll("footer");
            }
        })
    })()


