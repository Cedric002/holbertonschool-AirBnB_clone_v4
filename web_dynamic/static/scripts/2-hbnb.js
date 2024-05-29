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
});