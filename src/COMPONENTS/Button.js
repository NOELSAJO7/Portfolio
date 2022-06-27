import './Button.css';

const Button=(props)=>{
        //  const classes=;
    return(
        <div className={'button '+props.className}>{props.children}</div>
    );
}

export default Button;  