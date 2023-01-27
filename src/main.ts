import "./style.scss";

/**
 * Receives two strings and compares them character by character
 * @param {string} firstString
 * @param {string} secondString
 * @returns {boolean}
 */
function compareChars(firstString: string, secondString: string): boolean {
  const firstStringChars: string[] = firstString.toLowerCase().split("").sort();
  const secondStringChars: string[] = secondString
    .toLowerCase()
    .split("")
    .sort();
  let isIdentical: boolean = true;

  firstStringChars.forEach((char: string, i: number) => {
    if (char !== secondStringChars[i]) {
      isIdentical = false;
      return;
    }
  });

  return isIdentical;
}

/**
 * Callback for submit eventlistener
 * @param {Event} event
 * @param {HTMLFormElement} form
 */
function checkForAnagram(event: Event, form: HTMLFormElement): boolean {
  event.preventDefault();

  const firstInput = form.querySelector("#firstString") as HTMLInputElement;
  const secondInput = form.querySelector("#secondString") as HTMLInputElement;

  const isAnagram = compareChars(firstInput.value, secondInput.value);

  return isAnagram;
}

const form = document.getElementById("form") as HTMLFormElement;
const resultElement = document.getElementById("result") as HTMLElement;

form?.addEventListener("submit", (event: Event) => {
  if (checkForAnagram(event, form)) {
    resultElement.innerText = "🥳 Congratulations! You found an anagram.";
  } else {
    resultElement.innerText = "☹️ Sorry! You didn't find an anagram.";
  }
});
