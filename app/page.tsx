import Header from "@/components/Header";
import Posts from "@/components/Posts";
import { FC } from "react";

const Page: FC = ({ }) => {

    return (
        <>
        <Header></Header>
            <div className="pt-8">
                <Posts />
            </div>
        </>
    );
};

export default Page;
