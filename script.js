/*
Michael Kellems
CIT 215
Prof. Kane
Date
*/

const passes = [
    "IndyRides Free - Annual Pass",
    "Annaul Pass",
    "Pay as You Ride"
]

const fakeSelect = (target, options, open) => {
    if (!open){
        target.append(`<div id = "selectionmenu"></div>`)
        selectionmenu = $("#selectionmenu")
        options.forEach(option => {
            selectionmenu.append(`<button class = "optionbutton">${`${option}`}</button>`)
            $(".optionbutton")
        }); 
    }
    else if (open) {
        //
    }
};

function run()
{   
    const ICTlogo = "https://pacersbikeshare.org/wp-content/themes/ict_bikeshare_custom/images/ict-logo.svg";
    const PBSlogo = "https://pacersbikeshare.org/wp-content/themes/ict_bikeshare_custom/images/pacers-bikeshare-logo.svg";
    let bikesharelink = $("#bikesharelink img");
    let ICTlink = $("#ICTlink img");
    let opened = false

    bikesharelink.attr('src', PBSlogo);
    ICTlink.attr('src', ICTlogo);

    bikesharelink.on("mouseenter", function()
    {
        bikesharelink.css("width", "90px");
        bikesharelink.css("height", "90px");
        bikesharelink.css("margin-top", "2.5px");
        bikesharelink.css("margin-top", "5px");
    });
    bikesharelink.on("mouseleave", function()
    {
        bikesharelink.css("width", "80px");
        bikesharelink.css("height", "80px");
        bikesharelink.css("margin-top", "5px");
        bikesharelink.css("margin-top", "10px");
    });
    ICTlink.on("mouseenter", function()
    {
        ICTlink.css("width", "90px");
        ICTlink.css("height", "90px");
        ICTlink.css("margin-top", "2.5px");
        ICTlink.css("margin-top", "5px");
    });
    ICTlink.on("mouseleave", function()
    {
        ICTlink.css("width", "80px");
        ICTlink.css("height", "80px");
        ICTlink.css("margin-top", "5px");
        ICTlink.css("margin-top", "10px");
    });

    $("#passselector button").on("click", function() {
        fakeSelect($("#passselector"), passes, opened);
        opened = true
    });

    $("#passselector div button").on("click", function() {
        fakeSelect($("#passselector"), passes, opened);
        opened = true
    });

    return
}

$(document).ready(run());