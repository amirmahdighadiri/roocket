import React , {useEffect,useState} from 'react';

function TagBox({tag}) {
    const [result , setResult] = useState("");
    const tagPattern =  /\s+/g
    useEffect(() => {
       setResult(tag.replace(tagPattern , "_"))
    }, []);

    return (
        <div className="inline-block bg-gray-100 hover:bg-gray-400 dark:bg-dark-890 dark:text-gray-920 text-biscay-700 hover:text-white font-Mult-Font-Bold rounded text-sm px-3 pt-1.5 pb-1 cursor-pointer transition-all">
            #{result}
        </div>
    );
}

export default TagBox;