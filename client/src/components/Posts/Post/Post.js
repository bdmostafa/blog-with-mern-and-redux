import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import moment from "moment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({
  post: {
    _id,
    title,
    writer,
    tags,
    message,
    selectedFile,
    likeCount,
    createdAt,
  },
  setCurrentId,
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          selectedFile ||
          "https://www.whizsky.com/wp-content/uploads/2020/06/blog2.png"
        }
        title={title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{writer}</Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(_id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {tags?.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <Typography variant="h5" className={classes.title} gutterBottom>
        {title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(_id))}
        >
          <ThumbUpIcon fontSize="small" />
          Like {likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(_id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
