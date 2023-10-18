$(window).on("load", function () {
  if (window.location.href.split("?")[1] == "page=p") {
    $("#products").click();
  } else if (window.location.href.split("?")[1] == "page=c") {
    $("#control").click();
  }
});

$("#close-create-btn").on("click", function () {
  $("#create-product-holder").css("display", "none");
});
$("#create-btn").on("click", function () {
  $("#create-product-holder").css("display", "flex");
});

$("#submit-create-btn").on("click", function () {
  const title = $("#title-input").val();
  const description = $("#description-input").val();
  const price = $("#price-input").val();
  const originalPrice = $("#original-price-input").val();
  const category = $("#category-input").val();
  const image = $("#image-input").val();
  let sizes = [];
  if (document.getElementById("s-checkbox").checked) {
    sizes.push(1);
  } else {
    sizes.push(0);
  }
  if (document.getElementById("m-checkbox").checked) {
    sizes.push(1);
  } else {
    sizes.push(0);
  }
  if (document.getElementById("l-checkbox").checked) {
    sizes.push(1);
  } else {
    sizes.push(0);
  }
  if (document.getElementById("xl-checkbox").checked) {
    sizes.push(1);
  } else {
    sizes.push(0);
  }
  sizes = JSON.stringify(sizes);

  console.log(title, description, price, originalPrice, category, sizes, image);

  $.ajax({
    method: "POST",
    url: "includes/create-new-product.php",
    data: {
      title: title,
      description: description,
      price: price,
      originalPrice: originalPrice,
      category: category,
      sizes: sizes,
      image: image,
    },
    success: function (data) {
      console.log(data);
      window.location.href = "http://localhost/5StarMedia/admin.php?page=p";
    },
    error: function (xhr, status, error) {
      console.log(error); // Handle errors
    },
  });
});

let allProducts = {};
$(".edit-prod").on("click", function () {
  let data = $(this).html();
  $.ajax({
    method: "POST",
    url: "includes/GetProduct.php",
    data: { item: data },
    success: function (o) {
      let jsonData = JSON.parse(o)[0];
      allProducts = JSON.parse(o)[0];
      $("#title-edit-input").val(jsonData.Title);
      $("#description-edit-input").val(jsonData.Description);
      $("#price-edit-input").val(jsonData.Price);
      $("#original-price-edit-input").val(jsonData.DownFrom);
      $("#category-edit-input").val(jsonData.Category);
      $("#image-edit-input").val(jsonData.Image);
      console.log(JSON.parse(jsonData.Sizes));
      if (JSON.parse(jsonData.Sizes)[0] == 1) {
        document.getElementById("s-checkbox-edit").checked = true;
      } else {
        document.getElementById("s-checkbox-edit").checked = false;
      }
      if (JSON.parse(jsonData.Sizes)[1] == 1) {
        document.getElementById("m-checkbox-edit").checked = true;
      } else {
        document.getElementById("m-checkbox-edit").checked = false;
      }
      if (JSON.parse(jsonData.Sizes)[2] == 1) {
        document.getElementById("l-checkbox-edit").checked = true;
      } else {
        document.getElementById("l-checkbox-edit").checked = false;
      }
      if (JSON.parse(jsonData.Sizes)[3] == 1) {
        document.getElementById("xl-checkbox-edit").checked = true;
      } else {
        document.getElementById("xl-checkbox-edit").checked = false;
      }
    },
  });
  $("#edit-screen").css("display", "block");
  $("#edit-list").css("display", "none");
});

$("#close-edit-btn").on("click", function () {
  $("#edit-product-holder").css("display", "none");
  $("#edit-screen").css("display", "none");
  $("#edit-list").css("display", "block");
});
$("#edit-btn").on("click", function () {
  $("#edit-product-holder").css("display", "flex");
});

$("#submit-edit-btn").on("click", function () {
  const title = $("#title-edit-input").val();
  const description = $("#description-edit-input").val();
  const price = $("#price-edit-input").val();
  const originalPrice = $("#original-price-edit-input").val();
  const category = $("#category-edit-input").val();
  const image = $("#image-edit-input").val();
  let sizes = [];
  if (document.getElementById("s-checkbox-edit").checked) {
    sizes.push(1);
  } else {
    sizes.push(0);
  }
  if (document.getElementById("m-checkbox-edit").checked) {
    sizes.push(1);
  } else {
    sizes.push(0);
  }
  if (document.getElementById("l-checkbox-edit").checked) {
    sizes.push(1);
  } else {
    sizes.push(0);
  }
  if (document.getElementById("xl-checkbox-edit").checked) {
    sizes.push(1);
  } else {
    sizes.push(0);
  }

  console.log(
    title,
    description,
    category,
    price,
    originalPrice,
    category,
    image
  );

  $.ajax({
    method: "POST",
    url: "includes/update-product.php",
    data: {
      title: title,
      description: description,
      category: category,
      price: price,
      originalPrice: originalPrice,
      image: image,
      sizes: JSON.stringify(sizes),
    },
    success: function (data) {
      console.log(data);
      if (data == "success") {
        window.location.href = "http://localhost/5StarMedia/admin.php?page=p";
      }
    },
  });
});

