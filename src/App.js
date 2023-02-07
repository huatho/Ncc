import Layout from './components/Layout';
import styles from './Content.module.scss';
import classNames from 'classnames/bind';
import logo from './assets/logoNCC 1.jpg';
import i1 from './assets/css-icon 1.jpg';
import i2 from './assets/html-icon 1.jpg';
import i3 from './assets/url-icon 1.jpg';
import { useState } from 'react';

const cx = classNames.bind(styles);

const images = [i1, i2, i3];

function App() {
    const [open, setOpen] = useState(false);
    return (
        <Layout>
            <div className={cx('wrapper')}>
                <div className={cx('logo')}>
                    <img src={logo} />
                </div>
                <div className={cx('group1')}>
                    <h5>Lorem ipsum dolor sit asmet?</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat.
                        Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                        turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante
                        eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi
                        eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci,
                        sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque
                        a.
                    </p>
                </div>
                <div className={cx('group2')}>
                    {images.map((image) => (
                        <div className={cx('item')}>
                            <h5>Lorem ipsum dolor sit amet</h5>

                            <div className={cx('item-content')}>
                                <img src={image} />
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales,
                                    faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean
                                    consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue.{' '}
                                </span>
                            </div>
                            <span>
                                Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit
                                nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
                                porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default App;
