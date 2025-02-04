import Image from 'next/image'
import React from 'react'

const GalleryImage = () => {
    return (
        <div>
            <div><h1 className='text-center'>
                Regular Image Page
            </h1>
                <img src='https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg' alt='' className='mx-auto' />
            </div>
            <div><h1 className='text-center'>
                NextjsImage
            </h1>
                <Image src='https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg' alt='' className='mx-auto' width={200} height={200} />
            </div>
        </div>




    )
}

export default GalleryImage
