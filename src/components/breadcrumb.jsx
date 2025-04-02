import Image from "next/image";

export const Breadcrumb = ({ title }) => {
    return (
        <div className="flex gap-4 [&>*]:py-3">
            <h4 className="text-lg">Workspace</h4>
            <Image src="./arrow-right.svg" width={24} height={24} alt="Arrow" />
            <h4 className="text-lg text-royal-blue font-medium border-b-2">{title}</h4>
        </div>
    );
}