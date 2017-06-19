(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //查询手机号表单处理
    $('#writePhoneNum').on('focus',function () {
        if($(this).val() == ''){
            $(this).context.placeholder = '';
        }
    });
    $('#writePhoneNum').on('blur',function () {
        if($(this).val() == ''){
            $(this).context.placeholder = '13XXXXXXXXX';
        }
    });
    //受邀好友名单列表隔行变色
    var $lis = $('.allPhoneNum').find('li');
    $lis.each(function (index,ele) {
        $lis[index].className = index%2 ? '' : 'bg';
    });

    //显示遮罩层
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层
    function hideMask(){
        $("#mask").hide();
    }
    $('#mask').click(function () {
        hideMask();
        $('.tc.success').fadeOut();
        $('.tc.fail').fadeOut();
     });
    /*弹窗分享按钮*/
    //成功弹窗分享按钮
    $('#succTcBtn').on('touchend',function () {
        window.location.href = '';
    });
    //失败弹窗分享按钮
    $('#failTcBtn').on('touchend',function () {
        hideMask();
        $('.tc.fail').fadeOut();
    });
    /*首页各按钮跳转链接*/
    //点击查询按钮
    $('#queryBtn').on('touchend',function () {
        if($('#writePhoneNum').val() != ''){
            if($('#writePhoneNum').val() == '13651312162'){
                $('.tc.success').fadeIn();
                showMask();
            }else{
                $('.tc.fail').fadeIn();
                showMask();
            }
        }else{
            alert('请输入您要查询的手机号码');
        }
    });
    //第一个确认办理按钮
    $('#doIt-1').on('touchend',function () {
        window.location.href = '';
    });
    //第二个确认办理按钮
    $('#doIt-2').on('touchend',function () {
        window.location.href = '';
    });

    //点击邀请按钮
    $('.inviteBtn').on('touchend',function () {
        window.location.href = '';
    });

});
