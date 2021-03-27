import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Input = () => {
    return (
        <ComponentInfo heading='Inputs'>
            <EnhancedComponentDetails subHeading='primary input'>
                <div className='details_content_preview'>
                    <input type='text' class='input-primary' placeholder='Primary input' />
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cinput%2520type%253D%2522text%2522%2520class%253D%2522input-primary%2522%2520placeholder%253D%2522Primary%2520input%2522%2520%252F%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </EnhancedComponentDetails>

            <EnhancedComponentDetails subHeading='transparent input'>
                <div className='details_content_preview'>
                    <input type='text' class='input-transparent' placeholder='Transparent input' />
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cinput%2520type%253D%2522text%2522%2520class%253D%2522input-transparent%2522%2520placeholder%253D%2522Transparent%2520input%2522%2520%252F%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </EnhancedComponentDetails>

            <EnhancedComponentDetails subHeading='select input'>
                <div className='details_content_preview'>
                    <div class='input-select'>
                        <input type='text' value='None' />
                        <div class='select-options'>
                            <span tabindex='0' class='option'>
                                None
                            </span>
                            <span tabindex='0' class='option'>
                                Dark theme
                            </span>
                            <span tabindex='0' class='option'>
                                Light theme
                            </span>
                        </div>
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522input-select%2522%253E%250A%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520value%253D%2522None%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522select-options%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520tabindex%253D%25220%2522%2520class%253D%2522option%2522%253ENone%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520tabindex%253D%25220%2522%2520class%253D%2522option%2522%253EDark%2520theme%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520tabindex%253D%25220%2522%2520class%253D%2522option%2522%253ELight%2520theme%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </EnhancedComponentDetails>
        </ComponentInfo>
    );
};
