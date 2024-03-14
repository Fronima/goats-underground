import blogBlackground from '../../../public/blog-background.png';
import Image from 'next/image';


function BlogPost({className, title, subtitle, summary} : {className?: string, title: string, subtitle?: string, summary: string}){
    return(
        <div className={`m-4 ${className}`}>
            <div className='relative h-fit w-full m-2'>
                <div className='z-10 p-10'>
                    <h1 className="text-4xl text-black font-bold">{title}</h1>
                    <p className="text-2xl font-bold text-black">{"This is a blog post about goats"}</p>
                    <p className="text-black">{summary}</p>
                </div>
                <Image className={"-z-[1] object-cover"} fill={true} src={blogBlackground} alt="paper blog background" />
                
            </div>
        </div>
    );

}

export default function Blog() {
  return (
    <div className={`min-h-screen`}>
      <h1>Blog</h1>
      <div className={`${"grid gap-3 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 " }`}>
        <BlogPost className='' title="Blog Post 1" summary={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
        <BlogPost className='' title="Blog Post 2" summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Gravida in fermentum et sollicitudin ac orci. Orci sagittis eu volutpat odio facilisis mauris. Integer vitae justo eget magna fermentum iaculis eu non. Tortor posuere ac ut consequat semper viverra. Tortor consequat id porta nibh venenatis. Amet justo donec enim diam vulputate ut. Ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra. Egestas integer eget aliquet nibh praesent tristique magna sit amet. A cras semper auctor neque. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Tincidunt augue interdum velit euismod in.

    Faucibus purus in massa tempor nec feugiat nisl. Blandit libero volutpat sed cras ornare. Consequat id porta nibh venenatis cras sed felis. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Eget magna fermentum iaculis eu. Metus vulputate eu scelerisque felis imperdiet. Commodo odio aenean sed adipiscing diam donec. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Etiam sit amet nisl purus in mollis nunc. Nam libero justo laoreet sit.'/>
        <BlogPost className='' title="Blog Post 3" summary='Vulputate ut pharetra sit amet aliquam id. Eget duis at tellus at urna. In arcu cursus euismod quis viverra nibh cras. Velit aliquet sagittis id consectetur. Ut eu sem integer vitae justo eget magna fermentum iaculis. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Mauris sit amet massa vitae tortor condimentum lacinia. Est pellentesque elit ullamcorper dignissim cras. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Aliquet sagittis id consectetur purus ut. Et leo duis ut diam quam nulla porttitor massa id. Hac habitasse platea dictumst quisque sagittis. Fermentum et sollicitudin ac orci phasellus. Elementum eu facilisis sed odio. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Purus viverra accumsan in nisl nisi scelerisque. Aliquet eget sit amet tellus cras adipiscing enim eu turpis.

        '/>
        <BlogPost className='' title="Blog Post 3" summary='Vulputate ut pharetra sit amet aliquam id. Eget duis at tellus at urna. In arcu cursus euismod quis viverra nibh cras. Velit aliquet sagittis id consectetur. Ut eu sem integer vitae justo eget magna fermentum iaculis. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Mauris sit amet massa vitae tortor condimentum lacinia. Est pellentesque elit ullamcorper dignissim cras. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Aliquet sagittis id consectetur purus ut. Et leo duis ut diam quam nulla porttitor massa id. Hac habitasse platea dictumst quisque sagittis. Fermentum et sollicitudin ac orci phasellus. Elementum eu facilisis sed odio. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Purus viverra accumsan in nisl nisi scelerisque. Aliquet eget sit amet tellus cras adipiscing enim eu turpis.

        '/>
        <BlogPost className='' title="Blog Post 4" summary='Vulputate ut pharetra sit  quis viverra nibh cras. Velit aliquet sagittis id consectetur. Ut eu sem integer vitae justo eget magna fermentum iaculis. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Mauris sit amet massa vitae tortor condimentum lacinia. Est pellentesque elit ullamcorper dignissim cras. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Aliquet sagittis id consectetur purus ut. Et leo duis ut diam quam nulla porttitor massa id. Hac habitasse platea dictumst quisque sagittis. Fermentum et sollicitudin ac orci phasellus. Elementum eu facilisis sed odio. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Purus viverra accumsan in nisl nisi scelerisque. Aliquet eget sit amet tellus cras adipiscing enim eu turpis.

        '/>
        <BlogPost className='' title="Blog Post 5" summary='Vulputate ut pharetra sit amet aliquam idet tellus cras adipiscing enim eu turpis.

    '/>
      </div>
    </div>
  );
}