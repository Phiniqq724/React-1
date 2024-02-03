import classes from './Post.module.css';


function Post(props) {
    return (
        <div className={classes.post}>
            <p className="text-3xl">{props.author}</p>
            <p>{props.body}</p>
        </div>
    );
}

export default Post;