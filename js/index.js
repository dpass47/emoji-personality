const emojiContainer = document.getElementById('emoji-container');
const myEmojis = ['😀', '😆', '🥰'];
const emojiInput = document.getElementById('emoji-input');
const pushBtn = document.getElementById('push-btn');
const unshiftBtn = document.getElementById('unshift-btn');
const popBtn = document.getElementById('pop-btn');
const shiftBtn = document.getElementById('shift-btn');
const userName = document.querySelector('.user-name');

onload = function () {
	var personName = prompt('Enter your name');
	if (personName) {
		userName.textContent = personName + `'s`;
	}
};

function renderEmojis() {
	emojiContainer.innerHTML = '';
	emojiInput.value = '';
	for (i = 0; i < myEmojis.length; i++) {
		emojiContainer.innerHTML += `<span>${myEmojis[i]}</span>`;
	}
}

renderEmojis();

pushBtn.addEventListener('click', function () {
	if (emojiInput.value) {
		myEmojis.push(emojiInput.value);
		renderEmojis();
	}
});

unshiftBtn.addEventListener('click', function () {
	if (emojiInput.value) {
		myEmojis.unshift(emojiInput.value);
		renderEmojis();
	}
});

popBtn.addEventListener('click', function () {
	myEmojis.pop();
	renderEmojis();
});

shiftBtn.addEventListener('click', function () {
	myEmojis.shift();
	renderEmojis();
});
