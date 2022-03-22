$(document).ready(function () {
    // select the 2nd button
    $('#button-2');
    // select all anchor tags inside of li tags
    $('li a');
    // count the number of blue circles
    $('.blue.circle').length;

    // change href 
    $("a").attr("href", "http://www.nyan.cat")
    // replace blue
    $(".blue").removeClass("blue").addClass("red")

    // set highlight
    $("a").attr("class", "highlight")
    // replace circle
    $(".circle").removeClass("circle").addClass("diamond")
    // remove the shapes
    $("#purple-container .shape, #green-container .shape").remove()

    $("#reset").html()

    $("a").map((index, aTag) => {
        console.log($(aTag).html())
    })

    $("#reset").html("Lauch Doggos")


    const smallBlueDiamond = $("<div class='small blue diamond shape'></div>");

    $(".container").append(smallBlueDiamond);

    const newLink = $("<li><a href='http://www.nyan.cat'>Nyan Cat</a></li>");
    $("ul").prepend(newLink);



    // find out the first section
    // 1 grab all the sections and then use [0] to get the first one, but if you want to use .prepend then you have to do $() to convert it
    // 2 $("body :first-child")

    $("section").first()
    $("section").last()

    // this begins counting at 0 so it returns the third element from the collection
    $("section").eq(2)




    const newContainer = $("<div class='container'></div>");

    $("section").first().prepend(newContainer);

    $(newContainer).append("<div class='small black circle'></div>")

})