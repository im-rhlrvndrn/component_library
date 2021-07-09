import { useEffect, Fragment } from 'react';
import { useParams } from 'react-router';
import { useTitle } from '../../hooks/useTitle';
import { navigation } from '../../constants';

// styles
import './docs.scss';

// components
import { DocsNav } from '../../components/DocsNav';

export const Docs = () => {
    const urlParams = useParams();
    useTitle(urlParams.subdoc, 'Docs |');

    useEffect(() => {}, [urlParams.subdoc]);

    return (
        <Fragment>
            <div className='docs'>
                <DocsNav navigation={navigation} />
                <div className='component'>
                    {navigation.map(
                        (item) => item.displayText.includes(urlParams.subdoc) && <item.component />
                    )}
                </div>
            </div>
        </Fragment>
    );
};
