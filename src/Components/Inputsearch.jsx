import {   useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

function Search() {

    const [result, setResults] = useState([]);
    const [search, setSearch] = useState("");
    const [cache,setCache] = useState({}) //cache is in Object 
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const fetchData = async () => {

        
        try {
            if(cache[search]){
            console.log("cahe result",result);
            setResults(cache[search]);
            return;
        }
            console.log("api data",result);
            
            const data = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
            const json = await data.json();
            setResults(json.recipes || []);
            console.log(json.recipes);
            setCache((prev)=>({...prev, [search]:json?.recipes}))
        } catch (err) {
            console.error("Error fetching:", err);
        }
    };

    useEffect(() => {
        const timer = setTimeout(fetchData,300) //for 3 missiseconds gap it will call api not infinite loop
        return () => { 
            clearTimeout(timer)  // need to clear the time time 
        }
    }, [search]);

    return (
        <>
            <div >
                <TextField
                    label="Search Box"
                    value={search}
                    onChange={handleChange}
                    margin="dense"
                    fullWidth
                />
            </div>
            <div>
                {result.map((r) => (
                    <span key={r.id} style={{ marginBottom: "6px" }}>
                        {r.name}
                    </span>
                ))}
            </div>

        </>
    );
}

export default Search;
