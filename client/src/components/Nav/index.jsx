import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Nav = () => {
    return (
        <>
            <ComponentInfo heading='Navs'>
                <EnhancedComponentDetails subHeading='e-commerce navigation bar'>
                    <div className='details_content_preview'>
                        <div className='nav'>
                            <h1 className='font-lg logo' style={{ marginRight: '2rem' }}>
                                <a href='/'>Logo</a>
                            </h1>
                            <input
                                className='searchbar'
                                type='text'
                                name='searchbar'
                                id='nav-searchbar'
                                placeholder='Search products...'
                            />
                            <a href=''>
                                <span>Hello, Guest user</span>
                            </a>
                            <div className='cta-container'>
                                <a href='/readlist'>
                                    {/* <WishListIcon
                                        fill={theme.constants.icon}
                                        style={{ width: '24px', height: '24px' }}
                                    /> */}
                                    wishlist icon
                                </a>
                                <a href='/cart'>
                                    {/* <CartIcon
                                        fill={theme.constants.icon}
                                        style={{ width: '24px', height: '24px' }}
                                    /> */}
                                    cart icon
                                </a>
                                <button className='toggle-theme'>theme toggle button</button>
                            </div>
                        </div>
                    </div>
                    <div className='details_content_code'></div>
                </EnhancedComponentDetails>
            </ComponentInfo>
        </>
    );
};
