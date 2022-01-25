const setVal = () => {
  chrome.storage.sync.get('num', (item) => {
    document.getElementById('value_num').innerHTML = item.num
  })
}
setVal()
