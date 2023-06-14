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
      return <div className='rounded-lg bg-neutral-900/5 dark:bg-neutral-100/5 p-2 border-2 border-neutral-950 dark:border-neutral-50 w-[40ch] md:w-[80ch] my-1'><h1 className='text-neutral-950 dark:text-neutral-50 text-center'>Saida</h1><hr className='h-0.5 rounded-full bg-neutral-950 dark:bg-neutral-50 my-2 w-[99%]'/> <div className={className + " text-left overflow-x-auto"} {...props}/> </div>
    }
  } else {
    return <code className={className + " border rounded-md border-neutral-950/20 dark:border-neutral-50/20 p-0.5 bg-neutral-900/5 dark:bg-neutral-100/5 break-all max-w-[40ch] md:max-w-[80ch] whitespace-normal"} {...props} />
  }
}
