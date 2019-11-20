// Saves options to chrome.storage
function saveOptions() {
  let selector1 = document.querySelector('input[name="pol"]:checked');
  let selector2 = document.querySelector('input[name="sex"]:checked');
  let ttext = document.getElementById("tarea");
  if (selector1) {
    localStorage["political"] = selector1.value;
    console.log("saved value:", localStorage["political"]);
  }
  if (selector2) {
    localStorage["sexual"] = selector2.value;
    console.log("saved value:", localStorage["sexual"]);
  }
  if (trimfield(ttext.value).length != 0) {
    if (!validate(trimfield(ttext.value))) {
      showStatus("Each line should be correct URL!");
      return;
    }
    console.log("saved value:", trimfield(ttext.value));
    localStorage["additional"] = trimfield(ttext.value);
  }
  if (selector1 || selector2 || trimfield(ttext.value).length != 0) {
    showStatus("Options saved.");
  }
}

// Update status to let user know options were saved.
function showStatus(str) {
  console.log("show status");
  let status = document.getElementById("status");
  status.textContent = str;
  setTimeout(function() {
    status.textContent = "";
  }, 1000);
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function loadOptions() {
  let political = localStorage["political"];
  let sexual = localStorage["sexual"];
  let additional = localStorage["additional"];
  if (political) {
    let radiobtn = document.getElementById(political);
    radiobtn.checked = true;
  }
  if (sexual) {
    let radiobtn = document.getElementById(sexual);
    radiobtn.checked = true;
  }
  if (additional) {
    let ttext = document.getElementById("tarea");
    console.log("retrived from storage:", additional);
    ttext.value = additional;
  }
}

function eraseOptions() {
  localStorage.removeItem("political");
  localStorage.removeItem("sexual");
  localStorage.removeItem(["additional"]);
  location.reload();
}
function trimfield(str) {
  let trimmed = str.replace(/\n+$/, "");
  trimmed = trimmed.replace(/^\s+|\s+$/g, "");
  return trimmed;
}

function validate(str) {
  let arr = str.split("\n");
  let valid = arr.every(isValidURL);
  return valid;
}

function isValidURL(string) {
  const res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
}

document.addEventListener("DOMContentLoaded", loadOptions);
document.getElementById("save").addEventListener("click", saveOptions);
document.getElementById("reset").addEventListener("click", eraseOptions);
