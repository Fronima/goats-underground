import Link from "next/link"



export default function Collaborators(){
    return (
        <div className="min-h-screen pt-20">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="text-center flex flex-col">
                    <div>
                        <div className="aspect-square relative h-[30vh] bg-blue mx-auto">
                            <img src="https://picsum.photos/200/300" alt="collaborator" className="object-cover w-full h-full" />
                        </div>
                    </div>
                    
                    <Link href="/collaborators/1">
                        <h2 className="text-xl font-bold">Collaborator Name</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}