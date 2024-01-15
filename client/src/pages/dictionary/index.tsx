import { Typography } from "@mui/material";
import ListCards from "../../components/list-cards";
import LayoutWithHeader from "../../layouts/with-header";

export default function DictionaryPage() {
    return (
        <LayoutWithHeader>
            <Typography
                variant="h4"
                component="h2"
                align="center"
                paddingBottom={"30px"}
            >
                Глоссарий терминов ВКР
            </Typography>
            <ListCards />
        </LayoutWithHeader>
    );
}
