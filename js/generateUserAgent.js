const config = {
  browsers: {
    chrome: {
      name: 'Chrome',
      engine: 'AppleWebKit/537.36 (KHTML, like Gecko)',
      base: 'Mozilla/5.0',
      version: {
        min: 90,
        max: 120,
      },
      chromeVersion: {
        min: 90,
        max: 120,
      },
    },
    firefox: {
      name: 'Firefox',
      engine: 'Gecko/20100101',
      base: 'Mozilla/5.0',
      version: {
        min: 90,
        max: 120,
      },
    },
    opera: {
      name: 'OPR',
      engine: 'AppleWebKit/537.36 (KHTML, like Gecko)',
      base: 'Mozilla/5.0',
      version: {
        min: 70,
        max: 90,
      },
      chromeVersion: {
        min: 90,
        max: 120,
      },
    },
    edge: {
      name: 'Edg',
      engine: 'AppleWebKit/537.36 (KHTML, like Gecko)',
      base: 'Mozilla/5.0',
      version: {
        min: 90,
        max: 120,
      },
      chromeVersion: {
        min: 90,
        max: 120,
      },
    },
    safari: {
      name: 'Safari',
      engine: 'AppleWebKit/605.1.15 (KHTML, like Gecko)',
      base: 'Mozilla/5.0',
      version: {
        min: 14,
        max: 17,
      },
    },
  },
  devices: {
    windows: {
      name: 'Windows NT',
      versions: ['10.0', '6.3', '6.2', '6.1'],
      architectures: ['Win64; x64', 'WOW64', 'Win64; x64', 'x64'],
    },
    mac: {
      name: 'Macintosh; Intel Mac OS X',
      versions: ['10_15_7', '10_14_6', '10_13_6', '10_12_6'],
      architectures: [],
    },
    linux: {
      name: 'X11; Linux',
      architectures: ['x86_64', 'i686', 'x86_64', 'i686'],
    },
    android: {
      name: 'Linux; Android',
      versions: ['10', '11', '12', '13'],
      models: [
        'SM-G975F',
        'SM-G998B',
        'SM-N986B',
        'Pixel 5',
        'Pixel 6',
        'Pixel 7',
        'Xiaomi Redmi Note 9',
        'Xiaomi Mi 10',
      ],
    },
  },
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function generateChromeUA(device) {
  const version = getRandomInt(config.browsers.chrome.version.min, config.browsers.chrome.version.max)
  const chromeVersion = getRandomInt(config.browsers.chrome.chromeVersion.min, config.browsers.chrome.chromeVersion.max)

  let osString = ''
  if (device === 'windows') {
    const winVersion = getRandomElement(config.devices.windows.versions)
    const arch = getRandomElement(config.devices.windows.architectures)
    osString = `(Windows NT ${winVersion}; ${arch})`
  } else if (device === 'mac') {
    const macVersion = getRandomElement(config.devices.mac.versions)
    osString = `(Macintosh; Intel Mac OS X ${macVersion})`
  } else if (device === 'linux') {
    const arch = getRandomElement(config.devices.linux.architectures)
    osString = `(X11; Linux ${arch})`
  } else if (device === 'android') {
    const androidVersion = getRandomElement(config.devices.android.versions)
    const model = getRandomElement(config.devices.android.models)
    osString = `(Linux; Android ${androidVersion}; ${model})`
  }

  return `${config.browsers.chrome.base} ${osString} ${
    config.browsers.chrome.engine
  } Chrome/${chromeVersion}.0.${getRandomInt(1000, 9999)}.${getRandomInt(100, 999)} Safari/537.36`
}

function generateFirefoxUA(device) {
  const version = getRandomInt(config.browsers.firefox.version.min, config.browsers.firefox.version.max)

  let osString = ''
  if (device === 'windows') {
    const winVersion = getRandomElement(config.devices.windows.versions)
    const arch = getRandomElement(config.devices.windows.architectures)
    osString = `(Windows NT ${winVersion}; ${arch}; rv:${version}.0)`
  } else if (device === 'mac') {
    const macVersion = getRandomElement(config.devices.mac.versions)
    osString = `(Macintosh; Intel Mac OS X ${macVersion}; rv:${version}.0)`
  } else if (device === 'linux') {
    const arch = getRandomElement(config.devices.linux.architectures)
    osString = `(X11; Linux ${arch}; rv:${version}.0)`
  } else if (device === 'android') {
    const androidVersion = getRandomElement(config.devices.android.versions)
    osString = `(Android ${androidVersion}; Mobile; rv:${version}.0)`
  }

  return `${config.browsers.firefox.base} ${osString} ${config.browsers.firefox.engine} Firefox/${version}.0`
}

function generateOperaUA(device) {
  const version = getRandomInt(config.browsers.opera.version.min, config.browsers.opera.version.max)
  const chromeVersion = getRandomInt(config.browsers.opera.chromeVersion.min, config.browsers.opera.chromeVersion.max)

  let osString = ''
  if (device === 'windows') {
    const winVersion = getRandomElement(config.devices.windows.versions)
    const arch = getRandomElement(config.devices.windows.architectures)
    osString = `(Windows NT ${winVersion}; ${arch})`
  } else if (device === 'mac') {
    const macVersion = getRandomElement(config.devices.mac.versions)
    osString = `(Macintosh; Intel Mac OS X ${macVersion})`
  } else if (device === 'linux') {
    const arch = getRandomElement(config.devices.linux.architectures)
    osString = `(X11; Linux ${arch})`
  } else if (device === 'android') {
    const androidVersion = getRandomElement(config.devices.android.versions)
    const model = getRandomElement(config.devices.android.models)
    osString = `(Linux; Android ${androidVersion}; ${model})`
  }

  return `${config.browsers.opera.base} ${osString} ${
    config.browsers.opera.engine
  } Chrome/${chromeVersion}.0.${getRandomInt(1000, 9999)}.${getRandomInt(
    100,
    999
  )} Safari/537.36 OPR/${version}.0.${getRandomInt(1000, 9999)}`
}

function generateEdgeUA(device) {
  const version = getRandomInt(config.browsers.edge.version.min, config.browsers.edge.version.max)
  const chromeVersion = getRandomInt(config.browsers.edge.chromeVersion.min, config.browsers.edge.chromeVersion.max)

  let osString = ''
  if (device === 'windows') {
    const winVersion = getRandomElement(config.devices.windows.versions)
    const arch = getRandomElement(config.devices.windows.architectures)
    osString = `(Windows NT ${winVersion}; ${arch})`
  } else if (device === 'mac') {
    const macVersion = getRandomElement(config.devices.mac.versions)
    osString = `(Macintosh; Intel Mac OS X ${macVersion})`
  } else if (device === 'linux') {
    const arch = getRandomElement(config.devices.linux.architectures)
    osString = `(X11; Linux ${arch})`
  } else if (device === 'android') {
    const androidVersion = getRandomElement(config.devices.android.versions)
    const model = getRandomElement(config.devices.android.models)
    osString = `(Linux; Android ${androidVersion}; ${model})`
  }

  return `${config.browsers.edge.base} ${osString} ${
    config.browsers.edge.engine
  } Chrome/${chromeVersion}.0.${getRandomInt(1000, 9999)}.${getRandomInt(
    100,
    999
  )} Safari/537.36 Edg/${version}.0.${getRandomInt(1000, 9999)}`
}

function generateSafariUA(device) {
  const version = getRandomInt(config.browsers.safari.version.min, config.browsers.safari.version.max)

  let osString = ''
  if (device === 'windows') {
    // Safari на Windows больше не поддерживается, но оставим для старых версий
    const winVersion = getRandomElement(['6.1', '6.2', '6.3'])
    osString = `(Windows NT ${winVersion})`
  } else if (device === 'mac') {
    const macVersion = getRandomElement(config.devices.mac.versions)
    osString = `(Macintosh; Intel Mac OS X ${macVersion})`
  } else if (device === 'linux') {
    // Safari на Linux не существует, но сгенерируем как Mac для совместимости
    osString = `(Macintosh; Intel Mac OS X ${getRandomElement(config.devices.mac.versions)})`
  } else if (device === 'android') {
    // Safari на Android не существует, сгенерируем как iOS
    const iosVersion = getRandomElement(['14_5', '15_0', '15_4', '16_0'])
    const deviceModel = getRandomElement(['iPhone', 'iPad'])
    osString = `(${deviceModel}; CPU ${deviceModel} OS ${iosVersion} like Mac OS X)`
  }

  return `${config.browsers.safari.base} ${osString} ${config.browsers.safari.engine} Version/${version}.0 Safari/605.1.15`
}

function generateUserAgent(browser, device) {
  switch (browser) {
    case 'chrome':
      return generateChromeUA(device)
    case 'firefox':
      return generateFirefoxUA(device)
    case 'opera':
      return generateOperaUA(device)
    case 'edge':
      return generateEdgeUA(device)
    case 'safari':
      return generateSafariUA(device)
    default:
      return generateChromeUA(device)
  }
}

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

  if (selectedBrowsers.length === 0) selectedBrowsers.push('chrome')
  if (selectedDevices.length === 0) selectedDevices.push('windows')

  const userAgents = []
  for (let i = 0; i < 10; i++) {
    const browser = getRandomElement(selectedBrowsers)
    const device = getRandomElement(selectedDevices)
    userAgents.push(generateUserAgent(browser, device))
  }

  displayUserAgents(userAgents)
})

function displayUserAgents(userAgents) {
  agentListSection.innerHTML = '<h3 class="agent-list__title">Список ваших user-агентов:</h3>'

  const listContainer = document.createElement('div')
  listContainer.className = 'agent-list__container'

  userAgents.forEach((agent) => {
    const agentElement = document.createElement('div')
    agentElement.className = 'agent-list__item'

    const agentText = document.createElement('p')
    agentText.textContent = agent

    const copyButton = document.createElement('button')
    copyButton.className = 'agent-list__copy-button'
    copyButton.innerHTML = '<iconify-icon icon="mdi:content-copy" width="20"></iconify-icon>'
    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(agent)
      copyButton.innerHTML = '<iconify-icon icon="mdi:check" width="20"></iconify-icon>'
      setTimeout(() => {
        copyButton.innerHTML = '<iconify-icon icon="mdi:content-copy" width="20"></iconify-icon>'
      }, 2000)
    })

    agentElement.appendChild(agentText)
    agentElement.appendChild(copyButton)
    listContainer.appendChild(agentElement)
  })

  agentListSection.appendChild(listContainer)
}
