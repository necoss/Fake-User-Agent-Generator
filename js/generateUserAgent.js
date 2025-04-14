const browserForm = document.getElementById('browserForm')
const deviceForm = document.getElementById('deviceForm')
const generateButton = document.getElementById('generateButton')
const agentListSection = document.querySelector('.agent-list')

function handleIconClick(event) {
  if (event.target.tagName === 'ICONIFY-ICON') {
    const checkbox = event.target.previousElementSibling
    checkbox.checked = !checkbox.checked
    checkbox.dispatchEvent(new Event('change'))
  }
}

browserForm.addEventListener('click', handleIconClick)
deviceForm.addEventListener('click', handleIconClick)

function getSelectedValues(formName) {
  const checkboxes = document.querySelectorAll(`#${formName} input[type="checkbox"]:checked`)
  return Array.from(checkboxes).map((checkbox) => checkbox.value)
}

generateButton.addEventListener('click', function () {
  const selectedBrowsers = getSelectedValues('browserForm')
  const selectedDevices = getSelectedValues('deviceForm')

  console.log('Выбранные браузеры:', selectedBrowsers)
  console.log('Выбранные устройства:', selectedDevices)

  // ЗАГЛУШКА
  const userAgents = generateUserAgents(selectedBrowsers, selectedDevices)

  displayUserAgents(userAgents)
})

// И еще одна заглушка ;D
function generateUserAgents(browsers, devices) {

  return [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  ]
}

function displayUserAgents(userAgents) {
  // Очистка прошлого списка
  agentListSection.innerHTML = '<h3 class="agent-list__title">Список ваших user-агентов:</h3>'

  const listContainer = document.createElement('div')
  listContainer.className = 'agent-list__container'

  userAgents.forEach((agent) => {
    const agentElement = document.createElement('div')
    agentElement.className = 'agent-list__item'
    agentElement.textContent = agent
    listContainer.appendChild(agentElement)
  })

  agentListSection.appendChild(listContainer)
}
