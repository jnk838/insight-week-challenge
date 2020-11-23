window.onload = function () {
  document.getElementsByTagName("form")[0].onsubmit = function (e) {
    e.preventDefault();
  }
};

function checkAnswer(challenge, submission) {
  const HTTP = new XMLHttpRequest();
  const url = 'https://europe-west2-logical-codex-294810.cloudfunctions.net/answerValidate';
  const json_up = JSON.stringify({ "chal": challenge, "sub": submission });

  console.log(json_up);

  HTTP.open("POST", url);
  HTTP.setRequestHeader("Content-Type", "application/json");
  HTTP.onreadystatechange = function () {
    if (HTTP.readyState === XMLHttpRequest.DONE) {
      var status = HTTP.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        // The request has been completed successfully
        response = HTTP.responseText;

        console.log(response);

        if (response === "correct") {
          alert("Nailed it - that is the correct answer! Great job!");
        } else if (response === "case") {
          alert("You were so close! Make sure your answer is only using uppercase letters!");
        } else {
          alert("Keep trying, that isn't the right answer. You'll get there soon enough!");
        }
      } else {
        // Oh no! There has been an error with the request!
        console.log("Error with the response!");
      }
    }
  };
  HTTP.send(json_up);
}