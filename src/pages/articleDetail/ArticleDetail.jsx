import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'
import { Link } from 'react-router-dom'
import SuggestedPosts from './container/SuggestedPosts'
import CommentsContainer from '../../components/comments/CommentsContainer'

const BreadCrumbData = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Article title", link: "/blog/1" },
]

const suggPosts = [
    {
        image: images.CardImage1,
        title: "Lorem ipsum dolor sit amet",
        createdAt: "2023-10-30T17:45:13.218+00:00"
    },
    {
        image: images.CardImage2,
        title: "Lorem ipsum dolor sit amet",
        createdAt: "2023-10-30T17:46:02.923+00:00"
    },
    {
        image: images.CardImage3,
        title: "Lorem ipsum dolor sit amet",
        createdAt: "2023-10-31T02:13:27.043+00:00"
    },
]

const tagsData = [
    "Medical",
    "Cities",
    "Animal",
    "Sport",
    "Travel"
]

export default function ArticleDetail() {
    return (
        <MainLayout>
            <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
                <article className='flex-1'>
                    <BreadCrumbs data={BreadCrumbData} />
                    <img
                        className='rounded-xl w-full'
                        src={images.CardImage2}
                        alt="image"
                    />
                    <Link to="/blog?category=selectedCategory" className='uppercase text-primary text-sm font-roboto inline-block mt-4 md:text-base'>
                        China
                    </Link>
                    <h1 className='text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis.</h1>
                    <div className='mt-4 text-dark-soft'>
                        <p className='leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione explicabo quas fugiat excepturi assumenda at aperiam provident cum maiores magnam. Quia architecto, natus dolor itaque, laboriosam qui unde repellat consectetur cupiditate distinctio eaque eum, labore nemo odit iusto earum harum.</p>
                    </div>
                    <CommentsContainer
                        className="mt-10"
                        logginedUserId="a"
                    />
                </article>
                <SuggestedPosts
                    header="Latest Article"
                    posts={suggPosts}
                    tags={tagsData}
                    className="mt-8 lg:mt-0 lg:max-w-xs"
                />
            </section>
        </MainLayout>
    )
}
