import { useParams } from "react-router-dom";

export const DetailsField = () => {
    const {slug} = useParams()
    return <div>{slug}</div>;
};