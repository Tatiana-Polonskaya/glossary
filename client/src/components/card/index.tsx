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
                {/* <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                /> */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.data.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.data.desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
