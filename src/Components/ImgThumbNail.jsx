export default function ImgThumbNail ({imgSrc, imgAlt}) {
const imgStyle = {
    padding: "4px",
    borderRadius: "8px",
    border: "1px solid red",
    maxwidth: "100%",
    boxSizing: "border-box",
    marginBottom : "5px"

}
return (
    <img
    src = {imgSrc}
    alt = {imgAlt}
    style = {imgStyle}
    />
)
}