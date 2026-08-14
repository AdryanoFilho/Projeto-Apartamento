import AvisoPlantao from './components/AvisoPlantao.jsx'
import Galeria from './components/Galeria.jsx'
import Reveal from './components/Reveal.jsx'
import { BotaoWhatsAppFlutuante } from './components/BotaoWhatsApp.jsx'
import { imovel } from './data/imovel.js'
import {
  BarraSuperior,
  CartaoPreco,
  ChamadaFinal,
  Descricao,
  Diferenciais,
  Faq,
  FichaTecnica,
  ListaCaracteristicas,
  Proximidades,
  Rodape,
  SecaoMapa,
  TituloEndereco,
} from './components/Secoes.jsx'

/**
 * Página única de venda do apartamento.
 *
 * Layout: no desktop, o conteúdo fica à esquerda e o cartão de
 * preço/contato à direita, fixo ao rolar (sticky). No mobile, o
 * cartão de preço aparece logo após o proprietário, no início.
 * As seções entram com uma animação sutil ao rolar (<Reveal>).
 */
export default function App() {
  return (
    <div className="animate-fade-up">
      {/* Barra superior com a marca do imóvel */}
      <BarraSuperior />

      {/* Aviso de plantão do corretor — some sozinho após a data
          configurada em src/data/imovel.js (plantao.ate) */}
      <AvisoPlantao />

      {/* 1 e 2. Galeria de fotos + abas Fotos/Mapa */}
      <Galeria />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 md:grid md:grid-cols-[1fr_300px] md:items-start md:gap-8 lg:grid-cols-[1fr_340px] lg:gap-10">
        {/* ---- Coluna principal ---- */}
        <main className="space-y-14">
          {/* Cartão de preço + corretor no MOBILE — logo no começo da página */}
          <div className="md:hidden">
            <CartaoPreco origem="cartao-topo" />
          </div>

          {/* 4. Título e endereço */}
          <TituloEndereco />

          {/* 5. Ficha técnica (área, quartos, banheiros, vaga) */}
          <Reveal>
            <FichaTecnica />
          </Reveal>

          {/* 6. Descrição completa */}
          <Reveal>
            <Descricao />
          </Reveal>

          {/* 7. O que tem neste imóvel */}
          <Reveal>
            <ListaCaracteristicas
              titulo="O que tem neste imóvel"
              itens={imovel.caracteristicasImovel}
            />
          </Reveal>

          {/* 8. O que tem no condomínio */}
          <Reveal>
            <ListaCaracteristicas
              titulo="O que tem no condomínio"
              itens={imovel.caracteristicasCondominio}
            />
          </Reveal>

          {/* 9. O que tem perto */}
          <Reveal>
            <Proximidades />
          </Reveal>

          {/* Por que este imóvel é diferenciado? */}
          <Reveal>
            <Diferenciais />
          </Reveal>

          {/* 10. Mapa */}
          <Reveal>
            <SecaoMapa />
          </Reveal>

          {/* 11. FAQ (aparece apenas se houver perguntas em src/data/imovel.js) */}
          <Faq />

          {/* Faixa final de conversão */}
          <Reveal>
            <ChamadaFinal />
          </Reveal>
        </main>

        {/* ---- Cartão de preço no DESKTOP — fixo ao rolar ---- */}
        <aside className="hidden md:sticky md:top-6 md:block">
          <CartaoPreco origem="cartao-lateral" />
        </aside>
      </div>

      {/* 12. Rodapé */}
      <Rodape />

      {/* Botão de WhatsApp flutuante — sempre visível */}
      <BotaoWhatsAppFlutuante />
    </div>
  )
}
