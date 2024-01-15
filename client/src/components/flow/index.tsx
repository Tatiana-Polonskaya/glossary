import { useEffect, useState } from "react";
import ReactFlow, {
    MiniMap,
    Node,
    Edge,
    Controls,
    Background,
} from "reactflow";
import "reactflow/dist/style.css";
import { useGetEdgesQuery, useGetNodesQuery } from "../../store/term-api";

function Flow() {
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    const { data: initialNodes, isLoading: isLoadingNodes } =
        useGetNodesQuery();
    const { data: initialEdges, isLoading: isLoadingEdges } =
        useGetEdgesQuery();

    useEffect(() => {
        if (initialNodes) {
            setNodes(initialNodes);
        }
    }, [initialNodes]);

    useEffect(() => {
        if (initialEdges) {
            setEdges(initialEdges);
        }
    }, [initialEdges]);

    return !isLoadingNodes && !isLoadingEdges ? (
        <ReactFlow nodes={nodes} edges={edges} fitView nodesDraggable={false}>
            <MiniMap />
            <Controls />
            <Background />
        </ReactFlow>
    ) : (
        <>Loading</>
    );
}
export default Flow;
