// انتظر حتى يتم تحميل المستند بالكامل
document.addEventListener("DOMContentLoaded", function () {
  // احصل على زر "التفاصيل"
  var detailsButton = document.querySelector(".btn.outline");

  // احصل على الـ modal وزر إغلاقه
  var modalOverlay = document.querySelector(".modal-overlay");
  var modalCloseButton = document.querySelector(".close-modal-btn");

  // اضف مستمع الحدث للزر "التفاصيل"
  detailsButton.addEventListener("click", function () {
    // قم بإظهار الـ modal عن طريق تغيير خاصية العرض إلى block
    modalOverlay.style.display = "block";
  });

  // اضف مستمع الحدث لزر الإغلاق
  modalCloseButton.addEventListener("click", function () {
    // قم بإخفاء الـ modal عن طريق تغيير خاصية العرض إلى none
    modalOverlay.style.display = "none";
  });
});
