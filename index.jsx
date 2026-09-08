import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))
// import Header from "./Header"
// import Main from "./Main"
// import Footer from "./Footer"
import App from "./App"

function Page(){
    return(
        <>
            {/* <Header/>
             <Main/>
             <Footer/> */}
             <App/>
        </>
    )
}
root.render(
        Page()
) 