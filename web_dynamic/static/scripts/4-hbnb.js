$(document).ready(function () {
  fetch("http://localhost:5001/api/v1/places_search/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
});