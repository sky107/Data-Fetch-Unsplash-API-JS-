$(document).ready(function() {
    function SearchPhotos(query, id) {
        if ($(id).html() == "") {
            let clientId = "RsvKNkhL1R613AgR5Qhyolj9lhwAH6wsM6qTX9z0Sr4";
            let url = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&query=" + query;

            //make a reuquest to api
            fetch(url)
                .then(function(data) { //callback function
                    return data.json();
                })
                .then(function(data) {
                    console.log(data);

                    data.results.forEach(photo => {
                        let output = `
                        <img src="${photo.urls.regular}" height="200" width="200" style="padding:5px;">
                        `;
                        $(id).append(output);
                    });


                });

        }
    }
    window.onload = function() {
        SearchPhotos("trending", result_1);
    };
    document.getElementById('pills-new-tab').onclick = function() {
        SearchPhotos("new", result_2);
    }
    document.getElementById('pills-nature-tab').onclick = function() {
        SearchPhotos("nature", result_3);
    }

    document.getElementById('pills-animal-tab').onclick = function() {
        SearchPhotos("animal", result_4);
    }
    document.getElementById('pills-technology-tab').onclick = function() {
        SearchPhotos("technology", result_5);
    }
    document.getElementById('pills-travel-tab').onclick = function() {
        SearchPhotos("travel", result_6);
    }
    document.getElementById('pills-business-tab').onclick = function() {
        SearchPhotos("business", result_7);
    }
    document.getElementById('pills-people-tab').onclick = function() {
        SearchPhotos("people", result_8);
    }
    document.getElementById('pills-film-tab').onclick = function() {
        SearchPhotos("film", result_9);
    }
})