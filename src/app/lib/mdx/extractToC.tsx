interface LinkProps {
  level: number;
  children: any;
  href: string;
}

function Link(props: LinkProps) {
  let padding = ""
  switch (props.level) {
    case 1:
      padding = "pl-1";
      break;
    case 2:
      padding = "pl-2";
      break;
    case 3:
      padding = "pl-3";
      break;
    case 4:
      padding = "pl-4";
      break;
    case 5:
      padding = "pl-5";
      break;
    case 6:
      padding = "pl-6";
      break;

    default:
      padding = "pl-0";
      break;
  }

  let classes = `${padding} text-sm`;

  return <a className={classes} href={`#${props.href}`}>{props.children}</a>;
}

function countHashes(str: string): number {
  const regex = /#/g;
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}


export async function getHeadings(source: string) {
  const headingLines = source.split("\n").filter((line: string) => {
    return line.match(/^###*\s/);
  });

  let headersList: React.JSX.Element[] = [];
  headingLines.map((raw: string) => {
    const text = raw.replace(/^#*\s/, "");
    const headerLink = text.replace(/ /g, "-").toLowerCase();
    const level = countHashes(raw);
    headersList.push(<li className="truncate transition-all ml-0 hover:ml-4 hover:text-violet-400 hover:dark:text-violet-600"><Link level={level} href={`#${headerLink}`}>{`> ${text}`}</Link></li>);
  });

  return headersList;
}
