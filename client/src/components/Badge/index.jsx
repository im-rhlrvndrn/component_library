import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Badge = () => {
    return (
        <ComponentInfo heading='Badges'>
            <EnhancedComponentDetails subHeading='success badge'>
                <div className='details_content_preview'></div>
                <div className='details_content_code'></div>
            </EnhancedComponentDetails>
        </ComponentInfo>
    );
};
