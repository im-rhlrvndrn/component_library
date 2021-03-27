import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Card = () => {
    return (
        <ComponentInfo heading='Cards'>
            <EnhancedComponentDetails subHeading='event card'>
                <div className='details_content_preview'>
                    <div class='p-2 flex bg-dark br-10 wmax-600'>
                        <img
                            class='rounded mr-1-5 icon-50'
                            src='https://media-exp1.licdn.com/dms/image/C5103AQEf310KyQAuqw/profile-displayphoto-shrink_800_800/0/1562002562185?e=1620259200&v=beta&t=q6AWXR9_VytJwTt0SLb-MaHoKGHVIhCjlx9sNbQprqI'
                        />
                        <div>
                            <div class='mb-1 font-lg'>Corporate Seminar</div>
                            <div class='mb-1 font-s'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum
                                possimus dolore animi veritatis necessitatibus repellendus
                                perferendis? Facilis iste minima assumenda nam voluptates natus
                                deserunt vitae eos, beatae consequatur modi!
                            </div>
                            <div class='flex flex-justify-sb flex-align-center'>
                                <div class='opac-6 font-xs'>10 attachments</div>
                                <div class='flex'>
                                    <img
                                        class='rounded border-dark-2 ml-n-2'
                                        src='https://media-exp1.licdn.com/dms/image/C5103AQEf310KyQAuqw/profile-displayphoto-shrink_800_800/0/1562002562185?e=1620259200&v=beta&t=q6AWXR9_VytJwTt0SLb-MaHoKGHVIhCjlx9sNbQprqI'
                                    />
                                    <img
                                        class='rounded border-dark-2 ml-n-2'
                                        src='https://media-exp1.licdn.com/dms/image/C5103AQEf310KyQAuqw/profile-displayphoto-shrink_800_800/0/1562002562185?e=1620259200&v=beta&t=q6AWXR9_VytJwTt0SLb-MaHoKGHVIhCjlx9sNbQprqI'
                                    />
                                    <img
                                        class='rounded border-dark-2 ml-n-2'
                                        src='https://media-exp1.licdn.com/dms/image/C5103AQEf310KyQAuqw/profile-displayphoto-shrink_800_800/0/1562002562185?e=1620259200&v=beta&t=q6AWXR9_VytJwTt0SLb-MaHoKGHVIhCjlx9sNbQprqI'
                                    />
                                    <img
                                        class='rounded border-dark-2 ml-n-2'
                                        src='https://media-exp1.licdn.com/dms/image/C5103AQEf310KyQAuqw/profile-displayphoto-shrink_800_800/0/1562002562185?e=1620259200&v=beta&t=q6AWXR9_VytJwTt0SLb-MaHoKGHVIhCjlx9sNbQprqI'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%27p-2%2520flex%2520bg-dark%2520br-10%2520wmax-600%27%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520class%253D%27rounded%2520mr-1-5%2520icon-50%27%250A%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimages.com%252Fimage-name.png%27%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27mb-1%2520font-lg%27%253ECorporate%2520Seminar%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27mb-1%2520font-s%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Ea%2520illum%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520possimus%2520dolore%2520animi%2520veritatis%2520necessitatibus%2520repellendus%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520perferendis%253F%2520Facilis%2520iste%2520minima%2520assumenda%2520nam%2520voluptates%2520natus%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520deserunt%2520vitae%2520eos%252C%2520beatae%2520consequatur%2520modi%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27flex%2520flex-justify-sb%2520flex-align-center%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27opac-6%2520font-xs%27%253E10%2520attachments%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27flex%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%27rounded%2520border-dark-2%2520ml-n-2%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimages.com%252Fimage-name.png%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%27rounded%2520border-dark-2%2520ml-n-2%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimages.com%252Fimage-name.png%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%27rounded%2520border-dark-2%2520ml-n-2%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimages.com%252Fimage-name.png%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%27rounded%2520border-dark-2%2520ml-n-2%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimages.com%252Fimage-name.png%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </EnhancedComponentDetails>

            <EnhancedComponentDetails subHeading='text only card'>
                <div className='details_content_preview'>
                    <div class='p-2 bg-dark br-10 wmax-600'>
                        <div class='mb-1 font-lg'>Uber Screen Slider</div>
                        <div class='mb-1 font-s'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum
                            possimus dolore animi veritatis necessitatibus repellendus perferendis?
                            Facilis iste minima assumenda nam voluptates natus deserunt vitae eos,
                            beatae consequatur modi!
                        </div>
                        <div class='flex flex-align-center'>
                            <div class='bg-light-dark br-30 tag mr-1 font-xs'>UX design</div>
                            <div class='bg-light-dark br-30 tag mr-1 font-xs'>UX design</div>
                            <div class='bg-light-dark br-30 tag mr-1 font-xs'>UX design</div>
                        </div>
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%27p-2%2520bg-dark%2520br-10%2520wmax-600%27%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%27mb-1%2520font-lg%27%253EUber%2520Screen%2520Slider%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%27mb-1%2520font-s%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Ea%2520illum%250A%2520%2520%2520%2520%2520%2520%2520%2520possimus%2520dolore%2520animi%2520veritatis%2520necessitatibus%2520repellendus%2520perferendis%253F%250A%2520%2520%2520%2520%2520%2520%2520%2520Facilis%2520iste%2520minima%2520assumenda%2520nam%2520voluptates%2520natus%2520deserunt%2520vitae%2520eos%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520beatae%2520consequatur%2520modi%21%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%27flex%2520flex-align-center%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27bg-light-dark%2520br-30%2520tag%2520mr-1%2520font-xs%27%253EUX%2520design%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27bg-light-dark%2520br-30%2520tag%2520mr-1%2520font-xs%27%253EUX%2520design%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27bg-light-dark%2520br-30%2520tag%2520mr-1%2520font-xs%27%253EUX%2520design%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </EnhancedComponentDetails>

            <EnhancedComponentDetails subHeading='text overlay card'>
                <div className='details_content_preview'>
                    <div class='card'>
                        <img
                            class='stretch'
                            src='https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                            alt='girl with code reflection on face'
                        />
                        <div class='overlay flex flex-justify-sb'>
                            <div class='info'>
                                <div class='font-weight-md'>Learn ReactJS</div>
                                <div class='font-xs opac-6'>A supporting sub heading</div>
                            </div>
                            <span class='bg-dark text-align-center font-lg rounded icon-50'>=</span>
                        </div>
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%27card%27%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520class%253D%27stretch%27%250A%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimages.com%252Fimage-name.png%27%250A%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%27girl%2520with%2520code%2520reflection%2520on%2520face%27%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%27overlay%2520flex%2520flex-justify-sb%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27info%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27font-weight-md%27%253ELearn%2520ReactJS%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27font-xs%2520opac-6%27%253EA%2520supporting%2520sub%2520heading%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%27bg-dark%2520text-align-center%2520font-lg%2520rounded%2520icon-50%27%253E%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </EnhancedComponentDetails>
        </ComponentInfo>
    );
};
