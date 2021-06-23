import classes from './Button.module.css';

const Button = (props: {children: any}) => {
    return (
        <button className={classes.button}>{props.children}</button>
    );
}

export default Button;