
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetStr = $("input#street").val();
    var cityStr = $("input#city").val();
    var address = streetStr + ", " + cityStr;
    $greeting.text("So you wanna live at " + address + " ?");
    var imageSrc = "https://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + address + "&key=AIzaSyAqfLIYtudP4SdFwUoTU3jaGe2yISNeoVo";
    $body.append('<img class="bgimg" src="' + imageSrc + '">');

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
