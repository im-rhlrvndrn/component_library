export const GettingStarted = () => {
    console.log('Rendered Getting Started');

    return (
        <div className='py-8 px-16'>
            <h1 className='text-xl text-black'>Getting started with Alpha UI</h1>
            <iframe
                title='Getting started iframe'
                style={{ width: '100%', height: '300px', border: 'none', marginTop: '2rem' }}
                src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=https%253A%252F%252Falphalabs-ui.netlify.app'
                sandbox='allow-scripts allow-same-origin'></iframe>
        </div>
    );
};
