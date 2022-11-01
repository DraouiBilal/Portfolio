const Card = () => {

    return (
        <div className="container mx-auto px-20 w-1/2">

            <div style={{ 'backgroundColor': 'rgb(245 245 245)' }}>
                <div className="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0" style={{ "cursor": "auto" }}>

                    <a href="https://stackdiary.com/" className="group">

                        <div className="aspect-w-3 aspect-h-2">

                            <img className="object-cover shadow-lg rounded-lg group-hover:opacity-75" src="https://stackdiary.com/140x100.png" alt="Featured Photo" style={{ "cursor": "auto" }} />

                        </div>

                    </a>

                    <div className="sm:col-span-2" style={{ "cursor": "auto" }}>

                                                <div className="mt-2" style={{ "cursor": "auto" }}>

                            <a href="https://laravel.cm/articles/traquer-un-champ-validation-conditionelle-react-hook-form-5" className="group">

                                <h4 className="text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary" style={{ "cursor": "auto" }}>A Tailwind CSS Card for Displaying Blog Posts</h4>

                            </a>

                            <p className="mt-1 text-sm font-normal text-skin-base leading-5" style={{ "cursor": "auto" }}>
                                Metus potenti velit sollicitudin porttitor magnis elit lacinia tempor varius, ut cras orci vitae parturient id nisi vulputate consectetur, primis venenatis cursus tristique malesuada viverra congue risus.
                            </p>

                        </div>
<div className="flex items-center space-x-3" style={{ "cursor": "auto" }}>

                            <div className="flex items-center space-x-2" style={{ "cursor": "auto" }}>

                                <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input" style={{ "cursor": "auto" }}>

                                    <svg className="mr-1.5 h-2 w-2 brand-react" fill="currentColor" viewBox="0 0 8 8">

                                        <circle cx="4" cy="4" r="3"></circle>

                                    </svg>
                                    Tag #1
                                </span>

                                <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input" style={{ "cursor": "auto" }}>

                                    <svg className="mr-1.5 h-2 w-2 brand-packages" fill="currentColor" viewBox="0 0 8 8">

                                        <circle cx="4" cy="4" r="3"></circle>

                                    </svg>
                                    Tag #2
                                </span>

                                <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input" style={{ "cursor": "auto" }}>

                                    <svg className="mr-1.5 h-2 w-2 brand-tutoriel" fill="currentColor" viewBox="0 0 8 8">

                                        <circle cx="4" cy="4" r="3"></circle>

                                    </svg>
                                    Tag #3

                                </span>

                            </div>


                        </div>


                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Card;