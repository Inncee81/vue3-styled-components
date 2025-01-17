import * as CSS from 'csstype'
import * as Vue from 'vue'

type CSSProperties = CSS.Properties<string | number>

type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject }

interface CSSObject extends CSSProperties, CSSPseudos {
  [key: string]: CSSObject | string | number | undefined
}

type CSS = CSSProperties

type Component = Vue.Component | Vue.DefineComponent

type ThemeObject = { theme: { type: any; required: true } }

type StyledHTMLElement = {
  [K in keyof IntrinsicElementAttributes]: (
    str: TemplateStringsArray,
    ...placeholders: ((
      props: Vue.ExtractPropTypes<ThemeObject>
    ) => string | { toString: () => string })[]
  ) => Vue.DefineComponent<IntrinsicElementAttributes[K]>
}

type StyledFunctionHTMLElement = {
  <
    Props = { [key: string]: Vue.Prop<unknown> },
    K extends keyof IntrinsicElementAttributes = any
  >(
    component: K,
    props?: Props
  ): (
    str: TemplateStringsArray,
    ...placeholders: ((
      props: Vue.ExtractPropTypes<Props & ThemeObject>
    ) => string | { toString: () => string })[]
  ) => Vue.DefineComponent<
    Vue.ExtractPropTypes<Props> & IntrinsicElementAttributes[K]
  >
}

type StyledVueComponent = {
  <Props, T extends Component>(component: T): (
    str: TemplateStringsArray,
    ...placeholders: ((
      props: Vue.ExtractPropTypes<ThemeObject>
    ) => string | { toString: () => string })[]
  ) => Vue.DefineComponent<Props> & T
}

export type Styled = StyledHTMLElement &
  StyledFunctionHTMLElement &
  StyledVueComponent

interface IntrinsicElementAttributes {
  a: Vue.AnchorHTMLAttributes
  abbr: Vue.HTMLAttributes
  address: Vue.HTMLAttributes
  area: Vue.AreaHTMLAttributes
  article: Vue.HTMLAttributes
  aside: Vue.HTMLAttributes
  audio: Vue.AudioHTMLAttributes
  b: Vue.HTMLAttributes
  base: Vue.BaseHTMLAttributes
  bdi: Vue.HTMLAttributes
  bdo: Vue.HTMLAttributes
  blockquote: Vue.BlockquoteHTMLAttributes
  body: Vue.HTMLAttributes
  br: Vue.HTMLAttributes
  button: Vue.ButtonHTMLAttributes
  canvas: Vue.CanvasHTMLAttributes
  caption: Vue.HTMLAttributes
  cite: Vue.HTMLAttributes
  code: Vue.HTMLAttributes
  col: Vue.ColHTMLAttributes
  colgroup: Vue.ColgroupHTMLAttributes
  data: Vue.DataHTMLAttributes
  datalist: Vue.HTMLAttributes
  dd: Vue.HTMLAttributes
  del: Vue.DelHTMLAttributes
  details: Vue.DetailsHTMLAttributes
  dfn: Vue.HTMLAttributes
  dialog: Vue.DialogHTMLAttributes
  div: Vue.HTMLAttributes
  dl: Vue.HTMLAttributes
  dt: Vue.HTMLAttributes
  em: Vue.HTMLAttributes
  embed: Vue.EmbedHTMLAttributes
  fieldset: Vue.FieldsetHTMLAttributes
  figcaption: Vue.HTMLAttributes
  figure: Vue.HTMLAttributes
  footer: Vue.HTMLAttributes
  form: Vue.FormHTMLAttributes
  h1: Vue.HTMLAttributes
  h2: Vue.HTMLAttributes
  h3: Vue.HTMLAttributes
  h4: Vue.HTMLAttributes
  h5: Vue.HTMLAttributes
  h6: Vue.HTMLAttributes
  head: Vue.HTMLAttributes
  header: Vue.HTMLAttributes
  hgroup: Vue.HTMLAttributes
  hr: Vue.HTMLAttributes
  html: Vue.HtmlHTMLAttributes
  i: Vue.HTMLAttributes
  iframe: Vue.IframeHTMLAttributes
  img: Vue.ImgHTMLAttributes
  input: Vue.InputHTMLAttributes
  ins: Vue.InsHTMLAttributes
  kbd: Vue.HTMLAttributes
  keygen: Vue.KeygenHTMLAttributes
  label: Vue.LabelHTMLAttributes
  legend: Vue.HTMLAttributes
  li: Vue.LiHTMLAttributes
  link: Vue.LinkHTMLAttributes
  main: Vue.HTMLAttributes
  map: Vue.MapHTMLAttributes
  mark: Vue.HTMLAttributes
  menu: Vue.MenuHTMLAttributes
  meta: Vue.MetaHTMLAttributes
  meter: Vue.MeterHTMLAttributes
  nav: Vue.HTMLAttributes
  noindex: Vue.HTMLAttributes
  noscript: Vue.HTMLAttributes
  object: Vue.ObjectHTMLAttributes
  ol: Vue.OlHTMLAttributes
  optgroup: Vue.OptgroupHTMLAttributes
  option: Vue.OptionHTMLAttributes
  output: Vue.OutputHTMLAttributes
  p: Vue.HTMLAttributes
  param: Vue.ParamHTMLAttributes
  picture: Vue.HTMLAttributes
  pre: Vue.HTMLAttributes
  progress: Vue.ProgressHTMLAttributes
  q: Vue.QuoteHTMLAttributes
  rp: Vue.HTMLAttributes
  rt: Vue.HTMLAttributes
  ruby: Vue.HTMLAttributes
  s: Vue.HTMLAttributes
  samp: Vue.HTMLAttributes
  script: Vue.ScriptHTMLAttributes
  section: Vue.HTMLAttributes
  select: Vue.SelectHTMLAttributes
  small: Vue.HTMLAttributes
  source: Vue.SourceHTMLAttributes
  span: Vue.HTMLAttributes
  strong: Vue.HTMLAttributes
  style: Vue.StyleHTMLAttributes
  sub: Vue.HTMLAttributes
  summary: Vue.HTMLAttributes
  sup: Vue.HTMLAttributes
  table: Vue.TableHTMLAttributes
  template: Vue.HTMLAttributes
  tbody: Vue.HTMLAttributes
  td: Vue.TdHTMLAttributes
  textarea: Vue.TextareaHTMLAttributes
  tfoot: Vue.HTMLAttributes
  th: Vue.ThHTMLAttributes
  thead: Vue.HTMLAttributes
  time: Vue.TimeHTMLAttributes
  title: Vue.HTMLAttributes
  tr: Vue.HTMLAttributes
  track: Vue.TrackHTMLAttributes
  u: Vue.HTMLAttributes
  ul: Vue.HTMLAttributes
  var: Vue.HTMLAttributes
  video: Vue.VideoHTMLAttributes
  wbr: Vue.HTMLAttributes
  webview: Vue.WebViewHTMLAttributes

