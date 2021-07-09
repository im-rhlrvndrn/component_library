import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails as ComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Button = () => {
    return (
        <ComponentInfo heading='buttons'>
            <ComponentDetails subHeading='button with icon/image'>
                <div className='details_content_preview'>
                    <button class='btn bg-white px-4 py-2 h-auto flex items-center rounded-sm'>
                        <img
                            class='rounded-full'
                            src='https://avatars.githubusercontent.com/u/43089715?v=4'
                        />
                        <span>Button text</span>
                    </button>
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='Text button iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%27btn%2520bg-white%2520px-4%2520py-2%2520h-auto%2520flex%2520items-center%2520rounded-sm%27%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520class%253D%27rounded-full%27%250A%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimage.com%252Fjdsfwjehrr3243hj%27%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%253Cspan%253EButton%2520text%253C%252Fspan%253E%250A%253C%252Fbutton%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>

            <ComponentDetails subHeading='primary button'>
                <div className='details_content_preview'>
                    <button class='btn bg-white rounded-sm'>Primary button</button>
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='Primary button iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%27btn%2520bg-white%2520rounded-sm%27%253EPrimary%2520button%253C%252Fbutton%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>

            <ComponentDetails subHeading='secondary button'>
                <div className='details_content_preview'>
                    <button class='btn btn-secondary rounded-sm'>Secondary button</button>
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='Secondary button iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%27btn%2520btn-secondary%2520rounded-sm%27%253ESecondary%2520button%253C%252Fbutton%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>

            <ComponentDetails subHeading='link button'>
                <div className='details_content_preview'>
                    <button class='btn btn-link'>Link button</button>
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='Link button iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520btn-link%2522%253ELink%2520button%253C%252Fbutton%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>
        </ComponentInfo>
    );
};
