import { useEffect, useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';

// styles
import './docsnav.scss';

export const DocsNav = ({ navigation }) => {
    const [isOpen, setIsOpen] = useState(false);
    const _windowSize = useWindowSize();

    const toggleNav = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        _windowSize.width <= 768 ? setIsOpen(false) : setIsOpen(true);
    }, [_windowSize.width]);

    return (
        <Fragment>
            {isOpen && (
                <nav>
                    <div className='nav-container'>
                        {navigation.map(({ url, displayText }) => (
                            <NavLink
                                onClick={() => _windowSize.width <= 768 && setIsOpen(false)}
                                to={url}>
                                {displayText.split('-').join(' ')}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            )}
            {_windowSize.width <= 768 && (
                <div
                    onClick={toggleNav}
                    className='cursor-pointer nav-controller bg-primary text-black font-bold icon-50 flex items-center justify-center rounded-full wmax hmax'>
                    {!isOpen ? (
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 20 20'
                            height={24}
                            width={24}
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fillRule='evenodd'
                                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                                clipRule='evenodd'></path>
                        </svg>
                    ) : (
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 24 24'
                            height={20}
                            width={20}
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fill='none'
                                stroke='#000'
                                strokeWidth='2'
                                d='M3,3 L21,21 M3,21 L21,3'></path>
                        </svg>
                    )}
                </div>
            )}
        </Fragment>
    );
};
