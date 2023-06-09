function countHashes(str: string): number {
  const regex = /#/g;
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}


export async function getHeadings(source: string) {
  const headingLines = source.split("\n").filter((line: string) => {
    return line.match(/^###*\s/); // need 3 instead of 1 to skip parsing code blocks
  });

  let hl: React.JSX.Element[] = [];
  headingLines.map((raw: string) => {
    const text = raw.replace(/^#*\s/, "");
    const headerLink = text.replace(/ /g, "-").toLowerCase();
    const level = countHashes(raw);
    console.log(level, text)
    hl.push(<a href={`#${headerLink}`}>{text}</a>);
  });

  return hl;
}
