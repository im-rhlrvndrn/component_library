// React components
import { useState } from 'react';
import { accordions as accordionData } from '../../constants';

// components
import { ComponentInfo } from '../ComponentInfo';
import { EnhancedComponentDetails as ComponentDetails } from '../ComponentInfo/ComponentDetails';

export const Accordion = () => {
    const [accordions, setAccordions] = useState(accordionData);
    const updateAccordion = (accordionId) =>
        setAccordions((prevState) =>
            prevState.map((accordion) =>
                accordion._id === accordionId
                    ? accordion.is_active
                        ? { ...accordion, is_active: false }
                        : { ...accordion, is_active: true }
                    : { ...accordion, is_active: false }
            )
        );

    return (
        <ComponentInfo heading='Accordion'>
            <ComponentDetails subHeading='Filter Accordion'>
                <div className='details_content_preview'>
                    {accordions.map((accordion) => (
                        <div key={accordion._id} className='accordion bg-black p-6 text-white'>
                            <div
                                className='accordion-heading'
                                onClick={() => updateAccordion(accordion._id)}>
                                {accordion.title}
                                <span>+</span>
                            </div>
                            {accordion.is_active && (
                                <div className='accordion-content h-max opac-1 py-4 overflow-y-hidden duration-400'>
                                    {accordion.content}...
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='details_content_code'>
                    <iframe
                        title='Accordion iframe'
                        src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%27accordion%2520bg-black%2520p-6%2520text-white%27%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%27accordion-heading%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Accordion%2520Heading%2520%253Cspan%253E%252B%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%27accordion%2520bg-black%2520p-6%2520text-white%27%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%27accordion-heading%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Accordion%2520Heading%2520%253Cspan%253E-%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%27accordion-content%2520h-max%2520opac-1%2520py-4%2520overflow-y-hidden%2520duration-400%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27flex%2520items-center%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520className%253D%27m-0%2520mr-4%27%2520type%253D%27checkbox%27%2520id%253D%27filter1%27%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520htmlFor%253D%27filter1%27%253EFilter%25201%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27flex%2520items-center%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520className%253D%27m-0%2520mr-4%27%2520type%253D%27checkbox%27%2520id%253D%27filter2%27%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520htmlFor%253D%27filter2%27%253EFilter%25202%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
                        sandbox='allow-scripts allow-same-origin'></iframe>
                </div>
            </ComponentDetails>
        </ComponentInfo>
    );
};
