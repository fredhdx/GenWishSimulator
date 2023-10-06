import classes from './WishDisplayCard.module.css';

const WishDisplayCard = ({ wish }) => {
    return (
        <p className={classes.WishDisplayCard}>You get: {wish}</p>
    )
}

export default WishDisplayCard; 