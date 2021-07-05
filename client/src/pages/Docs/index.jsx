import { useEffect } from 'react';
import { useParams } from 'react-router';
import { navigation } from '../../constants';
import { useTitle } from '../../hooks/useTitle';

// styles
import './docs.scss';

// components
import { DocsNav } from '../../components/DocsNav';

export const Docs = () => {
    const urlParams = useParams();
    useTitle(urlParams.subdoc, 'Docs |');

    useEffect(() => {}, [urlParams.subdoc]);

    return (
        <div className='docs'>
            <DocsNav navigation={navigation} />
            <div className='component'>
                {navigation.map(
                    (item) => item.displayText.includes(urlParams.subdoc) && <item.component />
                )}
            </div>
        </div>
    );
};
