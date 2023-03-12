import { useRouteError } from "react-router-dom"
const ErrorComponent = ()=>{
    const err = useRouteError()
    console.log("err",err);
    return(
        <div>
            {console.log(err)}
            <h3>{err.status} {err.error.message}</h3>
            <h4>{err.statusText}</h4>
        </div>
    )
}
export default ErrorComponent