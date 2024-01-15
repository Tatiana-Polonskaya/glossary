import { Node } from "reactflow";
import ActionAreaCard from "../card";
import { useGetNodesQuery } from "../../store/term-api";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

export default function ListCards() {
    const { data, isLoading } = useGetNodesQuery();
    const [nodes, setNodes] = useState<Node[]>();

    useEffect(() => {
        if (data) {
            setNodes(data);
        }
    }, [data]);

    return !isLoading ? (
        <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
        >
            {nodes &&
                nodes.map((node) => (
                    <Grid item xs={4} md={3} key={node.id}>
                        <ActionAreaCard {...node} />
                    </Grid>
                ))}
        </Grid>
    ) : (
        <>Loading...</>
    );
}
