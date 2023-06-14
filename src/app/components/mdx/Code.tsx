"use client";
//import SyntaxHighlighter from 'react-syntax-highlighter';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxHighlighterTheme from './SyntaxHighlighterTheme/syntaxHighlighterTheme.ts';
//import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import sh from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import go from 'react-syntax-highlighter/dist/esm/languages/hljs/go';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import ptext from 'react-syntax-highlighter/dist/esm/languages/hljs/plaintext';
import py from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import nasm from 'react-syntax-highlighter/dist/esm/languages/hljs/x86asm';

SyntaxHighlighter.registerLanguage('python', py);
SyntaxHighlighter.registerLanguage('bash', sh);
SyntaxHighlighter.registerLanguage('go', go);
SyntaxHighlighter.registerLanguage('x86asm', nasm);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('plaintext', ptext);

export function Code({className, ...props}: any) {
  console.log(syntaxHighlighterTheme);
  const match = /language-(\w+)/.exec(className || '');
  if (match) {
    return <div className='hljs-wrapper'><SyntaxHighlighter useInlineStyles={false} customStyle={syntaxHighlighterTheme} showLineNumbers={true} wrapLongLines={true} language={match[1]} {...props} /></div>
  } else {
    // return <code className={className} {...props} />
    <code className='border rounded-sm border-neutral-500 dark:border-neutral-600 p-1' {...props} />
  }
}

interface InlineCodeProps {
  children?: any;
}

export function InlineCode(props: InlineCodeProps) {
  return (
    <code className='border rounded-sm border-neutral-500 dark:border-neutral-600 p-1'>{props?.children}</code>
  );
}
