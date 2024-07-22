import AnotherComponent from "./AnotherComponent";
import ComponentWithProps from "./ComponentWithProps";
import MyClassComponent from "./MyClassComponent";

const MyComponent = () => {
    return (
        <>
            <h1>Hello World</h1>
            <AnotherComponent />
            <MyClassComponent />
            <ComponentWithProps />
            <ComponentWithProps content="Content passed from props" number={5 + 5} />
        </>
    );
}

export default MyComponent;