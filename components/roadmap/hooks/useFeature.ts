import { useState } from 'react';
import { mockFeature } from '../constants';

// eslint-disable-next-line no-unused-vars
export const useFeature = (featureId: number) => {

  const [featureState, setFeatureState] = useState(mockFeature);
  const [isHolder] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVote = (featureId: number, isDownvote: boolean = false) => {
    if (!isHolder) {
      alert('Only Memorable NFT holders can vote on features. Mint your NFT to participate in governance.');
      return;
    }

    setFeatureState(feature => {
      if (isDownvote) {
        return {
          ...feature,
          downvotes: feature.hasDownvoted ? feature.downvotes - 1 : feature.downvotes + 1,
          hasDownvoted: !feature.hasDownvoted,
          votes: feature.hasVoted ? feature.votes - 1 : feature.votes,
          hasVoted: false,
        };
      }
      return {
        ...feature,
        votes: feature.hasVoted ? feature.votes - 1 : feature.votes + 1,
        hasVoted: !feature.hasVoted,
        downvotes: feature.hasDownvoted ? feature.downvotes - 1 : feature.downvotes,
        hasDownvoted: false,
      };
    });
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHolder) {
      alert('Only Memorable NFT holders can comment. Mint your NFT to participate in discussions.');
      return;
    }
    if (!commentText.trim()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newComment = {
      id: featureState.comments.length + 1,
      text: commentText,
      author: 'Anonymous User',
      authorWallet: '0xanon...user',
      createdAt: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
    };

    setFeatureState(prev => ({
      ...prev,
      comments: [newComment, ...prev.comments],
    }));
    setCommentText('');
    setIsSubmitting(false);
  };

  const handleCommentVote = (commentId: number, isDownvote: boolean = false) => {
    if (!isHolder) {
      alert('Only Memorable NFT holders can vote on comments. Mint your NFT to participate in governance.');
      return;
    }

    setFeatureState(feature => ({
      ...feature,
      comments: feature.comments.map(comment => {
        if (comment.id === commentId) {
          if (isDownvote) {
            return {
              ...comment,
              dislikes: comment.isDisliked ? comment.dislikes - 1 : comment.dislikes + 1,
              isDisliked: !comment.isDisliked,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes,
              isLiked: false,
            };
          }
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked,
            dislikes: comment.isDisliked ? comment.dislikes - 1 : comment.dislikes,
            isDisliked: false,
          };
        }
        return comment;
      }),
    }));
  };

  return {
    featureState,
    isHolder,
    commentText,
    setCommentText,
    isSubmitting,
    handleVote,
    handleCommentSubmit,
    handleCommentVote,
  };
}; 