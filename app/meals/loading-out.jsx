import styles from './loading.module.css';

const LoadingOut = () => {
    return (
        <p className={styles.loading}>Fetching Meals</p>
    );
};

export default LoadingOut;