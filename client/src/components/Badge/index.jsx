// components
import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails as ComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Badge = () => {
    return (
        <ComponentInfo heading='Badges'>
            <ComponentDetails subHeading='success badge'>
                <div className='details_content_preview'>
                    <div className='badge bg-success'>Success</div>
                </div>
                <div className='details_content_code relative'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%27badge%2520bg-success%2520text-light%27%253ESuccess%253C%252Fdiv%253E%250A'
                        title='success badge'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </ComponentDetails>

            <ComponentDetails subHeading='danger badge'>
                <div className='details_content_preview'>
                    <div className='badge bg-danger'>Danger</div>
                </div>
                <div className='details_content_code relative'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%27badge%2520bg-danger%2520text-light%27%253EDanger%253C%252Fdiv%253E%250A'
                        title='danger badge'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </ComponentDetails>

            <ComponentDetails subHeading='warning badge'>
                <div className='details_content_preview'>
                    <div className='badge bg-warning'>Warning</div>
                </div>
                <div className='details_content_code relative'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%27badge%2520bg-warning%2520text-light%27%253EWarning%253C%252Fdiv%253E%250A'
                        title='warning badge'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </ComponentDetails>

            <ComponentDetails subHeading='information badge'>
                <div className='details_content_preview'>
                    <div className='badge bg-info text-light'>Information</div>
                </div>
                <div className='details_content_code relative'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%27badge%2520bg-info%2520text-light%27%253EInformation%253C%252Fdiv%253E%250A'
                        title='information badge'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </ComponentDetails>
        </ComponentInfo>
    );
};
