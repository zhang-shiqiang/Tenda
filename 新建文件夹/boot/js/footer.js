//��С��    768��С��Ļʱ,չ���۵�
function my_footer() {
        n = $(window).width();
    return  n <= 768
}
$(function () {
    //768��С��Ļʱչ������
    $(".ftLeftLinks dl").click(function () {
        var self = $(this);
        if (my_footer()) {
            self.hasClass("active") ? self.removeClass("active") : self.addClass("active");
        }
    });
});
//ʹ��ajax����
    (function() {
        $.ajax({
            url: "footer.html",
            success: function(res){
                $(res).replaceAll("footer");
            }
        })
    })()


