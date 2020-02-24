const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const telephoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");

/**
 *
 * VALIDATORS
 *
 */

// Can only contain letters a-z in lowercase
function isValidUsername(username) {}

// Must contain a lowercase, uppercase letter and a number
function isValidPassword(password) {}

// The telephone number must be in the format of (555) 555-5555
function isValidTelephone(telephone) {}

// Must be a valid email address
function isValidEmail(email) {}

/**
 *
 * FORMATTING FUNCTIONS
 *
 */

function formatTelephone(text) {}

/**
 *
 * SET UP EVENTS
 *
 */

function showOrHideTip(show, element) {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

usernameInput.addEventListener("input", createListener(isValidUsername));

passwordInput.addEventListener("input", createListener(isValidPassword));

telephoneInput.addEventListener("input", createListener(isValidTelephone));

emailInput.addEventListener("input", createListener(isValidEmail));
