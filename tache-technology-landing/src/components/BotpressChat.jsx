import { useEffect } from 'react'

const INJECT_SCRIPT_ID = 'botpress-inject-script'
const CONFIG_SCRIPT_ID = 'botpress-config-script'

export function BotpressChat() {
  useEffect(() => {
    const injectUrl = import.meta.env.VITE_BOTPRESS_INJECT_URL || 'https://cdn.botpress.cloud/webchat/v3.3/inject.js'
    const configUrl = import.meta.env.VITE_BOTPRESS_CONFIG_URL

    if (!configUrl) {
      return
    }

    if (!document.getElementById(INJECT_SCRIPT_ID)) {
      const injectScript = document.createElement('script')
      injectScript.id = INJECT_SCRIPT_ID
      injectScript.src = injectUrl
      injectScript.async = true
      document.head.appendChild(injectScript)
    }

    if (!document.getElementById(CONFIG_SCRIPT_ID)) {
      const configScript = document.createElement('script')
      configScript.id = CONFIG_SCRIPT_ID
      configScript.src = configUrl
      configScript.defer = true
      document.head.appendChild(configScript)
    }
  }, [])

  return null
}
