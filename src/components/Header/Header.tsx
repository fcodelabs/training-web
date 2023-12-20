import { useDispatch, useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/reducers/userReducer";


interface User {
id: string;
name: string;
}


export default function Header() {


const dispatch = useDispatch();
const username: User[] = useSelector((state: any) => state.users);
console.log(username.length);


useEffect(() => {
dispatch<any>(fetchUsers());
}, [dispatch]);




return (
    <div
        style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "60px 60px 30px 60px",
        }}
>
<Logo />
<div
style={{
display: "flex",
flexDirection: "column",
alignItems: "center",
gap: "4px",
}}
>
<img src={'/images/frame.png'} alt="" style={{ height: "72px", width: "72px" }} />
<div style={{ fontSize: "17px", fontWeight: "500" }}>William</div>
</div>
</div>
);
}





