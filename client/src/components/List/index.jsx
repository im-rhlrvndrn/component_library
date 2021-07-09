import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails as ComponentDetails } from '../ComponentInfo/ComponentDetails';

export const List = () => {
    return (
        <ComponentInfo heading='lists'>
            <ComponentDetails subHeading='notification list (stacked)'>
                <div className='details_content_preview'>
                    <div className='flex flex-col rounded-md overflow-hidden hmax-400'>
                        <div className='p-6 flex bg-dark'>
                            <img
                                className='rounded-full icon-50'
                                src='https://avatars.githubusercontent.com/u/43089715?v=4'
                            />
                            <div className='flex flex-col justify-center text-light'>
                                <div className='heading text-s'>Rahul Ravindran</div>
                                <div className='message text-xs opac-6'>Started following you</div>
                            </div>
                        </div>
                        <div className='p-6 flex bg-dark'>
                            <img
                                className='rounded-full icon-50'
                                src='https://avatars.githubusercontent.com/u/43089715?v=4'
                            />
                            <div className='flex flex-col justify-center text-light'>
                                <div className='heading text-s'>Rahul Ravindran</div>
                                <div className='message text-xs opac-6'>
                                    Commented on your{' '}
                                    <button className='text-light btn-link'>photo</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 flex bg-dark'>
                            <img
                                className='rounded-full icon-50'
                                src='https://avatars.githubusercontent.com/u/43089715?v=4'
                            />
                            <div className='flex flex-col justify-center text-light'>
                                <div className='heading text-s'>Rahul Ravindran</div>
                                <div className='message text-xs opac-6'>Unfollowed you</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='List iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%27flex%2520flex-col%2520rounded-md%2520overflow-hidden%2520hmax-400%27%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%27p-6%2520flex%2520bg-dark%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%27rounded-full%2520icon-50%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimage.com%252F430897dfdfdfdss15%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27flex%2520flex-col%2520justify-center%2520text-light%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27heading%2520text-s%27%253ERahul%2520Ravindran%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27message%2520text-xs%2520opac-6%27%253EStarted%2520following%2520you%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%27p-6%2520flex%2520bg-dark%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%27rounded-full%2520icon-50%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimage.com%252F430897dfdfdfdss15%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27flex%2520flex-col%2520justify-center%2520text-light%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27heading%2520text-s%27%253ERahul%2520Ravindran%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27message%2520text-xs%2520opac-6%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Commented%2520on%2520your%257B%27%2520%27%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%27text-light%2520btn-link%27%253Ephoto%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%27p-6%2520flex%2520bg-dark%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%27rounded-full%2520icon-50%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimage.com%252F430897dfdfdfdss15%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27flex%2520flex-col%2520justify-center%2520text-light%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27heading%2520text-s%27%253ERahul%2520Ravindran%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27message%2520text-xs%2520opac-6%27%253EUnfollowed%2520you%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>
        </ComponentInfo>
    );
};
