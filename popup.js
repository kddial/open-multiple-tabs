
/* add event listeners to buttons */
document.getElementById('btn_open_tabs').addEventListener('click', call_btn_open_tabs);

/* Get url input */
function get_input_url() {
  var url = document.getElementById("input_url").value;

  if (url.length == 0) {
    /* Check if url exist */
    set_error("Please input url");
    return;

  } else if (url.substring(0, 4) != "http") {
    /* Check if url begins with 'http' */
    set_error("URL must begin with 'http'. <br> (i.e.'https://www.google.ca/')");
    return;

  }else {
    /* All checking pass. Remove error message */
    remove_error();
    return url;
  }
}

/* Get number of tabs */
function get_input_n_tabs() {
  var n_tabs = document.getElementById("input_n_tabs").value;

  if (!n_tabs) {
    // Check if url exist
    set_error("Please input a number");
    console.log("dafuq");
    return;

  } else if (n_tabs > 10) {
    // Check if url begins with 'http' 
    set_error("Please do not exceed 10 tabs");
    console.log("dafuq2");
    return;

  }else {
    // All checking pass. Remove error message
    remove_error();
    console.log("dafuq guuci");
    return n_tabs;
  }
}

/* Open multiple tabs */
function call_btn_open_tabs() {
  var i;
  var url;
  var n_tabs;

  // Exit when url error 
  url = get_input_url();
  if (!url) {
    return;
  }

  // Exit when n_tabs error
  n_tabs = get_input_n_tabs();
  if (!n_tabs) {
    return;
  }

  // open multiple tabs
  for (i = 0; i < n_tabs; i++) { 
    chrome.tabs.create({url: url});
  }
}

/* Set error message */
function set_error(msg) {
  document.getElementById("error_msg").innerHTML = msg;
}

/* Remove error message */
function remove_error() {
  document.getElementById("error_msg").innerHTML = "";
}

