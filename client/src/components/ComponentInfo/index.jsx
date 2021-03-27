// styles
import './componentinfo.scss';

export const ComponentInfo = ({ heading, children }) => {
    return (
        <div className='component_info'>
            <h1>{heading}</h1>
            {children}
        </div>
    );
};
