import ErrorBoundary from "./ErrorBoundary";

export default {
    title: "ErrorBoundary",
    component: ErrorBoundary
}

const ComponentWithoutError = () => (
    <h1>No errors</h1>
)

const prop = undefined;
const ComponentWithError = () => (
    <h1>{prop.hola}</h1>
)

export const ErrorBoundaryExampleWithError = () => {
    return(
        <ErrorBoundary>
            <ComponentWithError/>
        </ErrorBoundary>
    )
}

export const ErrorBoundaryExampleWithoutError = () => {
    return(
        <ErrorBoundary>
            <ComponentWithoutError />
        </ErrorBoundary>
    )
}