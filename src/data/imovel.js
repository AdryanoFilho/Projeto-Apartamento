/**
 * ============================================================
 * DADOS DO IMÓVEL — edite tudo por aqui!
 * ============================================================
 * Este é o ÚNICO arquivo que você precisa alterar para mudar
 * qualquer informação do site: preço, textos, listas, fotos,
 * corretor, WhatsApp etc.
 */

// ---- FOTOS DA GALERIA (a ordem aqui é a ordem no site) ----
// Para trocar as fotos: coloque as novas na pasta /fotos-originais,
// rode "npm run fotos" e ajuste os imports abaixo.
// Cada foto tem duas versões: .webp (leve, navegadores modernos) e
// .jpg (reserva para navegadores sem WebP, ex. Safari mais antigo) —
// o "npm run fotos" gera as duas automaticamente.
import fotoFachada from '../assets/fotos/image1.webp'
import fotoFachadaJpg from '../assets/fotos/image1.jpg'
import fotoVistaVaranda from '../assets/fotos/vista-varanda.webp'
import fotoVistaVarandaJpg from '../assets/fotos/vista-varanda.jpg'
import fotoVaranda from '../assets/fotos/image3.webp'
import fotoVarandaJpg from '../assets/fotos/image3.jpg'
import fotoVista from '../assets/fotos/image.webp'
import fotoVistaJpg from '../assets/fotos/image.jpg'
import fotoQuartoPanoramico from '../assets/fotos/image7.webp'
import fotoQuartoPanoramicoJpg from '../assets/fotos/image7.jpg'
import fotoCozinhaBancada from '../assets/fotos/image5.webp'
import fotoCozinhaBancadaJpg from '../assets/fotos/image5.jpg'
import fotoSalaIntegrada from '../assets/fotos/image2.webp'
import fotoSalaIntegradaJpg from '../assets/fotos/image2.jpg'
import fotoQuartoArmarios from '../assets/fotos/image10.webp'
import fotoQuartoArmariosJpg from '../assets/fotos/image10.jpg'
import fotoAmbienteVidro from '../assets/fotos/image4.webp'
import fotoAmbienteVidroJpg from '../assets/fotos/image4.jpg'
import fotoBanheiro from '../assets/fotos/image8.webp'
import fotoBanheiroJpg from '../assets/fotos/image8.jpg'
import fotoCorredor from '../assets/fotos/image9.webp'
import fotoCorredorJpg from '../assets/fotos/image9.jpg'
import fotoCorretor from '../assets/fotos/corretor.webp'
import fotoCorretorJpg from '../assets/fotos/corretor.jpg'

