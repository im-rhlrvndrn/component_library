import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails as ComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Alert = () => {
    return (
        <ComponentInfo heading='alerts'>
            <ComponentDetails subHeading='Success alert'>
                <div className='details_content_preview'>
                    <div class='alert alert-success'>
                        This is success alert with a dummy message
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='Success alert iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522alert%2520alert-success%2522%253E%250A%2520%2520%2520%2520This%2520is%2520success%2520alert%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>

            <ComponentDetails subHeading='Danger alert'>
                <div className='details_content_preview'>
                    <div class='alert alert-danger'>This is danger alert with a dummy message</div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='Danger alert iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522alert%2520alert-danger%2522%253E%250A%2520%2520%2520%2520This%2520is%2520danger%2520alert%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>

            <ComponentDetails subHeading='warning alert'>
                <div className='details_content_preview'>
                    <div class='alert alert-warning'>
                        This is warning alert with a dummy message
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='Warning alert iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522alert%2520alert-warning%2522%253E%250A%2520%2520%2520%2520This%2520is%2520warning%2520alert%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>

            <ComponentDetails subHeading='info alert'>
                <div className='details_content_preview'>
                    <div class='alert alert-info'>This is info alert with a dummy message</div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='Info alert iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522alert%2520alert-info%2522%253E%250A%2520%2520%2520%2520This%2520is%2520info%2520alert%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>
        </ComponentInfo>
    );
};
