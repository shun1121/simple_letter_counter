document.addEventListener('selectionchange', () => {
  const selected_val = window.getSelection().toString()
  const val_length = selected_val.length
  chrome.storage.sync.set({num: val_length}, () => {})
})

