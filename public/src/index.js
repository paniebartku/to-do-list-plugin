/* eslint-disable */
import $ from "jquery";

function updateIcons() {
  const updateIcons = [...document.querySelectorAll(".updateBtn i")];
  updateIcons.forEach((item) => {
    console.log(item.parentElement.parentElement.parentElement);
    if (
      item.parentElement.parentElement.parentElement.className.includes("done")
    ) {
      item.classList.remove("fa-square-o");
      item.classList.add("fa-check-square-o");
    }
  });
}

//sort fnc
function sortItems() {
  const items = [...document.querySelectorAll(".single-task")];
  const ul = document.querySelector(".to-do-list-post-area ul");
  const newArray = items.sort((a, b) => {
    if (a.className.includes("done")) return 1;
    return 0;
  });
  console.log(newArray);
  for (let i = 0; i < newArray.length; i++) {
    ul.appendChild(newArray[i]);
  }
}

function getPosts() {
  $.ajax({
    type: "GET",
    url: MyAjax.ajaxurl,
    dataType: "html", // add data type
    data: { action: "get_ajax_posts" },
    success: function(response) {
      $(".to-do-list-post-area ul").html(response);
      updateIcons();
      sortItems();
    },
  });
}

(function($) {
  getPosts();

  $(document).on("click", ".removeBtn", function(e) {
    e.preventDefault();
    var id = $(this).data("id");
    var nonce = $(this).data("nonce");
    $.ajax({
      type: "post",
      url: MyAjax.ajaxurl,
      data: {
        action: "my_delete_post",
        nonce: nonce,
        id: id,
      },
      success: function(result) {
        if (result == "success") {
          getPosts();
        }
      },
    });
    return false;
  });

  $(document).on("click", ".updateBtn", function(e) {
    e.preventDefault();
    var id = $(this).data("id");
    var nonce = $(this).data("nonce-update");
    $.ajax({
      type: "post",
      url: MyAjax.ajaxurl,
      data: {
        action: "my_update_post",
        nonce: nonce,
        id: id,
      },
      success: function(result) {
        getPosts();
      },
    });
    return false;
  });

  document.addEventListener("DOMContentLoaded", function(e) {
    let taskForm = document.getElementById("task-form");
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let url = taskForm.dataset.url;
      let params = new URLSearchParams(new FormData(taskForm));

      taskForm.querySelector(".js-form-submission").classList.add("show");

      fetch(url, {
        method: "POST",
        body: params,
      })
        .then((res) => res.json())
        .then((response) => {
          getPosts();

          resetMessages();

          if (response === 0 || response.status === "error") {
            taskForm.querySelector(".js-form-error").classList.add("show");
            return;
          }
          taskForm.querySelector(".js-form-success").classList.add("show");
          taskForm.reset();
        });
    });
  });
  function resetMessages() {
    document
      .querySelectorAll(".field-msg")
      .forEach((item) => item.classList.remove("show"));
  }
})(jQuery);

// change icon

import "./scss/style.scss";
