/**
 * ============================================================
 * RASTREAMENTO — Meta Pixel (Facebook) + Google Tag Manager/GA4
 * ============================================================
 * Preencha os IDs abaixo quando tiver as contas criadas.
 * Enquanto estiverem vazios, nada é carregado (o site funciona
 * normalmente, sem erros).
 */

// >>> ID do Meta Pixel (Facebook/Instagram Ads)
export const PIXEL_ID = '1354828640098844'

// >>> COLOQUE AQUI o ID do Google Tag Manager (ex: 'GTM-XXXXXXX')
export const GTM_ID = ''

/**
 * Injeta os scripts de rastreamento na página.
 * Chamado uma única vez em src/main.jsx.
 */
export function initTracking() {
  // ---- Meta Pixel ----
  if (PIXEL_ID) {
    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    /* eslint-enable */
    window.fbq('init', PIXEL_ID)
    window.fbq('track', 'PageView')
  }

  // ---- Google Tag Manager ----
  if (GTM_ID) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
    document.head.appendChild(script)
  }
}

/**
 * Evento de CONVERSÃO — disparado em todo clique no botão de WhatsApp.
 * - Meta Pixel: evento padrão "Contact" (use-o como conversão na campanha)
 * - GA4/GTM: evento "whatsapp_click" no dataLayer (crie uma tag/conversão
 *   no GTM ouvindo esse evento)
 *
 * @param {string} origem - onde o botão foi clicado (ex: 'box-preco', 'flutuante')
 */
export function trackWhatsAppClick(origem) {
  // Fora do navegador (ex.: renderização no servidor) não há o que enviar
  if (typeof window === 'undefined') return

  // Meta Pixel — evento padrão de contato.
  // O "if" protege caso o script do Pixel ainda não tenha carregado
  // (ou tenha sido bloqueado por um bloqueador de anúncios).
  if (window.fbq) {
    window.fbq('track', 'Contact', { content_name: 'whatsapp', origem })
  }
  // GTM / GA4 — evento customizado no dataLayer
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'whatsapp_click',
      origem,
    })
  }
}
