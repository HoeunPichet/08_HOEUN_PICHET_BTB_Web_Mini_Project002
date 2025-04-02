import Image from "next/image";

export const Breadcrumb = ({ main, title, status }) => {
    return (
        <div className="flex gap-4 [&>*]:py-3">
            <h4 className="text-lg capitalize">{main}</h4>
            {status && <Image src="/arrow-right.svg" width={24} height={24} alt="Arrow" />}
            <h4 className="text-lg text-royal-blue font-medium border-b-2">{status && title}</h4>
        </div>
    );
}