interface HeadersProps {
  children?: any;
}

export function H1(props: HeadersProps) {
  let pstr = String(props?.children);
  const idText = typeof pstr === 'string' ? pstr.replace(/ /g, "-").toLowerCase() : props?.children.toString().replace(/ /g, "-").toLowerCase();
  return (
    <div className="flex flex-col justify-center items-center"><h1 id={idText} className="font-black text-3xl my-2 text-center">{props?.children}</h1><hr className="my-2 rounded-full h-2 w-[99%] bg-neutral-950/15 dark:bg-neutral-50/15"/></div>
  )
}

export function H2(props: HeadersProps) {
  let pstr = String(props?.children);
  const idText = typeof pstr === 'string' ? pstr.replace(/ /g, "-").toLowerCase() : props?.children.toString().replace(/ /g, "-").toLowerCase();
  return (
    <h2 id={idText} className="font-black underline-offset-8 underline text-2xl my-2">{props?.children}</h2>
  );
}

export function H3(props: HeadersProps) {
  let pstr = String(props?.children);
  const idText = typeof pstr === 'string' ? pstr.replace(/ /g, "-").toLowerCase() : props?.children.toString().replace(/ /g, "-").toLowerCase();
  return (
    <h3 id={idText} className="font-black underline-offset-8 underline text-xl my-2">{props?.children}</h3>
  );
}

export function H4(props: HeadersProps) {
  let pstr = String(props?.children);
  const idText = typeof pstr === 'string' ? pstr.replace(/ /g, "-").toLowerCase() : props?.children.toString().replace(/ /g, "-").toLowerCase();
  return (
    <h4 id={idText} className="font-black underline-offset-8 underline text-lg my-2">{props?.children}</h4>
  );
}

export function H5(props: HeadersProps) {
  let pstr = String(props?.children);
  const idText = typeof pstr === 'string' ? pstr.replace(/ /g, "-").toLowerCase() : props?.children.toString().replace(/ /g, "-").toLowerCase();
  return (
    <h5 id={idText} className="font-black underline-offset-8 underline text-base my-2">{props?.children}</h5>
  );
}

export function H6(props: HeadersProps) {
  let pstr = String(props?.children);
  const idText = typeof pstr === 'string' ? pstr.replace(/ /g, "-").toLowerCase() : props?.children.toString().replace(/ /g, "-").toLowerCase();
  return (
    <h6 id={idText} className="font-black underline-offset-8 underline text-sm my-2">{props?.children}</h6>
  );
}
