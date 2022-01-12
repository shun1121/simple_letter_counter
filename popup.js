const button = document.getElementById('btn')
console.log(button)
button.addEventListener("click", () => {
  console.log('working fine')
  chrome.storage.sync.get('num', (item) => {
    const number = document.getElementById('value_num').innerHTML = item.num
    console.log(number)
  })
})

