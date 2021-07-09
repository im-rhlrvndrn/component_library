import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails as ComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Modal = () => {
    return (
        <ComponentInfo heading='modals'>
            <ComponentDetails>
                <div className='details_content_preview'>
                    {/* Modal */}
                    <div className='wmax-400 bg-white p-4'>
                        {/* Modal Header */}
                        <div
                            style={{ borderBottom: '1px solid black' }}
                            className='flex justify-between items-center mb-4'>
                            <h1 style={{ margin: 0 }} className='text-lg'>
                                Modal header text
                            </h1>
                            <span className='cursor-pointer'>close</span>
                        </div>
                        {/* Modal body */}
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                            voluptatibus officia neque, laudantium quae asperiores libero vel magni
                            eveniet, expedita doloribus! Aspernatur, quidem officiis? Eveniet
                            molestias excepturi quidem tenetur obcaecati.
                        </div>
                        {/* Modal Footer */}
                        <div
                            style={{ borderTop: '1px solid black' }}
                            className='flex justify-end mt-8 pt-4'>
                            <button className='ml-4 px-8 pl-4'>Cancel</button>
                            <button className='bg-black text-white ml-4 px-8 pl-4'>CTA</button>
                        </div>
                    </div>
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='Modal iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%27wmax-400%2520bg-white%2520p-4%27%253E%250A%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%2520borderBottom%253A%2520%271px%2520solid%2520black%27%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%27flex%2520justify-between%2520items-center%2520mb-4%27%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520style%253D%257B%257B%2520margin%253A%25200%2520%257D%257D%2520className%253D%27text-lg%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Modal%2520header%2520text%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%27cursor-pointer%27%253Eclose%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Quas%250A%2520%2520%2520%2520%2520%2520%2520%2520voluptatibus%2520officia%2520neque%252C%2520laudantium%2520quae%2520asperiores%2520libero%2520vel%2520magni%250A%2520%2520%2520%2520%2520%2520%2520%2520eveniet%252C%2520expedita%2520doloribus%21%2520Aspernatur%252C%2520quidem%2520officiis%253F%2520Eveniet%250A%2520%2520%2520%2520%2520%2520%2520%2520molestias%2520excepturi%2520quidem%2520tenetur%2520obcaecati.%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%2520borderTop%253A%2520%271px%2520solid%2520black%27%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520className%253D%27flex%2520justify-end%2520mt-8%2520pt-4%27%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%27ml-4%2520px-8%2520pl-4%27%253ECancel%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%27bg-black%2520text-white%2520ml-4%2520px-8%2520pl-4%27%253ECTA%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>
        </ComponentInfo>
    );
};
