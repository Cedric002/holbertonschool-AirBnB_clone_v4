$(document).ready(function () {
  const nameAmenity = [];
  $("input:checkbox").click(function () {
      if ($(this).is(":checked")) {
      nameAmenity.push($(this).attr("data-name"));
      } else {
      const nameIndex = nameAmenity.indexOf($(this).attr("data-name"));
      nameAmenity.splice(nameIndex, 1);
      }
      $(".amenities h4").text(nameAmenity.join(", "));
  });

  fetch("http://localhost:5001/api/v1/status/").then((response) => {
      const apiStatus = document.getElementById("api_status");

      if (response.statusText === "OK") {
      apiStatus.classList.add("available");
      } else {
      apiStatus.classList.remove("available");
      }
  }).catch((error) => {
      console.log("An error occurred: " + error);
  });

  $.ajax({
    type: 'POST',
    url: 'http://localhost:5001/api/v1/places_search',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      $('SECTION.places').append(data.map(place => {
        return `<article>
                  <div class="title_box">
                    <h2>${place.name}</h2>
                    <div class="price_by_night">${place.price_by_night}</div>
                  </div>
                  <div class="information">
                    <div class="max_guest">${place.max_guest} Guests</div>
                    <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                    <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                  </div>
                  <div class="description">
                    ${place.description}
                  </div>
                </article>`
      }));
    }
  });
});