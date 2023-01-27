import "./style.scss";

/**
 * Receives two strings and compares them character by character
 * @param {string} firstString
 * @param {string} secondString
 * @returns {boolean}
 */
function compareChars(firstString: string, secondString: string): boolean {
  // Turn given strings into unified arrays of letters
  const firstStringChars: string[] = firstString
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .split("")
    .sort();
  const secondStringChars: string[] = secondString
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .split("")
    .sort();
  let isIdentical: boolean = true;

  // compare each array item with each other
  firstStringChars.forEach((char: string, i: number) => {
    if (char !== secondStringChars[i]) {
      isIdentical = false;
      return;
    }
  });

  return isIdentical;
}

/**
 * Callback for submit eventlistener.
 * Prevents form submission
 * Returns true if all letters are equal
 *
 * @param {Event} event
 * @param {HTMLFormElement} form
 * @returns {boolean}
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

// Listen for the submit event and execute the callback
// update the result message according the result of checkForAnagram()
form?.addEventListener("submit", (event: Event) => {
  if (checkForAnagram(event, form)) {
    resultElement.innerText = "🥳 Congratulations! You found an anagram.";
  } else {
    resultElement.innerText = "☹️ Sorry! You didn't find an anagram.";
  }
});
