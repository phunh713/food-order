import classes from "./Backdrop.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
	const portalEle = document.getElementById("overlays");
	return ReactDOM.createPortal(<div className={classes.backdrop} onClick={props.onClick}></div>, portalEle);
};

export default Backdrop