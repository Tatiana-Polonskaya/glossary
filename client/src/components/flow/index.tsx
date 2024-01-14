import { useCallback, useState } from "react";
import ReactFlow, {
    applyEdgeChanges,
    applyNodeChanges,
    addEdge,
    MiniMap,
    Node,
    Edge,
    Controls,
    Background,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
} from "reactflow";
import "reactflow/dist/style.css";
import { initialEdges, initialNodes } from "../../consts/data";

function Flow() {
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);

    const onNodesChange: OnNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange: OnEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect: OnConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
        >
            <MiniMap />
            <Controls />
            <Background />
        </ReactFlow>
    );
}
export default Flow;
