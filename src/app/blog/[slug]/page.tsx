import { getBlog } from '../../../../sanity/client';


export default async function BlogDetail({params}: {params: {slug: string}}) {
  const { slug } = params;
  const blog = await getBlog(slug);

  
  console.log(blog);
  return (
    <div className="mt-20 p-10 min-h-screen">
      <h1 className='text-2xl font-bold text-gu-brand'>{blog[0].title}</h1>
      <h3 className='text-sm text-gray-300'>{blog[0].author}</h3>
      <p className='text-sm text-gray-300'>updated: {new Date(blog[0]._updatedAt).toLocaleString()}</p>
      <div className='flex-col flex gap-4 mt-5'>
        {blog[0].content.map((block:any) => {
          return (
            <div>
              <p>{block.children[0].text}</p>
            </div>
          )
        })
      }
      </div>
    

    </div>
  );
}