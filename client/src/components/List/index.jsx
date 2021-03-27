import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails } from '../ComponentInfo/ComponentDetails';

export const List = () => {
    return (
        <ComponentInfo heading='lists'>
            <EnhancedComponentDetails subHeading='notification list (stacked)'>
                <div className='details_content_preview'>
                    <div class='list-notification-wrapper'>
                        <div class='list-notification'>
                            <img
                                class='rounded'
                                src='https://media-exp1.licdn.com/dms/image/C5103AQEf310KyQAuqw/profile-displayphoto-shrink_800_800/0/1562002562185?e=1620259200&v=beta&t=q6AWXR9_VytJwTt0SLb-MaHoKGHVIhCjlx9sNbQprqI'
                            />
                            <div class='notification'>
                                <div class='heading'>Rahul Ravindran</div>
                                <div class='message'>Rahul Ravindran started following you</div>
                            </div>
                        </div>
                        <div class='list-notification'>
                            <img
                                class='rounded'
                                src='https://media-exp1.licdn.com/dms/image/C5103AQEf310KyQAuqw/profile-displayphoto-shrink_800_800/0/1562002562185?e=1620259200&v=beta&t=q6AWXR9_VytJwTt0SLb-MaHoKGHVIhCjlx9sNbQprqI'
                            />
                            <div class='notification'>
                                <div class='heading'>Rahul Ravindran</div>
                                <div class='message'>
                                    Liked your profile picture and commented on it
                                </div>
                            </div>
                        </div>
                        <div class='list-notification'>
                            <img
                                class='rounded'
                                src='https://media-exp1.licdn.com/dms/image/C5103AQEf310KyQAuqw/profile-displayphoto-shrink_800_800/0/1562002562185?e=1620259200&v=beta&t=q6AWXR9_VytJwTt0SLb-MaHoKGHVIhCjlx9sNbQprqI'
                            />
                            <div class='notification'>
                                <div class='heading'>Rahul Ravindran</div>
                                <div class='message'>Mentioned you in a post</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522list-notification-wrapper%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522list-notification%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522rounded%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimages.com%252Fimage-name.png%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522notification%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522heading%2522%253ERahul%2520Ravindran%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522message%2522%253ERahul%2520Ravindran%2520started%2520following%2520you%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522list-notification%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522rounded%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimages.com%252Fimage-name.png%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522notification%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522heading%2522%253ERahul%2520Ravindran%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522message%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Liked%2520your%2520profile%2520picture%2520and%2520commented%2520on%2520it%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522list-notification%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522rounded%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimages.com%252Fimage-name.png%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522notification%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522heading%2522%253ERahul%2520Ravindran%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522message%2522%253EMentioned%2520you%2520in%2520a%2520post%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </EnhancedComponentDetails>
        </ComponentInfo>
    );
};