  // SVG
  svg: Vue.SVGAttributes

  animate: Vue.SVGAttributes
  animateMotion: Vue.SVGAttributes
  animateTransform: Vue.SVGAttributes
  circle: Vue.SVGAttributes
  clipPath: Vue.SVGAttributes
  defs: Vue.SVGAttributes
  desc: Vue.SVGAttributes
  ellipse: Vue.SVGAttributes
  feBlend: Vue.SVGAttributes
  feColorMatrix: Vue.SVGAttributes
  feComponentTransfer: Vue.SVGAttributes
  feComposite: Vue.SVGAttributes
  feConvolveMatrix: Vue.SVGAttributes
  feDiffuseLighting: Vue.SVGAttributes
  feDisplacementMap: Vue.SVGAttributes
  feDistantLight: Vue.SVGAttributes
  feDropShadow: Vue.SVGAttributes
  feFlood: Vue.SVGAttributes
  feFuncA: Vue.SVGAttributes
  feFuncB: Vue.SVGAttributes
  feFuncG: Vue.SVGAttributes
  feFuncR: Vue.SVGAttributes
  feGaussianBlur: Vue.SVGAttributes
  feImage: Vue.SVGAttributes
  feMerge: Vue.SVGAttributes
  feMergeNode: Vue.SVGAttributes
  feMorphology: Vue.SVGAttributes
  feOffset: Vue.SVGAttributes
  fePointLight: Vue.SVGAttributes
  feSpecularLighting: Vue.SVGAttributes
  feSpotLight: Vue.SVGAttributes
  feTile: Vue.SVGAttributes
  feTurbulence: Vue.SVGAttributes
  filter: Vue.SVGAttributes
  foreignObject: Vue.SVGAttributes
  g: Vue.SVGAttributes
  image: Vue.SVGAttributes
  line: Vue.SVGAttributes
  linearGradient: Vue.SVGAttributes
  marker: Vue.SVGAttributes
  mask: Vue.SVGAttributes
  metadata: Vue.SVGAttributes
  mpath: Vue.SVGAttributes
  path: Vue.SVGAttributes
  pattern: Vue.SVGAttributes
  polygon: Vue.SVGAttributes
  polyline: Vue.SVGAttributes
  radialGradient: Vue.SVGAttributes
  rect: Vue.SVGAttributes
  stop: Vue.SVGAttributes
  switch: Vue.SVGAttributes
  symbol: Vue.SVGAttributes
  text: Vue.SVGAttributes
  textPath: Vue.SVGAttributes
  tspan: Vue.SVGAttributes
  use: Vue.SVGAttributes
  view: Vue.SVGAttributes
}

export const ThemeProvider: Vue.DefineComponent<ThemeObject>

export const css: (input: TemplateStringsArray) => string

export const styled: Styled
export default styled
