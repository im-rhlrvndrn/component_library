// styles
import './componentdetails.scss';

// React components
import { withCodeToggle } from '../../../hoc/withCodeToggle.jsx';

const ComponentDetails = ({ subHeading, codeState, setCodeState, children }) => {
    return (
        <div className='details'>
            <div className='details_header'>
                <h2 className='details_header_sub_heading'>{subHeading}</h2>
                <div className='details_header_cta'>
                    <button
                        className={!codeState ? 'active' : ''}
                        onClick={() => setCodeState(false)}
                    >
                        Preview
                    </button>
                    <button
                        className={codeState ? 'active' : ''}
                        onClick={() => setCodeState(true)}
                    >
                        Code
                    </button>
                </div>
            </div>
            <div className='details_content'>{!codeState ? children[0] : children[1]}</div>
        </div>
    );
};

const EnhancedComponentDetails = withCodeToggle(ComponentDetails);
export { EnhancedComponentDetails };
