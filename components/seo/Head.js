import React from 'react'
import Head from 'next/head'

export default function HeadTags({
    title,
    description,
    keywords,
    author
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="1 days" />
            <meta name="author" content={author} />
        </Head>
    )
}
