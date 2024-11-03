// Custom Scripts
$(document).ready(function () {
  $("#play").click(function () {
    $(this).hide();
    $("#loading").show();

    setTimeout(function () {
      $("#loading").hide();
      $("#modal-number").css("display", "flex"); // Use css to set display: flex;

      $(".progress-bar-success").show(); //Show progress bar
      $(".step-1").addClass("step_active"); //Add active class
    }, 2000); // 2000 milliseconds = 2 seconds
  });

  // Modal Number Input Validation
  let phoneNumberInput = $(".modal-custom__input-number");
  let warningBlock = $(".modal-custom__warning");

  phoneNumberInput.on("input", function () {
    this.value = this.value.substring(0, 10);
  });

  $(".modal-custom__next").click(function () {
    let phoneNumber = phoneNumberInput.val();
    warningBlock.hide(); // Hide any previous warnings

    if (phoneNumber.startsWith("90") && phoneNumber.length >= 7) {
      $("#modal-number").hide();
      $("#modal-sms").css("display", "flex");
      $(".progress-bar-success").css("width", "60%"); //Change width
      $(".step-2").addClass("step_active"); //Add active class
    } else {
      warningBlock.text(
        "Please enter a valid Turkish phone number (starting with 90)."
      );
      warningBlock.show();
    }
  });

  // Modal SMS Input Validation
  let smsInput = $(".modal-custom--sms-input");
  let smsWarningBlock = $(".modal-custom__warning-sms");

  smsInput.on("input", function () {
    this.value = this.value.substring(0, 4);
  });

  $(".modal-custom__next-sms").click(function () {
    // Assuming you added a class to your SMS continue button
    let smsCode = smsInput.val();
    smsWarningBlock.hide();

    if (smsCode.length === 0) {
      smsWarningBlock.text("Please enter the SMS code.");
      smsWarningBlock.show();
    }
    // Add further SMS code validation here as needed...
  });
});

