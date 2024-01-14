import { Node } from "reactflow";
import ActionAreaCard from "../card";
import Container from "@mui/material/Container";
import { useGetNodesQuery } from "../../store/term-api";
import { useEffect, useState } from "react";

export default function ListTerms() {
    const { data, isLoading } = useGetNodesQuery();
    const [nodes, setNodes] = useState<Node[]>();

    useEffect(() => {
        if (data) {
            setNodes(data);
        }
    }, [data]);

    return !isLoading ? (
        <Container
            sx={{
                display: "flex",
                flexFlow: "row wrap",
                gap: "20px",
            }}
        >
            {nodes &&
                nodes.map((node) => <ActionAreaCard key={node.id} {...node} />)}
        </Container>
    ) : (
        <>Loading</>
    );
}
