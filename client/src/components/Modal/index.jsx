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
                            className='flex justify-between items-center mb-4'
                        >
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
                            className='flex justify-end mt-8 pt-4'
                        >
                            <button className='ml-4 px-8 pl-4'>Cancel</button>
                            <button className='bg-black text-white ml-4 px-8 pl-4'>CTA</button>
                        </div>
                    </div>
                </div>
                <div className='details_content_code'></div>
            </ComponentDetails>
        </ComponentInfo>
    );
};
