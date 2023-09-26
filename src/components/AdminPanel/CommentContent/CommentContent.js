import React from 'react'
import AdminCommentBox from '../AdminCommentBox/AdminCommentBox'
import AllCommentBox from '../AllCommentBox/AllCommentBox'

export default function CommentContent() {
  return (
    <div className="comment-content pt-14 pb-5">
        <div className="resent-commrnt bg-gmelo rounded-lg h-[600px] overflow-y-scroll		">
            <h1 className='w-[380px] h-10 mx-auto flex items-center justify-center bg-bg text-text font-bold rounded-b-lg shadow-lg 	'>کامنت های اخیر</h1>
            <div className="comment-boxes flex flex-wrap items-center gap-5 justify-center p-3 mt-4">
                <AdminCommentBox />
                <AdminCommentBox />
                <AdminCommentBox />
                <AdminCommentBox />
                <AdminCommentBox />
                <AdminCommentBox />
            </div>
        </div>
        <div className="all-comment bg-gmelo rounded-lg mt-5">
            <h1 className='w-[380px] h-10 mx-auto flex items-center justify-center bg-bg text-text font-bold rounded-b-lg shadow-lg '>همه کامنت ها</h1>
            <div className="allcomment-boxes flex flex-col gap-2 mt-4 p-3">
                <AllCommentBox />
                <AllCommentBox />
            </div>
        </div>
    </div>
  )
}
