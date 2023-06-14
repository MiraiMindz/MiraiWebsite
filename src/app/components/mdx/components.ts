import * as Headers from './headers';
import * as TextElements from './TextElements';
import { Code } from './Code';
import { CImage } from './Image';

const MDXCustomComponents = {
  h1: Headers.H1,
  h2: Headers.H2,
  h3: Headers.H3,
  h4: Headers.H4,
  h5: Headers.H5,
  h6: Headers.H6,
  code: Code,
  p: TextElements.Paragraph,
  blockquote: TextElements.Blockquote,
  em: TextElements.Emphasis,
  hr: TextElements.HR,
  ol: TextElements.OL,
  strong: TextElements.Strong,
  ul: TextElements.UL,
  a: TextElements.CLink,
  img: CImage
}

export default MDXCustomComponents;
