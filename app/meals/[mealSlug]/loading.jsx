import styles from '../loading.module.css';

const LoadingOut = () => {
    return (
        <p className={styles.loading}>Fetching Meal details</p>
    );
};

export default LoadingOut;