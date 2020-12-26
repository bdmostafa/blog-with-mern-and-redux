import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    writer: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
// console.log(postData)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();

    dispatch(createPost(postData))
  };
  const clear = () => {

  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Writing a Blog</Typography>
        <TextField
          name="writer"
          variant="outlined"
          label="Writer"
          fullwidth="true"
          value={postData.writer}
          onChange={(e) =>
            setPostData({
              ...postData,
              writer: e.target.value,
            })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullwidth="true"
          value={postData.title}
          onChange={(e) =>
            setPostData({
              ...postData,
              title: e.target.value,
            })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullwidth="true"
          value={postData.message}
          onChange={(e) =>
            setPostData({
              ...postData,
              message: e.target.value,
            })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullwidth="true"
          value={postData.tags}
          onChange={(e) =>
            setPostData({
              ...postData,
              tags: e.target.value,
            })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({
                ...postData,
                selectedFile: base64,
              })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullwidth="true"
        >
            Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="outlined"
          color="secondary"
          size="small"
          onClick={clear}
          fullwidth="true"
        >
            Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
