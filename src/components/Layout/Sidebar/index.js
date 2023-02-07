import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')}>
                <li className={cx('active')}>
                    <p>Home</p>
                </li>
                <li>
                    <p>Services</p>
                </li>
                <li>
                    <p>News</p>
                </li>
                <li>
                    <p>Blog</p>
                </li>
                <li>
                    <p>Contact</p>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
