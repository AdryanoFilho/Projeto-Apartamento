import { imovel, linkWhatsApp, plantaoAtivo } from '../data/imovel.js'
import { trackWhatsAppClick } from '../lib/tracking.js'
import { IconPin, IconWhatsApp } from './icons.jsx'

/**
 * Faixa de destaque avisando que o corretor está na cidade e pode
 * mostrar o imóvel pessoalmente — gatilho de urgência real.
 *
 * SOME SOZINHA depois da data configurada em imovel.plantao.ate,
 * para o site nunca exibir uma informação vencida.
 */
export default function AvisoPlantao() {
  if (!plantaoAtivo()) return null

  const { plantao } = imovel

  return (
    <aside
      aria-label="Plantão do corretor"
      className="bg-gradient-to-r from-brand-800 via-brand-700 to-brand-800 text-white"
    >
      {/* Layout compacto: no celular o texto fica ao lado do ícone e o
          botão embaixo, ocupando pouco da primeira dobra */}
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-3 gap-y-2.5 px-4 py-3 sm:flex-nowrap sm:gap-4 sm:px-6">
        {/* Selo pulsante de "ao vivo" */}
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
          <IconPin className="h-4 w-4" aria-hidden="true" />
          <span
            className="absolute inset-0 animate-ping rounded-full bg-white/25 [animation-duration:2.5s]"
            aria-hidden="true"
          />
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-sm leading-tight font-bold tracking-tight sm:text-base">
            {plantao.titulo}
          </p>
          <p className="mt-0.5 text-xs leading-snug text-brand-100 sm:text-sm">
            {plantao.texto}
          </p>
        </div>

        <a
          href={linkWhatsApp(plantao.mensagem)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('plantao')}
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-brand-800 shadow-lg transition hover:bg-brand-50 active:scale-[0.98] sm:w-auto sm:py-2.5"
        >
          <IconWhatsApp className="h-4 w-4 shrink-0" aria-hidden="true" />
          Agendar visita
        </a>
      </div>
    </aside>
  )
}
