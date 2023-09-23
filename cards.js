const main = document.querySelector(".tiles");
const colors = ["red", "green", "yellow", "purple", "white", "brown", "blue", "pink"];
const meowList = [...colors, ...colors];
const tileCount = meowList.length;

// Game state
let revealedCount = 0;
let activeTile = null;
let lastMove = false;

function buildTile(color) {
	const element = document.createElement("div");

	element.classList.add("tile");
	element.setAttribute("data-color", color);
	element.setAttribute("data-revealed", "false");

	element.addEventListener("click", () => {
		const revealed = element.getAttribute("data-revealed");

		if (
			lastMove
			|| revealed === "true"
			|| element == activeTile
		) {
			return;
		}

		// Reveal this color
		element.style.backgroundColor = color;

		if (!activeTile) {
			activeTile = element;

			return;
		}

		const colorToMatch = activeTile.getAttribute("data-color");

		if (colorToMatch === color) {
			element.setAttribute("data-revealed", "true");
			activeTile.setAttribute("data-revealed", "true");

			activeTile = null;
			lastMove = false;
			revealedCount += 2;

			if (revealedCount === tileCount) {
				alert("WINNER!");
			}

			return;
		}

		lastMove = true;

		setTimeout(() => {
			activeTile.style.backgroundColor = null;
			element.style.backgroundColor = null;

			lastMove = false;
			activeTile = null;
		}, 1000);
	});

	return element;
}

// Build up tiles
for (let i = 0; i < tileCount; i++) {
	const randomIndex = Math.floor(Math.random() * meowList.length);
	const color = meowList[randomIndex];
	const tile = buildTile(color);

	meowList.splice(randomIndex, 1);
	main.appendChild(tile);
}