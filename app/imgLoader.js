export const imageLoader = ({ src, width, quality }) => {
    return `https://URL.com${src}?w=${width}&q=${quality || 75}`;
};