export const imovel = {
  // ---- IDENTIFICAÇÃO ----
  titulo:
    'Apartamento Exclusivo com Vista Definitiva para o Vale e a Cidade de Bananeiras',
  endereco: 'Rua Severino Pereira de Sousa, 120 - Bananeiras - PB, CEP 58220-000',
  cidade: 'Bananeiras',

  // ---- GALERIA (ordem de exibição) ----
  fotos: [
    { src: fotoFachada, jpg: fotoFachadaJpg, alt: 'Fachada do edifício com apenas 4 apartamentos' },
    { src: fotoVistaVaranda, jpg: fotoVistaVarandaJpg, alt: 'Vista da varanda para o vale e a cidade de Bananeiras' },
    { src: fotoVaranda, jpg: fotoVarandaJpg, alt: 'Varanda com cortina europeia e vista para o vale' },
    { src: fotoVista, jpg: fotoVistaJpg, alt: 'Vista definitiva para a cidade de Bananeiras e o vale' },
    { src: fotoQuartoPanoramico, jpg: fotoQuartoPanoramicoJpg, alt: 'Quarto com janela panorâmica e vista para o vale' },
    { src: fotoCozinhaBancada, jpg: fotoCozinhaBancadaJpg, alt: 'Cozinha americana com bancada e móveis projetados' },
    { src: fotoSalaIntegrada, jpg: fotoSalaIntegradaJpg, alt: 'Sala ampla integrada à cozinha americana' },
    { src: fotoQuartoArmarios, jpg: fotoQuartoArmariosJpg, alt: 'Quarto com armários projetados' },
    { src: fotoAmbienteVidro, jpg: fotoAmbienteVidroJpg, alt: 'Ambiente amplo com porta de vidro' },
    { src: fotoBanheiro, jpg: fotoBanheiroJpg, alt: 'Banheiro com box de vidro e móveis projetados' },
    { src: fotoCorredor, jpg: fotoCorredorJpg, alt: 'Corredor de acesso aos quartos' },
  ],

  // ---- VALORES ----
  preco: 'R$ 450.000',
  precoDetalhes: [
    { rotulo: 'Condomínio', valor: 'R$ 250/mês' },
    { rotulo: 'IPTU', valor: 'R$ 41,67/mês (R$ 500/ano)' },
    { rotulo: 'Valor por m²', valor: 'R$ 4.054,05/m²' },
  ],

  // ---- FICHA TÉCNICA (ícones: veja src/components/icons.jsx) ----
  fichaTecnica: [
    { icone: 'area', texto: '111 m²' },
    { icone: 'quartos', texto: '3 quartos' },
    { icone: 'banheiros', texto: '2 banheiros' },
    { icone: 'vagas', texto: '1 vaga' },
  ],

  // ---- DESCRIÇÃO (cada item vira um parágrafo) ----
  descricao: [
    'Apartamento exclusivo no Residencial Mirante do Vale, em Bananeiras-PB, um edifício com apenas quatro unidades e vista definitiva para a cidade e o vale. São 111 m² com varanda, sala ampla integrada à cozinha americana, três quartos (sendo uma suíte), área de serviço e uma vaga de garagem.',
    'Conta com móveis projetados na cozinha, nos quartos e nos banheiros, varanda com cortina europeia e área de lazer com piscina, espaço gourmet coberto e churrasqueira. A caixa d\'água de 10.000 litros garante tranquilidade no abastecimento.',
    'Em área tranquila e de fácil acesso, é uma excelente opção para morar ou investir em uma das cidades mais valorizadas do Brejo Paraibano.',
  ],

  // ---- POR QUE ESTE IMÓVEL É DIFERENCIADO ----
  // (ícones disponíveis: privacidade, economia, praticidade, seguranca, cenario
  //  — veja ICONES_DIFERENCIAIS em src/components/Secoes.jsx)
  diferenciais: [
    {
      icone: 'privacidade',
      titulo: 'Privacidade sem igual',
      texto:
        'Esqueça a falta de privacidade com os olhares curiosos dos vizinhos invadindo seus ambientes e a rotina dos condomínios planos horizontais.',
    },
    {
      icone: 'economia',
      titulo: 'Economia prática',
      texto:
        'Tenha a enorme vantagem de não ter gastos extras com a manutenção constante exigida pelas casas de um condomínio (pintura, jardinagem etc.).',
    },
    {
      icone: 'praticidade',
      titulo: 'Praticidade total',
      texto:
        'Vá e volte com tranquilidade: o seu apartamento estará sempre limpo, seguro e arrumado do mesmo jeito que você deixou!',
    },
    {
      icone: 'seguranca',
      titulo: 'Segurança e exclusividade',
      texto:
        'Sinta a paz de morar em um edifício com entrada social exclusiva, com apenas 4 apartamentos — sendo apenas 1 apartamento por andar, com acesso por escada.',
    },
    {
      icone: 'cenario',
      titulo: 'Cenário permanente',
      texto:
        'Localizado no 2º andar, o morador tem o privilégio de abrir a janela todos os dias e contemplar o horizonte verdejante do vale e a beleza histórica da cidade de Bananeiras à sua frente.',
    },
  ],

  // ---- O QUE TEM NESTE IMÓVEL ----
  // Cada item tem um ícone próprio (veja ICONES_CARACTERISTICAS em
  // src/components/Secoes.jsx). Área, quartos, banheiros e vaga já
  // aparecem na ficha técnica — não precisam se repetir aqui.
  caracteristicasImovel: [
    { icone: 'suite', rotulo: '1 suíte' },
    { icone: 'cozinha', rotulo: 'Cozinha americana' },
    { icone: 'sala', rotulo: 'Sala ampla' },
    { icone: 'varanda', rotulo: 'Varanda com cortina europeia' },
    { icone: 'moveis', rotulo: 'Móveis projetados' },
    { icone: 'lavanderia', rotulo: 'Área de serviço' },
    { icone: 'vista', rotulo: 'Vista definitiva para o vale' },
    { icone: 'sol', rotulo: 'Ventilação e iluminação natural' },
  ],

  // ---- O QUE TEM NO CONDOMÍNIO ----
  // (nº de apartamentos e valor do condomínio já aparecem em outras
  //  seções — aqui ficam só as comodidades)
  caracteristicasCondominio: [
    { icone: 'piscina', rotulo: 'Piscina' },
    { icone: 'gourmet', rotulo: 'Área gourmet coberta' },
    { icone: 'churrasqueira', rotulo: 'Churrasqueira' },
    { icone: 'banheiro', rotulo: 'Banheiro de apoio' },
    { icone: 'agua', rotulo: "Caixa d'água de 10.000 litros" },
  ],

  // ---- O QUE TEM PERTO ----
  // Os 3 primeiros ficam visíveis; o restante aparece ao clicar
  // em "Ver mais pontos próximos".
  pontosProximos: [
    { nome: 'Centro de Bananeiras', categoria: 'Centro', distancia: '≈ 3 min de carro' },
    { nome: 'Igreja Matriz de Nossa Senhora do Livramento', categoria: 'Igreja', distancia: '≈ 4 min' },
    { nome: 'Restaurantes e cafés do centro', categoria: 'Gastronomia', distancia: '≈ 3 a 5 min' },
    { nome: 'Supermercados', categoria: 'Mercado', distancia: '≈ 4 min' },
    { nome: 'Farmácias', categoria: 'Farmácia', distancia: '≈ 4 min' },
    { nome: 'Bancos e comércio local', categoria: 'Serviços', distancia: '≈ 4 min' },
    { nome: 'Acesso à rodovia para Solânea', categoria: 'Acesso', distancia: '≈ 1 min' },
  ],

  // ---- MAPA ----
  mapa: {
    latitude: -6.7580229,
    longitude: -35.6443329,
    zoom: 16,
  },

  // ---- CORRETOR / PROPRIETÁRIO ----
  corretor: {
    nome: 'Rômulo Carvalho',
    rotulo: 'Corretor do imóvel',
    registro: 'CRECI-PB 10429',
    foto: fotoCorretor,
    fotoJpg: fotoCorretorJpg,
  },

  // ---- PLANTÃO DO CORRETOR (aviso temporário) ----
  // Faixa de destaque no topo avisando que o corretor está na cidade
  // e pode mostrar o imóvel pessoalmente.
  //
  // IMPORTANTE: o aviso SOME SOZINHO depois da data em "ate" — assim
  // o site nunca mostra uma informação vencida. Para usar de novo,
  // basta atualizar as datas.
  plantao: {
    ativo: true,
    ate: '2026-08-16', // último dia do plantão (formato AAAA-MM-DD)
    titulo: 'Corretor em plantão em Bananeiras até domingo',
    texto:
      'Rômulo está na cidade e pode mostrar o apartamento pessoalmente. Agende seu horário.',
    // Mensagem específica deste aviso (ajuda a identificar de onde veio o contato)
    mensagem:
      'Olá! Vi que o corretor está em plantão em Bananeiras. Posso agendar uma visita ao apartamento?',
  },

  // ---- WHATSAPP ----
  whatsapp: {
    // Somente números, com DDI 55 + DDD + número
    numero: '5583988420045',
    mensagem:
      'Olá! Tenho interesse no apartamento em Bananeiras. Poderia me passar mais informações?',
  },

  // ---- FAQ (opcional) ----
  // Deixe o array vazio [] para esconder a seção.
  // Para ativar, adicione itens no formato:
  // { pergunta: 'Aceita financiamento?', resposta: 'Sim, ...' },
  faq: [],
}

/**
 * Monta o link do WhatsApp com a mensagem pré-preenchida.
 * @param {string} [mensagem] - mensagem alternativa (ex.: a do plantão)
 */
export function linkWhatsApp(mensagem) {
  const texto = mensagem || imovel.whatsapp.mensagem
  return `https://wa.me/${imovel.whatsapp.numero}?text=${encodeURIComponent(texto)}`
}

/**
 * O plantão do corretor ainda está valendo?
 * Compara só a DATA (sem horas), então o aviso fica no ar até o
 * fim do último dia e some sozinho no dia seguinte.
 */
export function plantaoAtivo() {
  const { plantao } = imovel
  if (!plantao?.ativo || !plantao.ate) return false

  const [ano, mes, dia] = plantao.ate.split('-').map(Number)
  const fim = new Date(ano, mes - 1, dia, 23, 59, 59) // fim do último dia, horário local
  return new Date() <= fim
}
