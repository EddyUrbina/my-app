import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();
    return (
        <div id="erro-page">
            <h1>oops!</h1>
            <p>sorry, an unexpected error has ocurred.</p>
            <p>
                <i>{error.statusText|| error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage;