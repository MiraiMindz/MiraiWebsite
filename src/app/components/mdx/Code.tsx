"use client";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxHighlighterTheme from './SyntaxHighlighterTheme/syntaxHighlighterTheme.ts';
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
  const match = /language-(\w+)/.exec(className || '');
  const output = /language-output/.exec(className || '');
  if (match) {
    if (!output) {
      return <div className='hljs-wrapper'><SyntaxHighlighter useInlineStyles={false} customStyle={syntaxHighlighterTheme} showLineNumbers={true} wrapLongLines={true} language={match[1]} {...props} /></div>
    } else {
      return <div className='rounded-lg bg-neutral-900/10 dark:bg-neutral-100/10 p-2 flex flex-col justify-start items-center border-2 border-neutral-950 dark:border-neutral-50 w-[40ch] md:w-[80ch] my-1 overflow-x-auto'><h1 className='block text-neutral-950 dark:text-neutral-50 text-center'>Saida</h1><hr className='h-0.5 rounded-full bg-neutral-900 dark:bg-neutral-100 my-2 w-[99%]'/> <div className={className + " block text-left"} {...props}/> </div>
    }
  } else {
    return <code className={className + " border rounded-md border-neutral-950 dark:border-neutral-50 p-0.5"} {...props} />
  }
}
