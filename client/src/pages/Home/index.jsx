import { Link } from 'react-router-dom';

// styles
import './home.scss';

export const Home = () => {
    return (
        <div className='min-h-screen bg-dark flex items-center justify-center'>
            <div className='hero'>
                <span className='text-md text-white mb-4'>Alpha UI</span>
                <h1 className='text-2xl text-white'>Build fantastic websites faster</h1>
                <p className='text-md opac-6 mt-2 text-white'>
                    Alpha UI is a utility classes based component library that lets you bring your
                    dream projects to life fasterskldf lsd flsdflksd flk ldflj dsl
                </p>
                <div className='flex mt-12'>
                    <Link
                        to={`docs/getting-started`}
                        className='py-4 px-8 mr-4 rounded-sm text-md h-auto bg-primary'>
                        Get started
                    </Link>
                    <a
                        href='https://github.com/imrhlrvndrn/component_library'
                        target='_blank'
                        className='py-4 px-8 rounded-sm text-md h-auto bg-light'>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};
