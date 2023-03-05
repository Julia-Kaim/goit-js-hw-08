import "../css/common.css";
import "../css/03-feedback.css";
import throttle from "lodash.throttle";

// Śledź w formularzu zdarzenie input, i za każdym razem zapisuj w local storage obiekt z polami email i message, w których przechowuj aktualne wartości pól formularza. Niech kluczem do storage będzie "feedback-form-state".
// Podczas przeładowywania strony sprawdzaj stan storage i jeśli są tam zapisane dane, wypełniaj nimi pola formularza. W przeciwnym wypadku pola powinny być puste.
// Po wysłaniu formularza wyczyść storage i pola formularza, a także wprowadź obiekt z polami email, message i ich aktualnymi wartościami do wiersza poleceń.
// Zrób tak, aby storage aktualizował się nie częściej niż raz na 500 milisekund. Aby to zrobić, użyj biblioteki lodash.throttle i dodaj ją do projektu

// const updateOutput = () => {
// 	form.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// };

// const saveMessage = (e) => {
// 	e.preventDefault();
// 	localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
// 	updateOutput();
// 	form.reset();
// };

// const form = document.querySelector("#message-form");
// const output = document.querySelector("#output");
// const LOCALSTORAGE_KEY = "goit-example-message";

// updateOutput();
// form.addEventListener("submit", saveMessage);

// function saveMessage(evt) {
// 	evt.preventDefault();
// 	localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
// 	updateOutput();
// 	form.reset();
// }

// function updateOutput() {
// 	output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// }

const LOCALSTORAGE_KEY = "feedback-form-state";
const formData = {
	form: document.querySelector(".feedback-form"),
	message: document.querySelector(".feedback-form textarea"),
	email: document.querySelector("feedback-form input"),
};

const form = {};

formData.form.addEventListener("submit", (e) => {
	e.preventDefault();
	e.currentTarget.removeEventListener();
	const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
	localStorage.removeItem(LOCALSTORAGE_KEY);
});

const onMessage = (e) => {
	form[e.target.name] = e.target.value;
	const dataStringify = JSON.stringify(form);
	localStorage.setItem(LOCALSTORAGE_KEY, dataStringify);
};

const givenData = () => {
	const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

	if (savedMessage === null) {
		return;
	}
	formData.textara.value = savedMessage["message"] || "";
	formData.input.value = savedMessage["email"] || "";
};

givenData();

formData.form.addEventListener("input", throttle(onMessage, 500));
