import blogBlackground from '../../../public/blog-background.png';
import Image from 'next/image';
import { getAllBlogs, Blog } from '../../../sanity/client';
import Link from 'next/link';


function BlogPost({className, post} : {className?: string, post: Blog}){ 
    return(
        <Link className={`m-4 ${className}`} href={`/blog/${post.slug.current}`}>
            <div className='relative h-fit w-full m-2'>
                <div className='z-10 p-10 break-inside-avoid'>
                    <h1 className="text-4xl text-black font-bold">{post.title}</h1>
                    <p className="text-black">{post.description}</p>
                </div>
                <Image className={"-z-[1] object-cover"} fill={true} src={blogBlackground} alt="paper blog background" />
                
            </div>
        </Link>
    );

}

export default async function Blogs() {
  const blogs:Blog[] = await getAllBlogs();
  return (
    <div className={`min-h-screen`}>
      
      <div className={`${" columns-1  md:columns-2 lg:columns-3 mt-20" }`}>
        {
          blogs.map((blog) => {
            return (
              <BlogPost className={""} key={blog.title} post={blog}/>
            )
          })
        }
      </div>
    </div>
  );
}