import express from 'express';

import { createPost, deletePost, getPosts, likePost, updatePost } from '../controllers/posts.js';

const router = express.Router();

// http://localhost:4200/posts
router.get('/', getPosts);
router.post('/', createPost);
// router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;