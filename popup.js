const setVal = () => {
    chrome.storage.sync.get('num', (item) => {
      const number = document.getElementById('value_num').innerHTML = item.num
      console.log(number)
    })
}
setVal()

