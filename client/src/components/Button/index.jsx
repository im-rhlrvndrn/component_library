import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Button = () => {
    return (
        <ComponentInfo heading='buttons'>
            <EnhancedComponentDetails subHeading='button with icon/image'>
                <div className='details_content_preview'>
                    <button class='btn btn-primary pr-1 pl-1 h-auto flex flex-align-center'>
                        <img
                            class='rounded'
                            src='https://media-exp1.licdn.com/dms/image/C5103AQEf310KyQAuqw/profile-displayphoto-shrink_800_800/0/1562002562185?e=1620259200&v=beta&t=q6AWXR9_VytJwTt0SLb-MaHoKGHVIhCjlx9sNbQprqI'
                        />
                        <span>Don't press on my face</span>
                    </button>
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520btn-primary%2520flex%2520flex-align-center%2522%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522rounded%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimages.com%252Fimage-name.png%2522%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%2509%253Cspan%253EIcon%252FImage%2520button%253C%252Fspan%253E%250A%253C%252Fbutton%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </EnhancedComponentDetails>

            <EnhancedComponentDetails subHeading='primary button'>
                <div className='details_content_preview'>
                    <button class='btn btn-primary'>Primary button</button>
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520btn-primary%2522%253EPrimary%2520button%253C%252Fbutton%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </EnhancedComponentDetails>

            <EnhancedComponentDetails subHeading='secondary button'>
                <div className='details_content_preview'>
                    <button class='btn btn-secondary'>Secondary button</button>
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520btn-secondary%2522%253ESecondary%2520button%253C%252Fbutton%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </EnhancedComponentDetails>

            <EnhancedComponentDetails subHeading='link button'>
                <div className='details_content_preview'>
                    <button class='btn btn-link'>Link button</button>
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520btn-link%2522%253ELink%2520button%253C%252Fbutton%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </EnhancedComponentDetails>
        </ComponentInfo>
    );
};
