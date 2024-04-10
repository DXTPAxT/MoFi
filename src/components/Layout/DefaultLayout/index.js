import Sidebar1 from './Sidebar1';
import Sidebar2 from './Sidebar2';

function DefaultLayout({ children }) {
    return (
        <div>
            <Sidebar1 />
            <div className="content">{children}</div>
            <Sidebar2 />
        </div>
    );
}

export default DefaultLayout;
