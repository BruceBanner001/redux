import { useSelector } from "react-redux";

const FunctionalComponent = () => {
    const count = useSelector((state) => {
        return state.count
    })
}

export default FunctionalComponent;