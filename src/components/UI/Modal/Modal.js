import { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";
import ReacDOM from "react-dom";

const Modal = (props) => {
	const portalEle = document.getElementById("overlays");
	return (
		<Fragment>
			<Backdrop onClick={props.onClose}/>
			{ReacDOM.createPortal(<div className={classes.modal}>{props.children}</div>, portalEle)}
		</Fragment>
	);
};

export default Modal;
