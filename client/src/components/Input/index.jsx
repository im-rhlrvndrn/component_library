import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails as ComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Input = () => {
    return (
        <ComponentInfo heading='Inputs'>
            <ComponentDetails subHeading='primary input'>
                <div className='details_content_preview'>
                    <input type='text' className='input-primary' placeholder='Primary input' />
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='Primary input iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cinput%2520type%253D%2522text%2522%2520class%253D%2522input-primary%2522%2520placeholder%253D%2522Primary%2520input%2522%2520%252F%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>

            <ComponentDetails subHeading='transparent input'>
                <div className='details_content_preview'>
                    <input
                        type='text'
                        className='input-transparent text-black'
                        placeholder='Transparent input'
                    />
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='Transparent input iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cinput%2520type%253D%2522text%2522%2520class%253D%2522input-transparent%2522%2520placeholder%253D%2522Transparent%2520input%2522%2520%252F%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>
        </ComponentInfo>
    );
};
