import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full mb-4 justify-center'>
                <img src={appwriteService.filePreview(featuredImage)} alt={title}
                className='rounded-xl' />
            </div>
            <h2 className='text-2xl font-bold text-gray-700'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard