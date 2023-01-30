// function changeTooltip(message) {
//   var tooltip = document.getElementById("myTooltip");
//   tooltip.innerHTML = message || "Copy to clipboard";
// }

function copyToClipboard(event) {
  // var copyText = document.getElementById("email-text");
  // copyText.select();
  // copyText.setSelectionRange(0, 99999);

  const theCopyIcon = `<svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.24778 1.5L5.25 1.5H15.375L15.3771 1.5C16.2709 1.50255 17.1273 1.85872 17.7593 2.4907C18.3913 3.12268 18.7475 3.97911 18.75 4.87287C18.75 4.87879 18.75 4.8847 18.7498 4.89062L18.7423 5.25H19.0781C20.968 5.25 22.5 6.78203 22.5 8.67188V19.0781C22.5 20.968 20.968 22.5 19.0781 22.5H8.67188C6.78203 22.5 5.25 20.968 5.25 19.0781V18.75H4.875L4.87287 18.75C3.97911 18.7475 3.12268 18.3913 2.4907 17.7593C1.85872 17.1273 1.50255 16.2709 1.5 15.3771L1.5 15.375V5.25L1.5 5.24778C1.50294 4.25471 1.89874 3.30315 2.60094 2.60094C3.30315 1.89874 4.25471 1.50294 5.24778 1.5ZM6.75 19.0781C6.75 20.1395 7.61045 21 8.67188 21H19.0781C20.1395 21 21 20.1395 21 19.0781V8.67188C21 7.61045 20.1395 6.75 19.0781 6.75H17.9791C17.9776 6.75 17.9761 6.75 17.9746 6.75H8.67188C7.61045 6.75 6.75 7.61045 6.75 8.67188V19.0781ZM17.242 5.25H8.67188C6.78203 5.25 5.25 6.78203 5.25 8.67188V17.25H4.87621C4.37913 17.2483 3.90287 17.0501 3.55136 16.6986C3.19987 16.3471 3.00167 15.8709 3 15.3738V5.25119C3.00203 4.65478 3.23986 4.08335 3.66161 3.66161C4.08335 3.23986 4.65478 3.00203 5.25119 3H15.3738C15.8709 3.00167 16.3471 3.19987 16.6986 3.55136C17.0484 3.90117 17.2464 4.37454 17.25 4.86902L17.242 5.25Z"
                  fill="#2E3646"
                />
              </svg>`;
  const theCheckIcon = `<svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.9566 5.90223L9.05161 19.5079L3.04297 13.4992L4.50138 12.0408L8.95114 16.4906L19.4044 4.54407L20.9566 5.90223Z"
                  fill="#2E3646"
                />
              </svg>`;
  let reset = () => (event.target.innerHTML = theCopyIcon);

  navigator.clipboard.writeText("iuliana.lupu.dev@gmail.com");
  event.target.innerHTML = theCheckIcon;
  // changeTooltip("Email copied!");

  setTimeout(reset, 2000);
}

// OPEN/CLOSE CONTACT AND ABOUT
let isContactOpen = false;
let isAboutOpen = false;

function closeContact() {
  isContactOpen = false;
  document.getElementById("contact").classList.remove("open");
}
function closeAbout() {
  isAboutOpen = false;
  document.getElementById("about").classList.remove("open");
}

function openContact() {
  isAboutOpen ? closeAbout() : null;
  isContactOpen = true;
  document.getElementById("contact").classList.add("open");
}
function openAbout() {
  isContactOpen ? closeContact() : null;
  isAboutOpen = true;
  document.getElementById("about").classList.add("open");
}

function onOpenWork() {
  closeAbout();
  closeContact();
}
