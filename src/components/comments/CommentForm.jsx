import React, { useState } from 'react'

export default function CommentForm({
    btnLabel,
    formSubmitHandler,
    formCancelHandler = null,
    initialText = ""
}) {
    const [text, setText] = useState(initialText)
    const handleSubmit = (e) => {
        e.preventDefault();
        formSubmitHandler(text)
        setText("")
    }
    return (
        <form onSubmit={handleSubmit} className={`my-form`}>
            <div className='flex flex-col items-end border border-primary rounded-lg p-4 mx-auto w-[90%] text-xs md:text-base'>
                <textarea
                    className='w-full focus:outline-none bg-transparent'
                    placeholder='Leave your comment here...'
                    rows="5"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <div className='flex items-center gap-x-2 pt-2'>
                    {formCancelHandler &&
                        <button
                            className='px-2 py-1 rounded-lg bg-red-700 text-white font-semibold mt-2 md:px-6 md:py-2.5'
                            type='button'
                            onClick={formCancelHandler}
                        >
                            Cancel
                        </button>
                    }
                    <button type='submit' className='px-2 py-1 rounded-lg bg-primary text-white font-semibold mt-2 md:px-6 md:py-2.5'>{btnLabel}</button>
                </div>
            </div>
        </form>
    )
}
