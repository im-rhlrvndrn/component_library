import { useEffect } from 'react';

export const useTitle = (url, prefix = '') => {
    const updateTitle = (url) =>
        url
            .split('-')
            .map((item) => `${item[0].toUpperCase()}${item.slice(1, item.length)}`)
            .join(' ');

    useEffect(() => {
        document.title = `${prefix} ${updateTitle(url)}`;
    }, [url]);
};
