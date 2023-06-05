const url = 'https://testvgv.net/'

export const imageLoader = ({ src, width, quality }) => {
    return `https://${url}${src}?w=${width}&q=${quality || 75}`;
};

