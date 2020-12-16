import React from 'react';

export default function Home() {
    const title = "Hello World";
    const enhancedTitle = title + " - React App!";

    return (
        <>
        <h1>{enhancedTitle}</h1>
        </>
    )
}