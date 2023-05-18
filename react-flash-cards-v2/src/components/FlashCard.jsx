import { useEffect, useState } from "react";

export function FlashCard({ title = "title", description = "description", showTitleOrDescription}) {
    const [ showTitle, setShowTitle ] = useState(showTitleOrDescription);

    useEffect(() => {
        setShowTitle(showTitleOrDescription);
    }, [showTitleOrDescription])

    return (
        <div 
            className="shadow-lg cursor-pointer py-4 px-10 max-w-md select-none rounded-3xl flex flex-row items-center justify-center font-semibold text-xl"
            onClick={() => setShowTitle(!showTitle)}
        >
            { showTitle ? title : description }
        </div>
    );
}
