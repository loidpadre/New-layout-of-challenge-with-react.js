import image from "../../../../assets/image-hero-desktop.png"
import { ImageArea } from "./style"
function Image(){
    return(
        <ImageArea>
            <img src={image} alt="backgorun-image" />
        </ImageArea>
    )
}
export default Image