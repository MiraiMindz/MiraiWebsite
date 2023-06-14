export function H1({children}:any) {
  const idText = children?.replace(/ /g, "-").toLowerCase();
  return (
    <h1 id={idText} className="underline text-3xl my-2">{children}</h1>
  )
}

export function H2({children}:any) {
  const idText = children?.replace(/ /g, "-").toLowerCase();
  return (
  <h2 id={idText} className="underline text-2xl my-2">{children}</h2>
  );
}

export function H3({children}:any) {
  const idText = children?.replace(/ /g, "-").toLowerCase();
  return (
  <h3 id={idText} className="underline text-xl my-2">{children}</h3>
  );
}

export function H4({children}:any) {
  const idText = children?.replace(/ /g, "-").toLowerCase();
  return (
  <h4 id={idText} className="underline text-lg my-2">{children}</h4>
  );
}

export function H5({children}:any) {
  const idText = children?.replace(/ /g, "-").toLowerCase();
  return (
  <h5 id={idText} className="underline text-base my-2">{children}</h5>
  );
}

export function H6({children}:any) {
  const idText = children?.replace(/ /g, "-").toLowerCase();
  return (
  <h6 id={idText} className="underline text-sm my-2">{children}</h6>
  );
}
