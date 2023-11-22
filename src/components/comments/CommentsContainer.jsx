import React, { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import { getCommentsData } from "../../data/comments"
import Comment from './Comment'

export default function CommentsContainer({ className, logginedUserId }) {
    const [comments, setComments] = useState([])
    const [selectedComment, setSelectedComment] = useState(null)
    const mainComments = comments.filter(comment => comment.parent === null)
    const addComment = (value, parent = null, replyOnUser = null) => {
        const newComment = {
            _id: Math.random().toString(),
            user: {
                _id: 'a',
                name: 'Elturan Shujai'
            },
            desc: value,
            post: '1',
            parent: parent,
            replyOnUser: replyOnUser,
            createdAt: new Date().toISOString()
        }
        setSelectedComment(null)
        setComments((curState) => {
            return [newComment, ...curState]
        })
    }

    const updateComment = (value, commentId) => {
        let updatedComments = comments.map(comment => {
            if (comment._id == commentId) {
                return { ...comment, desc: value };
            }
            return comment;
        })
        setComments(updatedComments)
        setSelectedComment(null)
    }

    const deleteComment = (commentId) => {
        let newCommentsArray = comments.filter(comment => comment._id !== commentId)
        setComments(newCommentsArray)
    }

    const getReplyComments = (commentId) => {
        let replyComments = comments.filter(comment => (
            comment.parent === commentId
        )).sort((a, b) => {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        })
        return replyComments;
    }

    useEffect(() => {
        getCommentsData()
            .then(res => setComments(res))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className={`${className}`}>
            <CommentForm
                btnLabel="Send"
                formSubmitHandler={(value) => addComment(value)}
            />
            <div className="space-y-4 mt-8">
                {mainComments.map(comment => (
                    <Comment
                        key={comment._id}
                        comment={comment}
                        logginedUserId={logginedUserId}
                        selectedComment={selectedComment}
                        setSelectedComment={setSelectedComment}
                        addComment={addComment}
                        parentId={selectedComment?._id}
                        updateComment={updateComment}
                        deleteComment={deleteComment}
                        replies={getReplyComments(comment._id)}
                    />
                ))}
            </div>
        </div>
    )
}
