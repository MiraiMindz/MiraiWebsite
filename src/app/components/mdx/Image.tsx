import Image from 'next/image';

export function CImage({className, ...props}: any) {
    return (
        <Image className={className + ' rounded-md my-2'} {...props} />
    )
}
