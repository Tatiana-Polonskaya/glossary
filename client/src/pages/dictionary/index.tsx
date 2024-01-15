import { Typography } from "@mui/material";
import ListTerms from "../../components/list-terms";
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
            <ListTerms />
        </LayoutWithHeader>
    );
}
