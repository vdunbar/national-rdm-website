$(document).ready(function(){
    $(".menuButton").click(function(){
        var id = $(this).attr("id")
        $('.summaryLinks').hide();
        $('#institutionList').hide();
        $('.readMore').remove();
        $('.findResources').remove();
        $('#sm-' + id).show();
        $('.summaryContent').hide();
        $('#intro-' + id).show();
        if($(window).width() < 1025){
            $('#menuItems').animate({marginTop: '50px', height: '602px'});
            $('.menuButton').not(this).animate({height: '100px', width: '100px', fontSize: '1em', opacity: 0.3}).css({"background-color": '#273746', 'border': "#273746", 'color': '#fff'});
            $(this).animate({height: '200px', width: '200px', fontSize: '1em', opacity: 1}).css({"background-color": '#137F94', 'color': '#fff'});
        }
        if($(window).width() > 1024){
            $('#menuItems').animate({marginTop: '50px', height: '350px'});
            $('.menuButton').not(this).animate({height: '125px', width: '125px', fontSize: '1em', opacity: 0.3}).css({"background-color": '#273746', 'border': "#273746", 'color': '#fff'});
            $(this).animate({height: '350px', width: '350px', fontSize: '2em', opacity: 1}).css({"background-color": '#137F94', 'color': '#fff'});
        }
        $('#submenuItems').animate({marginTop: '2%'});
        $('.spacer, .arrow').animate({opacity: 0.5});
        $(window).scrollTop($("#submenuItems").offset().top);
        
    });
    $('.summaryLink').click(function(){
        var id = $(this).attr("id")
        // commented lines are for local testing
        var readMoreButton = '<button class = "readMore"><a href="./chapter-md-files/ch-' + id.slice(0, -13) + '.html">Read more...</a></button>'
        //var readMoreButton = '<button class = "readMore"><a href="https://rochlinn.github.io/rdm-test-site/chapter-md-files/ch-' + id.slice(0, -13) + '.html">Read more...</a></button>'
        var resourcesButton = '<button class = "findResources">Find resources at your institution...</button>'
        $('.readMore').remove();
        $('.findResources').remove();
        $('.summaryContent').hide();
        $('#institutionList').hide();
        $('#' + (id.slice(0, -4) + 'content')).show().load('./summary-md-files/sum-' + id.slice(0, -13) + '.html > ul').after('<div class = "more">' + readMoreButton + resourcesButton + '</div>');
        //$('#' + (id.slice(0, -4) + 'content')).show().load('https://rochlinn.github.io/rdm-test-site/summary-md-files/sum-' + id.slice(0, -13) + '.html > .markdown-body').after('<div id = "more">' + readMoreButton + resourcesButton + '</div>');
    });
    $('.summaryLink').click(function(){
        $('html , body').stop().animate({
            scrollTop: $('#main').offset().top
        }, 500);
        return false;
    });
    $(document).on('click', '.findResources', function(){
        $('#institutionList').show();
        $('html, body').scrollTop($("#institutionList").offset().top);
    });
});