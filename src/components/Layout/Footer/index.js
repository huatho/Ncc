import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
    return <div className={cx('wrapper')}>Copyright © 2021</div>;
}

export default Footer;
