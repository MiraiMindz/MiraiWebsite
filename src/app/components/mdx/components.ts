import * as Headers from './headers';
import { Code } from './Code';
import { Paragraph } from './Paragraph';

const MDXCustomComponents = {
  h1: Headers.H1,
  h2: Headers.H2,
  h3: Headers.H3,
  h4: Headers.H4,
  h5: Headers.H5,
  h6: Headers.H6,
  code: Code,
  p: Paragraph
}

export default MDXCustomComponents;
