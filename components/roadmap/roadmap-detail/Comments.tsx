import { Comment } from './types';

interface CommentsProps {
  comments: Comment[];
  isHolder: boolean;
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  onCommentVote: (commentId: number, isDownvote?: boolean) => void;
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  onCommentSubmit: (e: React.FormEvent) => void;
  commentText: string;
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  setCommentText: (text: string) => void;
  isSubmitting: boolean;
}

export const Comments = ({
  comments,
  isHolder,
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  onCommentVote,
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  onCommentSubmit,
  commentText,
  setCommentText,
  isSubmitting
}: CommentsProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Comments ({comments.length})
        </h2>

        {/* Comment Form */}
        <form onSubmit={onCommentSubmit} className="mb-8">
          <div className="bg-gray-50 rounded-xl p-4">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows={3}
              placeholder="What do you think about this feature?"
              className="w-full bg-white p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {isHolder ? 'You can comment as an NFT holder' : 'You need to be an NFT holder to comment'}
              </p>
              <button
                type="submit"
                disabled={isSubmitting || !commentText.trim()}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSubmitting ? 'Submitting...' : 'Post Comment'}
              </button>
            </div>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="group">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {comment.author.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{comment.author}</p>
                      <p className="text-xs text-gray-500 truncate">{comment.authorWallet}</p>
                    </div>
                    <span className="text-sm text-gray-500 flex-shrink-0">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{comment.text}</p>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => onCommentVote(comment.id)}
                      className={`flex items-center gap-1 transition-colors ${
                        comment.isLiked 
                          ? 'text-green-600' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <svg className={`w-4 h-4 ${comment.isLiked ? 'fill-green-600' : 'fill-none stroke-current'}`} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span className="text-sm">{comment.likes}</span>
                    </button>
                    <button 
                      onClick={() => onCommentVote(comment.id, true)}
                      className={`flex items-center gap-1 transition-colors ${
                        comment.isDisliked 
                          ? 'text-red-600' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <svg className={`w-4 h-4 rotate-180 ${comment.isDisliked ? 'fill-red-600' : 'fill-none stroke-current'}`} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span className="text-sm">{comment.dislikes}</span>
                    </button>
                    <button className="text-sm text-gray-500 hover:text-gray-700">Reply</button>
                  </div>
                </div>
              </div>
              <div className="mt-4 pl-12 hidden group-hover:block">
                <div className="h-px bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 