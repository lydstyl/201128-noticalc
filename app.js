const timeEvt = document.getElementById('timeEvt')
const hourNotif = document.getElementById('hourNotif')
const span = document.querySelector('span')

timeEvt.addEventListener('change', _ => {
  setNotifToDom()
})

hourNotif.addEventListener('change', _ => {
  setNotifToDom()
})

function getEvtHour () {
  let hour = timeEvt.value.split(':')

  const min = +hour[1]

  hour = +hour[0]

  if (min > 30) {
    hour++
  }

  return hour
}

function getNotifHour () {
  return +hourNotif.value
}

function calculateNotificationHour () {
  const evtHour = getEvtHour()
  const hourNotif = getNotifHour()

  return evtHour + (24 - hourNotif)
}

function setNotifToDom () {
  const notifHour = calculateNotificationHour()
  span.innerText = notifHour
}
