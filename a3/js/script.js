function generateRhombus() {
    const height = parseInt(document.getElementById("rHeight").value);
    const oddColor = document.getElementById("colorOdd").value;
    const evenColor = document.getElementById("colorEven").value;
    const symbol = document.getElementById("symbol").value;
    const container = document.getElementById("rhombus-container");

    container.innerHTML = "";
    let output = "";

    // Top half of rhombus
    for (let i = 1; i <= height; i++) {
        let line = "";

        // Using white stars for spacing
        for (let s = 0; s < height - i; s++) {
            line += `<span class="white-star">*</span>`;
        }

        const rowWidth = 2 * i - 1;
        const middlePos = Math.ceil(rowWidth / 2);

        // Adding symbols and white stars for spacing
        for (let j = 1; j <= rowWidth; j++) {
            if (j === middlePos) {
                line += `<span class="white-star">*</span>`;
            } else {
                const color = (j % 2 === 0) ? evenColor : oddColor;
                line += `<span style="color:${color}">${symbol}</span>`;
            }
        }

        output += line + "<br>";
    }

    // White star horizontal line
    let separatorLine = "";
    for (let k = 0; k < 2 * height - 1 + (height - 1); k++) {
        separatorLine += `<span class="white-star">*</span>`;
    }
    output += separatorLine + "<br>";

    // Bottom half of rhombus
    for (let i = height - 1; i >= 1; i--) {
        let line = "";

        // Adding white stars for spacing
        for (let s = 0; s < height - i; s++) {
            line += `<span class="white-star">*</span>`;
        }

        const rowWidth = 2 * i - 1;
        const middlePos = Math.ceil(rowWidth / 2);

        // Adding symbols and white stars for spacing
        for (let j = 1; j <= rowWidth; j++) {
            if (j === middlePos) {
                line += `<span class="white-star">*</span>`;
            } else {
                const color = (j % 2 === 0) ? evenColor : oddColor;
                line += `<span style="color:${color}">${symbol}</span>`;
            }
        }

        output += line + "<br>";
    }

    container.innerHTML = `<pre>${output}</pre>`;
}