$("#delete-btn").on("click", function () {
  $("#delete-product-holder").css("display", "flex");
  $("#are-you-sure").css("display", "none");
});
$("#close-delete-btn").on("click", function () {
  $("#delete-product-holder").css("display", "none");
});
$(".delete-prod").on("click", function () {
  $("#to-be-deleted").html($(this).html());
  $("#are-you-sure").css("display", "flex");
});
$("#delete-no").on("click", function () {
  $("#are-you-sure").css("display", "none");
});
$("#delete-yes").on("click", function () {
  $.ajax({
    method: "POST",
    url: "includes/delete-product.php",
    data: { title: $("#to-be-deleted").html() },
    success: function (data) {
      console.log(data);
      if (data == "success") {
        window.location.href = "http://localhost/5StarMedia/admin.php?page=p";
      }
    },
  });
});

$("#orders").on("click", function () {
  $("#orders-area").css("display", "block");
  $("#products-area").css("display", "none");
  $("#control-area").css("display", "none");
  $("#help-area").css("display", "none");
  $("#orders").css("color", "#555555");
  $("#products").css("color", "black");
  $("#control").css("color", "black");
  $("#help").css("color", "black");
});
$("#products").on("click", function () {
  $("#orders-area").css("display", "none");
  $("#products-area").css("display", "block");
  $("#control-area").css("display", "none");
  $("#help-area").css("display", "none");
  $("#orders").css("color", "black");
  $("#products").css("color", "#555555");
  $("#control").css("color", "black");
  $("#help").css("color", "black");
});
$("#control").on("click", function () {
  $("#orders-area").css("display", "none");
  $("#products-area").css("display", "none");
  $("#control-area").css("display", "block");
  $("#help-area").css("display", "none");
  $("#orders").css("color", "black");
  $("#products").css("color", "black");
  $("#control").css("color", "#555555");
  $("#help").css("color", "none");
});
$("#help").on("click", function () {
  $("#orders-area").css("display", "none");
  $("#products-area").css("display", "none");
  $("#control-area").css("display", "none");
  $("#help-area").css("display", "block");
  $("#orders").css("color", "black");
  $("#products").css("color", "black");
  $("#control").css("color", "black");
  $("#help").css("color", "#555555");
});

$(".featured-checkbox").change(function () {
  $("#featured-btn-holder").css("display", "block");

  let totalChecked = 0;
  const thisCat = $(this).next().html();
  console.log(thisCat);
  $(".featured-checkbox").each(function (i, obj) {
    if (obj.checked) totalChecked++;
  });
  while (totalChecked > 2) {
    $(".featured-checkbox").each(function (i, obj) {
      if (obj.checked && thisCat != obj.nextElementSibling.innerHTML) {
        console.log("found");
        console.log(obj);
        obj.checked = false;
        totalChecked--;
        return false;
      }
    });
  }
});

$("#featured-cancel-btn").on("click", function () {
  let og1 = $("#original-featured").attr("one");
  let og2 = $("#original-featured").attr("two");

  $(".featured-checkbox").each(function (i, obj) {
    console.log(obj.nextElementSibling.innerHTML == og1);
    if (
      obj.nextElementSibling.innerHTML == og1 ||
      obj.nextElementSibling.innerHTML == og2
    ) {
      obj.checked = true;
    } else {
      obj.checked = false;
    }
  });

  $("#featured-btn-holder").css("display", "none");
});

$("#featured-saved-btn").on("click", function () {
  let selected = [];
  $(".featured-checkbox").each(function (i, obj) {
    if (obj.checked) {
      selected.push(obj.nextElementSibling.innerHTML);
    }
  });

  $.ajax({
    method: "POST",
    url: "includes/update-featured-categories.php",
    data: { one: selected[0], two: selected[1] },
    success: function (data) {
      console.log(data);
      if (data == "successsuccess") {
        window.location.href = "http://localhost/5StarMedia/admin.php?page=c";
      }
    },
  });
});
