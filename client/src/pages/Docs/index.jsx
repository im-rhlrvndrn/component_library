import { useTitle } from '../../hooks/useTitle';
import { useParams } from 'react-router';

// styles
import './docs.scss';

// React components
import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';
import { Alert } from '../../components/Alert';
import { Input } from '../../components/Input';
import { List } from '../../components/List';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { DocsNav } from '../../components/DocsNav';

export const Docs = () => {
    let Modal;
    const urlParams = useParams();
    useTitle(urlParams.subdoc, 'Docs |');
    const navigation = [
        {
            displayText: 'avatars',
            url: '/docs/avatar',
            component: Avatar,
        },
        {
            displayText: 'alerts',
            url: '/docs/alert',
            component: Alert,
        },
        {
            displayText: 'badges',
            url: '/docs/badge',
            component: Badge,
        },
        {
            displayText: 'buttons',
            url: '/docs/button',
            component: Button,
        },
        {
            displayText: 'cards',
            url: '/docs/card',
            component: Card,
        },
        {
            displayText: 'inputs',
            url: '/docs/input',
            component: Input,
        },
        {
            displayText: 'lists',
            url: '/docs/list',
            component: List,
        },
        {
            displayText: 'modals',
            url: '/docs/modal',
            component: Modal,
        },
    ];

    return (
        <div className='docs'>
            <DocsNav navigation={navigation} />
            <div className='component'>
                {navigation.map(
                    (item) => item.displayText === `${urlParams.subdoc}s` && <item.component />
                )}
            </div>
        </div>
    );
};
