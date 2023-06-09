export function H1({children}:any) {
  const idText = children.replace(/ /g, "-").toLowerCase();
  return (
    <h1 id={idText} className="underline text-3xl">{children}</h1>
  )
}

export function H2({children}:any) {
  const idText = children.replace(/ /g, "-").toLowerCase();
  return (
  <h2 id={idText} className="underline text-2xl">{children}</h2>
  );
}

export function H3({children}:any) {
  const idText = children.replace(/ /g, "-").toLowerCase();
  return (
  <h3 id={idText} className="underline text-xl">{children}</h3>
  );
}

export function H4({children}:any) {
  const idText = children.replace(/ /g, "-").toLowerCase();
  return (
  <h4 id={idText} className="underline text-lg">{children}</h4>
  );
}

export function H5({children}:any) {
  const idText = children.replace(/ /g, "-").toLowerCase();
  return (
  <h5 id={idText} className="underline text-base">{children}</h5>
  );
}

export function H6({children}:any) {
  const idText = children.replace(/ /g, "-").toLowerCase();
  return (
  <h6 id={idText} className="underline text-sm">{children}</h6>
  );
}
