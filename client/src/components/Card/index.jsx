import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails as ComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Card = () => {
    return (
        <ComponentInfo heading='Cards'>
            <ComponentDetails subHeading='event card'>
                <div className='details_content_preview'>
                    <div class='p-8 rounded-md flex bg-dark br-10 wmax-600'>
                        <img
                            class='rounded-full mr-4 icon-60'
                            src='https://avatars.githubusercontent.com/u/43089715?v=4'
                        />
                        <div>
                            <div class='mb-4 text-lg'>Corporate Seminar</div>
                            <div class='mb-4 text-s'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum
                                possimus dolore animi veritatis necessitatibus repellendus
                                perferendis? Facilis iste minima assumenda nam voluptates natus
                                deserunt vitae eos, beatae consequatur modi!
                            </div>
                            <div class='flex justify-between items-center'>
                                <div class='opac-6 text-xs'>10 attachments</div>
                                <div class='flex'>
                                    <img
                                        class='rounded-full border-dark-2 ml-n-2'
                                        src='https://avatars.githubusercontent.com/u/43089715?v=4'
                                    />
                                    <img
                                        class='rounded-full border-dark-2 ml-n-2'
                                        src='https://avatars.githubusercontent.com/u/43089715?v=4'
                                    />
                                    <img
                                        class='rounded-full border-dark-2 ml-n-2'
                                        src='https://avatars.githubusercontent.com/u/43089715?v=4'
                                    />
                                    <img
                                        class='rounded-full border-dark-2 ml-n-2'
                                        src='https://avatars.githubusercontent.com/u/43089715?v=4'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%27p-8%2520rounded-md%2520flex%2520bg-dark%2520br-10%2520wmax-600%27%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520class%253D%27rounded-full%2520mr-4%2520icon-60%27%250A%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimage.com%252Flkrhtrqt324235%27%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27mb-4%2520text-lg%27%253ECorporate%2520Seminar%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27mb-4%2520text-s%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Ea%2520illum%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520possimus%2520dolore%2520animi%2520veritatis%2520necessitatibus%2520repellendus%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520perferendis%253F%2520Facilis%2520iste%2520minima%2520assumenda%2520nam%2520voluptates%2520natus%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520deserunt%2520vitae%2520eos%252C%2520beatae%2520consequatur%2520modi%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27flex%2520justify-between%2520items-center%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27opac-6%2520text-xs%27%253E10%2520attachments%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27flex%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%27rounded-full%2520border-dark-2%2520ml-n-2%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimage.com%252Flkrhtrqt324235%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%27rounded-full%2520border-dark-2%2520ml-n-2%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimage.com%252Flkrhtrqt324235%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%27rounded-full%2520border-dark-2%2520ml-n-2%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimage.com%252Flkrhtrqt324235%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%27rounded-full%2520border-dark-2%2520ml-n-2%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimage.com%252Flkrhtrqt324235%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </ComponentDetails>

            <ComponentDetails subHeading='text only card'>
                <div className='details_content_preview'>
                    <div class='p-8 bg-dark rounded-md wmax-600'>
                        <div class='mb-4 text-lg'>Uber Screen Slider</div>
                        <div class='mb-4 text-s'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum
                            possimus dolore animi veritatis necessitatibus repellendus perferendis?
                            Facilis iste minima assumenda nam voluptates natus deserunt vitae eos,
                            beatae consequatur modi!
                        </div>
                        <div class='flex flex-align-center'>
                            <div class='bg-light-dark rounded-sm tag mr-4 text-xs'>UX design</div>
                            <div class='bg-light-dark rounded-sm tag mr-4 text-xs'>UX design</div>
                            <div class='bg-light-dark rounded-sm tag mr-4 text-xs'>UX design</div>
                        </div>
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%27p-8%2520bg-dark%2520rounded-md%2520wmax-600%27%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%27mb-4%2520text-lg%27%253EUber%2520Screen%2520Slider%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%27mb-4%2520text-s%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Ea%2520illum%250A%2520%2520%2520%2520%2520%2520%2520%2520possimus%2520dolore%2520animi%2520veritatis%2520necessitatibus%2520repellendus%2520perferendis%253F%250A%2520%2520%2520%2520%2520%2520%2520%2520Facilis%2520iste%2520minima%2520assumenda%2520nam%2520voluptates%2520natus%2520deserunt%2520vitae%2520eos%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520beatae%2520consequatur%2520modi%21%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%27flex%2520flex-align-center%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27bg-light-dark%2520rounded-sm%2520tag%2520mr-4%2520text-xs%27%253EUX%2520design%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27bg-light-dark%2520rounded-sm%2520tag%2520mr-4%2520text-xs%27%253EUX%2520design%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27bg-light-dark%2520rounded-sm%2520tag%2520mr-4%2520text-xs%27%253EUX%2520design%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </ComponentDetails>

            <ComponentDetails subHeading='text overlay card'>
                <div className='details_content_preview'>
                    <div class='card'>
                        <img
                            class='stretch'
                            src='https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                            alt='girl with code reflection on face'
                        />
                        <div class='overlay flex flex-justify-sb'>
                            <div class='info mr-2'>
                                <div class='font-semibold'>Learn ReactJS</div>
                                <div class='text-xs opac-6'>A supporting sub heading</div>
                            </div>
                            <span class='bg-dark text-align-center font-lg rounded-full icon-50'>
                                =
                            </span>
                        </div>
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%27card%27%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520class%253D%27stretch%27%250A%2520%2520%2520%2520%2520%2520%2520%2520src%253D%27https%253A%252F%252Fimage.com%252F54739%27%250A%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%27girl%2520with%2520code%2520reflection%2520on%2520face%27%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%27overlay%2520flex%2520flex-justify-sb%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27info%2520mr-2%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27font-semibold%27%253ELearn%2520ReactJS%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27text-xs%2520opac-6%27%253EA%2520supporting%2520sub%2520heading%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%27bg-dark%2520text-align-center%2520font-lg%2520rounded-full%2520icon-50%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'
                    ></iframe>
                </div>
            </ComponentDetails>
        </ComponentInfo>
    );
};
