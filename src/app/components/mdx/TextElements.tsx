import Link from "next/link";

export function Blockquote({className, ...props}: any) {
    return (
        <blockquote className={className + " p-2 border-l-2 border-neutral-950/20 dark:border-neutral-50/20 bg-neutral-950/10 dark:bg-neutral-50/10 text-neutral-950/60 dark:text-neutral-50/60 rounded-r-md"} {...props} />
    );
}

export function Paragraph({className, ...props}: any) {
    return (
        <p className={className + " leading-relaxed text-justify my-2"} {...props} />
    )
}

export function Emphasis({className, ...props}: any) {
    return (
        <span className={className + " italic"} {...props} />
    );
}

export function CLink({className, ...props}: any) {
    return (
        <Link className={className + " transition-all text-blue-400 hover:text-blue-600 hover:text-violet-400 dark:hover:text-violet-600 "} {...props} />
    );
}

export function HR({className, ...props}: any) {
    return (
        <hr className={className + " my-2 w-[99%] bg-neutral-950 dark:bg-neutral-50 block h-0.5 rounded-full"} {...props} />
    );
}

export function OL({className, ...props}: any) {
    return (
        <ol className={className + " list-decimal list-inside pl-2 my-1"} {...props} />
    );
}

export function UL({className, ...props}: any) {
    return (
        <ul className={className + " list-disc list-inside pl-2 my-1"} {...props} />
    );
}

export function Strong({className, ...props}: any) {
    return (
        <span className={className + " font-black"}  {...props} />
    );
}

export function ListItem({className, ...props}: any) {
    return (
        <li className={className + " my-1"}  {...props}/>
    )
}
