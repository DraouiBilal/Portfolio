import Link from "next/link";
import { Project } from "../interfaces/types";

type props = {
    project: Project
}

const Card = ({ project }: props) => {

    const { name, description, date, image, tags, url } = project;

    return (
        <div className="container mx-auto my-7" style={{width:"550px"}}>

            <div className="w-full shadow-md hover:shadow-xl rounded-lg p-3 bg-slate-700">
                <div className="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0">

                    <Link href={url} className="group cursor-pointer h-full flex items-center">

                        <div className="aspect-w-3 cursor-pointer aspect-h-2 bg-white border-white border">

                            <img className="object-cover cursor-pointer h-full shadow-lg rounded-lg group-hover:opacity-75" src={image} alt={`${name} logo`} />

                        </div>

                    </Link>

                    <div className="sm:col-span-2">

                        <div className="mt-2">

                            <a href={url} className="group">

                                <h4 className=" text-white text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
                                    {name}
                                </h4>
                                <h6 className="text-sm text-white">{date}</h6>

                            </a>

                            <p className=" text-white my-4 text-sm font-normal text-skin-base leading-5">
                                {description}
                            </p>

                        </div>
                        <div className="flex items-center w-full justify-evenly ">

                            <div className="flex items-center justify-evenly flex-wrap w-full">
                                {tags.map((tag,index) => (
                                    <span key={index} className="text-white bg-blue-600 inline-flex items-center my-1 leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-blue-600 border-skin-input">
                                        {tag}
                                    </span>
                                ))}
                            </div>


                        </div>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Card;