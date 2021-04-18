// React components
import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Accordion = () => {
    return (
        <ComponentInfo heading='Accordion'>
            <EnhancedComponentDetails subHeading='Filter Accordion'>
                <div className='details_content_preview'>
                    <div
                        className='accordion'
                        style={{
                            backgroundColor: '#222',
                            color: '#f5f5f5',
                            padding: '1.5rem 2rem',
                        }}
                    >
                        <div className='accordion-heading' style={{ marginBottom: '0' }}>
                            Accordion Heading <span>+</span>
                        </div>
                    </div>
                    <div
                        className='accordion'
                        style={{
                            backgroundColor: '#222',
                            color: '#f5f5f5',
                            padding: '1.5rem 2rem',
                        }}
                    >
                        <div className='accordion-heading' style={{ marginBottom: '1rem' }}>
                            Accordion Heading <span>-</span>
                        </div>
                        <div
                            className='accordion-content'
                            style={{
                                overflowY: 'hidden',
                                height: 'max-content',
                                opacity: '1',
                                transition: '.4s all ease-in-out',
                            }}
                        >
                            <div className='flex flex-align-center'>
                                <input className='margin-reset mr-1' type='checkbox' id='filter1' />
                                <label htmlFor='filter1'>filter 1</label>
                            </div>
                            <div className='flex flex-align-center'>
                                <input className='margin-reset mr-1' type='checkbox' id='filter2' />
                                <label htmlFor='filter2'>filter 2</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='details_content_'></div>
            </EnhancedComponentDetails>
        </ComponentInfo>
    );
};
