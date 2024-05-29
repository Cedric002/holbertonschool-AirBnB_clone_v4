(document).ready(function () {
  const amenityIds = [];

  ('input[type="checkbox"]').change(function () {
    const amenityId = $(this).data("id");
    const amenityName = $(this).data("name");

    if ($(this).is(":checked")) {
      amenityIds.push(amenityId);
    } else {
      const index = amenityIds.indexOf(amenityId);
      if (index !== -1) {
        amenityIds.splice(index, 1);
      }
    }

    const amenityNames = amenityIds.map((id) => {
      const checkbox = $(`input[data-id="${id}"]`);
      return checkbox.data("name");
    });

    const amenitiesText = amenityNames.join(", ");
    ("div.amenities h4").text(amenitiesText || "\u00A0");
  });
});
