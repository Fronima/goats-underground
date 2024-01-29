
import Image from "next/image";
import { getHomepageHeader } from "../../sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
import { client } from "../../sanity/client";
import { Courier_Prime } from "next/font/google";
import { InferGetServerSidePropsType } from "next";

type Homepage = {
  title: string,
  description: string,
  image: string,
}

const courier_prime = Courier_Prime({ weight: ["400"], subsets: ["latin"]});

export const getServerSideProps = async () => {
  // Fetch data from an external API
  const homepage:Homepage[] = await getHomepageHeader();
  return {
    props: {
      homepage,
    },
  };
}

export default async  function Home({homepage}: Readonly<InferGetServerSidePropsType<typeof getServerSideProps>>) {

  const builder = imageUrlBuilder(client);

  return (
    <main className="flex h-full w-full">
      <div className="h-full w-full overflow-hidden">
        {
          homepage.map((section) => {
            return (
              <div key={section.title} className={"h-full w-full overflow-hidden " + courier_prime.className}>
                <Image src={builder.image(section.image).url()} alt={section.title} layout="fill" objectFit="cover" />
                <div className="absolute top-1/2 pl-10 transform -translate-y-1/2 bg-black/10 backdrop-blur-sm">
                  <h1 className="text-white text-7xl">{section.title}</h1>
                  <p className="text-white text-2xl">{section.description}</p>
                </div>
              </div>
            )
          }) 
        }
      </div>
    </main>
  );
}
