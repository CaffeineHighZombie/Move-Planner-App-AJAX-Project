
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

    // NYT AJAX request
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "6da7fe30515944b89e93641b36e94180",
        'q': address,
        'sort': "newest"
    });

    $.getJSON(url, function(data) {
        var items = [];
        $.each(data.response.docs, function(key, val) {
            items.push('<li class="article"><a href="' + val.web_url + '">' + val.headline.main + '</a><p>' + val.snippet +'</p></li>');
        });
        $nytHeaderElem.text("New York Times Articles About " + address);
        $nytElem.append(items.join(""));
    }).error(function() {
        $nytHeaderElem.text("New York Times Articles Could Not Be Loaded");
    });
    

    return false;
};

$('#form-container').submit(loadData);
