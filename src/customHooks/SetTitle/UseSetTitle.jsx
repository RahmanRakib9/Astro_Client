import { useEffect } from "react";


const useSetTitle = (title) => {
    useEffect(() => {
        document.title = `${title} Astrosphere`;
    }, [title])
}

export default useSetTitle;
