export function Paragraph({className, ...props}: any) {
    return (
        <p className={className + " leading-relaxed text-justify my-2"}  {...props} />
    )
}
