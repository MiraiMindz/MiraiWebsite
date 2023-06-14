import Link from "next/link";

export function Blockquote({className, ...props}: any) {
    return (
        <blockquote className={className + " p-2 border-l-2 border-neutral-950/10 dark:border-neutral-50/10"} {...props} />
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
        <Link className={className + " transition-all hover:text-blue-400 dark:hover:text-blue-600 "} {...props} />
    );
}

export function HR({className, ...props}: any) {
    return (
        <hr className={className + " h-0.5 rounded-full bg-neutral-950 dark:bg-neutral-50 my-2 w-[99%]"} {...props} />
    );
}

export function OL({className, ...props}: any) {
    return (
        <ol className={className + " list-decimal list-inside"} {...props} />
    );
}

export function UL({className, ...props}: any) {
    return (
        <ul className={className + " list-disc list-inside"} {...props} />
    );
}

export function Strong({className, ...props}: any) {
    return (
        <span className={className + " font-black"}  {...props} />
    );
}
