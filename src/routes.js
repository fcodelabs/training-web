import { render } from "@testing-library/react";
import Home from "./Views/Home/Home";
import Posts from "./Views/Posts/Posts";

const routes = [
    {
        path: "/",
        render: Home,
        layout: "/"
    },
    {
        path: "/posts",
        render: Posts,
        layout: "/"
    }
]

export default routes;