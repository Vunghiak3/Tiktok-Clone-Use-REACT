import classNames from "classnames/bind";
import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

function Wrapper({children, className, ...props}) {
    return <div className={cx('wrapper', className)} {...props}>
        {children}
    </div>;
}

export default Wrapper;