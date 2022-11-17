import { useContext } from "react";
import { AmazonContext } from "./Amazon";
function Ama(){
    const AmarContext=useContext(AmazonContext)
    return(
        <div>
            here={AmarContext.name}
        </div>
    )
}
export default Ama;