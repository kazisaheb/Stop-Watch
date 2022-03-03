minutes = document.getElementById('minutes')
seconds = document.getElementById('seconds')
milisec = document.getElementById('milisec')
start = document.getElementById('start')

stopWatch = () => {
  start.setAttribute("disabled", true)
  minutes.innerText = 00
  seconds.innerText = 00
  milisec.innerText = 00

  count = 0
  watch = setInterval(() => {
    milisec.innerText = count++
    if (count > 99) {
      count = 0
      seconds.innerText = +seconds.innerText + 1
    }
    if (seconds.innerText > 59) {
      seconds.innerText = 0
      minutes.innerText = +minutes.innerText + 1
    }
  }
    , 10
  )
}
stop = () => {
  clearInterval(watch)
  start.removeAttribute("disabled")
}

