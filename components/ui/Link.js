import NextLink from "next/link";
export default function Link({href, children}){
    return <div className="group"><NextLink href={href}>{children}</NextLink><div className="m-1 border-b-2 border-black opacity-0 duration-200 group-hover:opacity-100"></div></div>
}