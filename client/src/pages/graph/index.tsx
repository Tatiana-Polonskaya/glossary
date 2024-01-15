import { Typography } from "@mui/material";
import Flow from "../../components/flow";
import LayoutWithHeader from "../../layouts/with-header";
import "./style.css";

export default function GraphPage() {
    return (
        <LayoutWithHeader>
            <Typography
                variant="h4"
                component="h2"
                align="center"
                paddingBottom={"30px"}
            >
                MindMap
            </Typography>

            <div className="graph" style={{ height: "80vh" }}>
                <Flow />
            </div>
        </LayoutWithHeader>
    );
}
