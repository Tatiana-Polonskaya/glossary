import { PropsWithChildren } from "react";
import Header from "../../components/header";
import "./style.css";

export interface Props {
    heading: string;
}

const LayoutWithHeader = (props: PropsWithChildren) => {
    return (
        <div className="container___layout-with-header">
            <Header />
            <div className="content___layout-with-header">
                {props.children}
            </div>
        </div>
    );
};

export default LayoutWithHeader;
