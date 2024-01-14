import { Node, Edge } from "reactflow";

export const initialNodes: Node[] = [
    {
        id: "1",
        type: "input",
        data: {
            label: "Интерактивные обучающие веб-приложения",
            desc: "Интерактивные обучающие веб-приложения",
        },
        position: { x: 500, y: 100 },
    },
    {
        id: "2",
        data: { label: "Проектирование", desc: "" },
        type: "default",
        position: { x: 500, y: 200 },
    },
    {
        id: "3",
        data: { label: "Подходы к проектированию", desc: "" },
        position: { x: 200, y: 350 },
    },
    {
        id: "4",
        data: { label: "Критерии эффективности", desc: "" },
        position: { x: 500, y: 350 },
    },
    {
        id: "5",
        data: { label: "Удовлетворенность пользователей", desc: "" },
        position: { x: 850, y: 350 },
    },
    {
        id: "6",
        data: { label: "Адаптивность", desc: "" },
        position: { x: 1050, y: 450 },
    },
    {
        id: "7",
        data: { label: "Доступность", desc: "" },
        position: { x: 700, y: 450 },
    },
    {
        id: "8",
        type: "output",
        data: { label: "Эффективность затрат", desc: "" },
        position: { x: 500, y: 650 },
    },
    {
        id: "9",
        type: "output",
        data: { label: "Цели обучения", desc: "" },
        position: { x: 500, y: 650 },
    },
    {
        id: "10",
        type: "output",
        data: { label: "Уровень вовлеченности пользователя", desc: "" },
        position: { x: 500, y: 650 },
    },
    {
        id: "11",
        type: "output",
        data: { label: "Уровень знаний и навык", desc: "" },
        position: { x: 500, y: 650 },
    },
    {
        id: "12",
        type: "output",
        data: { label: "Мотивация к обучению", desc: "" },
        position: { x: 500, y: 650 },
    },
    {
        id: "13",
        type: "output",
        data: { label: "Индивидуальный подход", desc: "" },
        position: { x: 500, y: 650 },
    },
    {
        id: "14",
        type: "output",
        data: { label: "Обратная связь", desc: "" },
        position: { x: 500, y: 650 },
    },
    {
        id: "15",
        type: "output",
        data: { label: "Мультимедийные материалы", desc: "" },
        position: { x: 500, y: 650 },
    },
    {
        id: "16",
        type: "output",
        data: { label: "Тестирование", desc: "" },
        position: { x: 500, y: 650 },
    },
];

export const initialEdges: Edge[] = [
    { id: "el1-2", source: "1", target: "2" },
    { id: "el2-3", source: "2", target: "3" },
    { id: "el2-4", source: "2", target: "4" },
    { id: "el2-5", source: "2", target: "5" },
    { id: "el6-1", source: "1", target: "6", label: "Back to Input" },
];
