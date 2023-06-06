// No need to use this hook due to the fact that Taiwlind comes with inline media queries

import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(()=>{
        const media = window.matchMedia(query); //returns a new MediaQueryList object (instance props - .matches and .media) that can then be used to determine if the document matches the media query string
        if (media.matches !== matches){
            setMatches(media.matches);
        }
    })
}