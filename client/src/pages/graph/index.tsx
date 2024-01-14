import Flow from "../../components/flow";
import LayoutWithHeader from "../../layouts/with-header";
import "./style.css";

export default function GraphPage() {
    return (
        <LayoutWithHeader>
            GraphPage
            <div className="graph" style={{ height: "90vh" }}>
                <Flow />
            </div>
        </LayoutWithHeader>
    );
}
