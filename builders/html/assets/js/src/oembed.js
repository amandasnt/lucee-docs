setTimeout(
    function(){
        $(function(){           
            $(".content-inner .body a").each(function(){
                var url = $(this).attr("href");
                if (url && url.indexOf("http") === 0) // avoid local content!
                    $(this).oembed();
            });       
        });
    }, 
    500
);    
