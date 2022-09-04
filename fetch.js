const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");
const url = "https://type.fit/api/quotes";

function getQuotes(e) {
    e.preventDefault();

    if (number.value <= 0) {
        return alert("Please enter a positive number");
    } else {
        fetch(url)
            .then(function (response) {
                // promise
                return response.json();
            })
            .then(function (data) {
                // console.log(JSON.stringify(data));
                data = shuffle(data);

                let output = "";

                for (let i = 0; i < data.length; i++) {
                    if (i == number.value) break;
                    output += `
                        <li>Quote: ${data[i].text}</li>
                        <li>Author: ${data[i].author}</li>
                        <hr>
                    `;
                }

                document.querySelector(".quotes").innerHTML = output;
            });
    }
}

// Function to shuffle quotes
function shuffle(quotes) {
    let currentIndex = quotes.length,
        tempValue,
        randomIndex;

    // While elements exist in the array
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap the last element with currentIndex
        tempValue = quotes[currentIndex];
        quotes[currentIndex] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }

    return quotes;
}
