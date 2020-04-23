function checkAnswer(challenge, submission) {
    const HTTP = new XMLHttpRequest();
    const url = 'https://us-central1-insight-week-challenge.cloudfunctions.net/validate-answer';
    const json_up = JSON.stringify({"chal": challenge, "sub": submission});

    console.log(json_up);

    HTTP.open("POST", url);
    HTTP.setRequestHeader("Content-Type", "application/json");
    HTTP.send(json_up);

    response = HTTP.responseText;

    if (response === "correct") {
        alert("Well done! That is the correct answer!");
    } else {
        alert("Sorry, that isn't the right answer.");
    }
}