export const GettingStarted = () => {
    console.log('Rendered Getting Started');

    return (
        <div className='py-8 px-16'>
            <h1 className='text-xl text-black'>Getting started with Alpha UI</h1>
            {/* <code className='flex justify-between mt-8 p-8 block bg-black rounded-md text-white'>
                <p>https://alphaui.netlify.app</p>
                <button className='bg-transparent' style={{ height: 'max-content' }}>
                    <svg
                        stroke='white'
                        fill='white'
                        stroke-width='0'
                        viewBox='0 0 24 24'
                        height={20}
                        width={20}
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'></path>
                    </svg>
                </button>
            </code> */}
            <iframe
                style={{ width: '100%', height: '300px', border: 'none', marginTop: '2rem' }}
                src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=https%253A%252F%252Falphaui.netlify.app'
                sandbox='allow-scripts allow-same-origin'></iframe>
        </div>
    );
};
