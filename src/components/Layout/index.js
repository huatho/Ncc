import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import classNames from 'classnames/bind';
import Footer from './Footer';

const cx = classNames.bind(styles);

function Layout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
