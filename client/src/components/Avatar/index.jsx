// React component
import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails as ComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Avatar = () => {
    return (
        <ComponentInfo heading='Avatar'>
            <ComponentDetails subHeading='Rounded avatar'>
                <div className='details_content_preview'>
                    <div class='avatar pill'>
                        <img
                            src='https://avatars.githubusercontent.com/u/43089715?v=4'
                            alt='user avatar'
                        />
                        <span>@im_rhlrvndrn</span>
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='Avatar iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar%2520pill%2522%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimage-site.com%252Fimage-name.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522user%2520avatar%2522%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%253Cspan%253E%2540im_rhlrvndrn%253C%252Fspan%253E%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>
        </ComponentInfo>
    );
};
