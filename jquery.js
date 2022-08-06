$(document).ready(function()
{
     
        $(".gitHubImage").find("img").css("transition", "transform 500ms ease-in-out");

        $(".gitHubImage").hover(
            
            function()
            {
                $(this).find("img").css("transform", "scale(1.2)");
            },
            function()
            {
                $(this).find("img").css("transform", "scale(1)");
            }
        );
        
        $(".linkedInImage").find("img").css("transition", "transform 500ms ease-in-out");

        $(".linkedInImage").hover(
            
            function()
            {
                $(this).find("img").css("transform", "scale(1.2)");
            },
            function()
            {
                $(this).find("img").css("transform", "scale(1)");
            }
        );
        
        $(".instagramImage").find("img").css("transition", "transform 500ms ease-in-out");

        $(".instagramImage").hover(
            
            function()
            {
                $(this).find("img").css("transform", "scale(1.2)");
            },
            function()
            {
                $(this).find("img").css("transform", "scale(1)");
            }
        );

});