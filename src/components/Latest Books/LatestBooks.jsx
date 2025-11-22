import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleLatestBook from '../../Single Book/SingleLatestBook';

const LatestBooks = () => {
    const [latestBooks, setLatestBooks] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:1111/latest-books")
        .then(res => setLatestBooks(res.data))
        .catch(err=> console.log(err)
        )
    })

    return (
        <div className='my-5 md:my-10 lg:my-15 max-w-10/12 mx-auto'>
            <h1 className='text-4xl text-center font-semibold mb-10'>Latest Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-11/12 mx-auto'>
                {
                    latestBooks.map(LBook =><SingleLatestBook LBook={LBook} key={LBook._id}/> )
                }
            </div>
        </div>
    );
};

export default LatestBooks;