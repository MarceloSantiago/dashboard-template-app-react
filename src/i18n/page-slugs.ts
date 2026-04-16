export const pageSlugs = {
  dashboard: { en: 'dashboard', pt: 'painel', es: 'panel-de-control' },
  analytics: { en: 'analytics', pt: 'analises', es: 'analiticas' },
  marketing: { en: 'marketing', pt: 'marketing', es: 'marketing' },
  crm: { en: 'crm', pt: 'crm', es: 'crm' },
  stocks: { en: 'stocks', pt: 'estoque', es: 'inventario' },
  saas: { en: 'saas', pt: 'saas', es: 'saas' },
  logistics: { en: 'logistics', pt: 'logistica', es: 'logistica' },
  calendar: { en: 'calendar', pt: 'calendario', es: 'calendario' },
  profile: { en: 'profile', pt: 'perfil', es: 'perfil' },
  task: { en: 'task', pt: 'tarefa', es: 'tarea' },
  kanban: { en: 'kanban', pt: 'kanban', es: 'kanban' },
  chat: { en: 'chat', pt: 'chat', es: 'chat' },
  blank: { en: 'blank', pt: 'pagina-em-branco', es: 'pagina-en-blanco' },
  example: { en: 'example', pt: 'exemplo', es: 'ejemplo' },
  'form-elements': { en: 'form-elements', pt: 'formularios', es: 'formularios' },
  'form-layout': { en: 'form-layout', pt: 'layout-formulario', es: 'diseno-formulario' },
  'basic-tables': { en: 'basic-tables', pt: 'tabelas-basicas', es: 'tablas-basicas' },
  'data-tables': { en: 'data-tables', pt: 'tabelas-dados', es: 'tablas-datos' },
  'file-manager': { en: 'file-manager', pt: 'gerenciador-arquivos', es: 'administrador-archivos' },
  'pricing-tables': { en: 'pricing-tables', pt: 'tabelas-preco', es: 'tablas-precios' },
  faq: { en: 'faq', pt: 'faq', es: 'faq' },
  'api-keys': { en: 'api-keys', pt: 'chaves-api', es: 'claves-api' },
  integrations: { en: 'integrations', pt: 'integracoes', es: 'integraciones' },
  'error-500': { en: 'error-500', pt: 'erro-500', es: 'error-500' },
  'error-503': { en: 'error-503', pt: 'erro-503', es: 'error-503' },
  'coming-soon': { en: 'coming-soon', pt: 'em-breve', es: 'proximamente' },
  maintenance: { en: 'maintenance', pt: 'manutencao', es: 'mantenimiento' },
  success: { en: 'success', pt: 'sucesso', es: 'exito' },
  alerts: { en: 'alerts', pt: 'alertas', es: 'alertas' },
  avatars: { en: 'avatars', pt: 'avatares', es: 'avatares' },
  badge: { en: 'badge', pt: 'distintivos', es: 'insignias' },
  breadcrumb: { en: 'breadcrumb', pt: 'migalhas', es: 'migas' },
  buttons: { en: 'buttons', pt: 'botoes', es: 'botones' },
  cards: { en: 'cards', pt: 'cartoes', es: 'tarjetas' },
  images: { en: 'images', pt: 'imagens', es: 'imagenes' },
  videos: { en: 'videos', pt: 'videos', es: 'videos' },
  modals: { en: 'modals', pt: 'modais', es: 'modales' },
  tabs: { en: 'tabs', pt: 'abas', es: 'pestanas' },
  pagination: { en: 'pagination', pt: 'paginacao', es: 'paginacion' },
  progressbar: { en: 'progressbar', pt: 'barra-progresso', es: 'barra-progreso' },
  'line-chart': { en: 'line-chart', pt: 'grafico-de-linha', es: 'grafico-de-linea' },
  'bar-chart': { en: 'bar-chart', pt: 'grafico-de-barra', es: 'grafico-de-barras' },
  'pie-chart': { en: 'pie-chart', pt: 'grafico-pizza', es: 'grafico-circular' },
  signin: { en: 'signin', pt: 'entrar', es: 'iniciar-sesion' },
  signup: { en: 'signup', pt: 'cadastrar', es: 'registrarse' },
  'reset-password': { en: 'reset-password', pt: 'redefinir-senha', es: 'restablecer-contrasena' },
  'two-step-verification': { en: 'two-step-verification', pt: 'verificacao-dois-fatores', es: 'verificacion-dos-pasos' },
  settings: { en: 'settings', pt: 'configuracoes', es: 'configuracion' },
  notfound: { en: 'notfound', pt: 'nao-encontrado', es: 'no-encontrado' },
  'text-generator': { en: 'text-generator', pt: 'gerador-texto', es: 'generador-texto' },
  'image-generator': { en: 'image-generator', pt: 'gerador-imagem', es: 'generador-imagen' },
  'code-generator': { en: 'code-generator', pt: 'gerador-codigo', es: 'generador-codigo' },
  'video-generator': { en: 'video-generator', pt: 'gerador-video', es: 'generador-video' },
  products: { en: 'products', pt: 'produtos', es: 'productos' },
  'add-product': { en: 'add-product', pt: 'adicionar-produto', es: 'agregar-producto' },
  billing: { en: 'billing', pt: 'faturamento', es: 'facturacion' },
  invoices: { en: 'invoices', pt: 'faturas', es: 'facturas' },
  'create-invoice': { en: 'create-invoice', pt: 'criar-fatura', es: 'crear-factura' },
  transactions: { en: 'transactions', pt: 'transacoes', es: 'transacciones' },
  'ticket-list': { en: 'ticket-list', pt: 'lista-chamados', es: 'lista-tickets' },
  'ticket-reply': { en: 'ticket-reply', pt: 'responder-chamado', es: 'responder-ticket' },
  inbox: { en: 'inbox', pt: 'caixa-entrada', es: 'bandeja-entrada' },
  'email-detail': { en: 'email-detail', pt: 'detalhe-email', es: 'detalle-email' },
} as const;

export type PageSlugKey = keyof typeof pageSlugs;

export type LocaleCode = 'en' | 'pt' | 'es';

export function getPageSlug(page: PageSlugKey, locale: string): string {
  const pageSlug = pageSlugs[page];
  if (!pageSlug) return page;
  return pageSlug[locale as LocaleCode] || pageSlug.en;
}

export function getPath(page: PageSlugKey, locale: string): string {
  return `/${locale}/${getPageSlug(page, locale)}`;
}

export function getLocaleFromSlug(slug: string): PageSlugKey | null {
  const entries = Object.entries(pageSlugs) as [PageSlugKey, Record<LocaleCode, string>][];
  for (const [, slugs] of entries) {
    for (const locale of ['en', 'pt', 'es'] as LocaleCode[]) {
      if (slugs[locale] === slug) {
        return slug as unknown as PageSlugKey;
      }
    }
  }
  return null;
}

export function translatePath(currentPath: string, fromLocale: string, toLocale: string): string {
  const segments = currentPath.split('/').filter(Boolean);
  if (segments.length < 2) return `/${toLocale}`;

  const currentSlug = segments[1];
  const pageEntry = Object.entries(pageSlugs).find(([, slugs]) => {
    return slugs[fromLocale as LocaleCode] === currentSlug;
  });

  if (pageEntry) {
    const newSlug = pageEntry[1][toLocale as LocaleCode];
    return `/${toLocale}/${newSlug}`;
  }

  return `/${toLocale}`;
}
