// React component
import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Avatar = () => {
    return (
        <ComponentInfo heading='Avatar'>
            <EnhancedComponentDetails subHeading='Rounded avatar'>
                <div className='details_content_preview'>
                    <div class='avatar pill'>
                        <img
                            src='https://media-exp1.licdn.com/dms/image/C5103AQEf310KyQAuqw/profile-displayphoto-shrink_800_800/0/1562002562185?e=1620259200&v=beta&t=q6AWXR9_VytJwTt0SLb-MaHoKGHVIhCjlx9sNbQprqI'
                            alt='user avatar'
                        />
                        <span>@im_rhlrvndrn</span>
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar%2520pill%2522%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimage-site.com%252Fimage-name.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522user%2520avatar%2522%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%253Cspan%253E%2540im_rhlrvndrn%253C%252Fspan%253E%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </EnhancedComponentDetails>
        </ComponentInfo>
    );
};
