import { useTitle } from '../../hooks/useTitle';
import { useParams } from 'react-router';

// styles
import './docs.scss';

// React components
import { Nav } from '../../components/Nav';
import { Card } from '../../components/Card';
import { List } from '../../components/List';
import { Badge } from '../../components/Badge';
import { Alert } from '../../components/Alert';
import { Input } from '../../components/Input';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { DocsNav } from '../../components/DocsNav';
import { Accordion } from '../../components/Accordion';

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
            displayText: 'accordions',
            url: '/docs/accordion',
            component: Accordion,
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
        {
            displayText: 'navs',
            url: '/docs/nav',
            component: Nav,
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
