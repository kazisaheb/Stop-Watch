minutes = document.getElementById('minutes')
seconds = document.getElementById('seconds')
milisec = document.getElementById('milisec')
startBtn = document.getElementById('startBtn')
stopBtn = document.getElementById('stopBtn')

stopWatch = () => {
  startBtn.style.display = 'none'
  stopBtn.style.display = 'block'
  minutes.innerText = 0
  seconds.innerText = 0
  milisec.innerText = 0

  count = 0
  watch = setInterval(() => {
    milisec.innerText = count++
    if (count > 99) {
      count = 0
      seconds.innerText++
    }
    if (seconds.innerText > 59) {
      seconds.innerText = 0
      minutes.innerText++
    }
  }
    , 10
  )
}
stop = () => {
  clearInterval(watch)
  startBtn.style.display = 'block'
  stopBtn.style.display = 'none'
}

leap = () => {
  leapDiv = document.getElementById('leap')
  topBtn = document.getElementById('topBtn')
  div = document.createElement('div')
  div.innerHTML = 'Leap = ' + topBtn.innerHTML
  leapDiv.append(div)
}