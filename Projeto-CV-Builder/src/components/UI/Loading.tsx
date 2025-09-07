import { FaSpinner } from "react-icons/fa";

export default function Loading() {
    return(
        <div className="flex items-center justify-center h-screen ">
            <FaSpinner className="animate-spin text-6xl text-blue-600"/>
        </div>
    )
}