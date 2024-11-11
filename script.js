/*
Michael Kellems
CIT 215
Prof. Kane
Date
*/

function run()
{   
    const ICTlogo = "https://pacersbikeshare.org/wp-content/themes/ict_bikeshare_custom/images/ict-logo.svg";
    const PBSlogo = "https://pacersbikeshare.org/wp-content/themes/ict_bikeshare_custom/images/pacers-bikeshare-logo.svg";
    let bikesharelink = $("#bikesharelink img");
    let ICTlink = $("#ICTlink img")

    bikesharelink.attr('src', PBSlogo);
    ICTlink.attr('src', ICTlogo);

    bikesharelink.on("mouseenter", function()
    {
        bikesharelink.css("width", "90px")
        bikesharelink.css("height", "90px")
        bikesharelink.css("margin-top", "2.5px")
        bikesharelink.css("margin-top", "5px")
    });
    bikesharelink.on("mouseleave", function()
    {
        bikesharelink.css("width", "80px")
        bikesharelink.css("height", "80px")
        bikesharelink.css("margin-top", "5px")
        bikesharelink.css("margin-top", "10px")
    });
    ICTlink.on("mouseenter", function()
    {
        ICTlink.css("width", "90px")
        ICTlink.css("height", "90px")
        ICTlink.css("margin-top", "2.5px")
        ICTlink.css("margin-top", "5px")
    });
    ICTlink.on("mouseleave", function()
    {
        ICTlink.css("width", "80px")
        ICTlink.css("height", "80px")
        ICTlink.css("margin-top", "5px")
        ICTlink.css("margin-top", "10px")
    });

    return
}

$(document).ready(run());