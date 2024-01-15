import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Node } from "reactflow";

type Props = {
    link?: string;
} & Node;

export default function ActionAreaCard(props: Props) {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center"
                    >
                        {props.data.label}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="justify"
                    >
                        {props.data.desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}




