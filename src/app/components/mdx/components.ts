import * as Headers from './headers';
import { Code, InlineCode } from './Code';

const MDXCustomComponents = {
  h1: Headers.H1,
  h2: Headers.H2,
  h3: Headers.H3,
  h4: Headers.H4,
  h5: Headers.H5,
  h6: Headers.H6,
  pre: Code,
  code: InlineCode,
}

export default MDXCustomComponents;
