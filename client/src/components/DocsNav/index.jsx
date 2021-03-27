import { NavLink } from 'react-router-dom';

// styles
import './docsnav.scss';

export const DocsNav = ({ navigation }) => {
    return (
        <nav>
            {navigation.map(({ url, displayText }) => (
                <NavLink to={url}>{displayText}</NavLink>
            ))}
        </nav>
    );
};
