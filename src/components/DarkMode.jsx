import { useContext } from "react";
import { UserContext } from "../context/DarkModeContext";
export const DarkMode = () => {

    const {isdark, setIsDark} = useContext(UserContext)
    return (
        <div>
            <div className="container1">
                <span style={{ color: isdark ? "blue" : "#c96dfd" }} className="fs-3">☽</span>
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" onClick={()=>setIsDark(!isdark)} />
                        <span className="slider round"> </span>
                    </label>
                </div>
                <span style={{ color: isdark ? "#c96dfd" : "grey" }} className="fs-3">☀︎</span>
            </div>
        </div>
    )

}