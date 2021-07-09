// components
import { Accordion } from '../components/Accordion';
import { Alert } from '../components/Alert';
import { Avatar } from '../components/Avatar';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { GettingStarted } from '../components/GettingStarted';
import { Input } from '../components/Input';
import { List } from '../components/List';
import { Modal } from '../components/Modal';

export const navigation = [
    {
        displayText: 'getting-started',
        url: '/docs/getting-started',
        component: GettingStarted,
    },
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
];

export const accordions = [
    {
        _id: '1',
        is_active: false,
        content: 'Content goes here',
        title: 'Accordion 1',
    },
    {
        _id: '2',
        is_active: false,
        content: 'Content goes here',
        title: 'Accordion 2',
    },
    {
        _id: '3',
        is_active: false,
        content: 'Content goes here',
        title: 'Accordion 3',
    },
];
