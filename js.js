minutes = document.getElementById('minutes')
seconds = document.getElementById('seconds')
milisec = document.getElementById('milisec')

restart = () => {
  count = 0
  watch = setInterval(() => {
    milisec.innerText = count++
    seconds.innerText = Math.floor(count / 10)
    minutes.innerText = Math.floor(seconds.innerText / 10)
  }
    , 100
  )
}
stop = () => clearInterval(watch)
