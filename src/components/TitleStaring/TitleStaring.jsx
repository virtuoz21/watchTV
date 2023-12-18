import useReqStarring from "../../hooks/useReqStarring";
import { Typography } from "@mui/material";
import './titleStaring.css';



function TitleStaring (id) {
    const { actorData } = useReqStarring(id);
    

    return(
        <Typography 
        variant="body2" 
        color="white" 
        sx={{
        marginBottom:'20px', 
        textAlign:'justify'
        }} 
        >
        <span className="starring">
            {actorData?.slice(0, 5).map((actor) => actor.person.name).join(", ")}
            {actorData && actorData.length > 5 && " etc"}
        </span>
        </Typography>
    )
}
 
export default TitleStaring;