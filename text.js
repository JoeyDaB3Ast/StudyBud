const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;

  const boldBtn = document.querySelector("#bold-btn")
const underlineBtn = document.querySelector("#underline-btn")
const italicBtn = document.querySelector("#italic-btn")
const colorBtn = document.querySelector("#color-btn")

const newBtn = document.querySelector("#new-btn")
const txtBtn = document.querySelector("#txt-btn")
const pdfBtn = document.querySelector("#pdf-btn")

const content = document.querySelector("#content")
const filename = document.querySelector("#filename-input")

boldBtn.addEventListener("click", () => {
    document.execCommand("bold")
})

underlineBtn.addEventListener("click", () => {
    document.execCommand("underline")
})

italicBtn.addEventListener("click", () => {
    document.execCommand("italic")
})

colorBtn.addEventListener("input", () => {
    document.execCommand("forecolor", false, colorBtn.value)
})

newBtn.addEventListener("click", () => {
    content.innerHTML = ""
})

txtBtn.addEventListener("click", () => {
    const a = document.createElement("a")
    const blob = new Blob([content.innerText])
    const dataUrl = URL.createObjectURL(blob)
    a.href = dataUrl
    a.download = filename.value + ".txt"
    a.click()
})

pdfBtn.addEventListener('click', () => {
    html2pdf().from(content).save(filename.value)
})


