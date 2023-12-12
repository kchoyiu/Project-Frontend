import TopNavBar from "../component/TopNavBar.tsx";

export default function ErrorPage() {
    return (
        <>
            <TopNavBar/>
            <div style={{margin: "auto auto", background: "black"}} className="d-flex justify-content-center">
                <img src="https://cdn.dribbble.com/users/2771385/screenshots/16267270/media/4d6fd1687943c6f90e7cb93111050c65.gif"
                     style={{width: "60%"}}/>
            </div>
        </>
    )
}