import ContactForm from "../../components/contactForm";

const Contact = () => {
    return (
        <div className="bg-[rgb(244,243,248)]">
            <h1 className="text-blue-600 text-5xl text-extrabold text-center py-10">VOICI UN FORMULAIRE POUR ME CONTACTER</h1>

            <h3 className="my-8 mx-3 text-3xl text-center">
                Vous avez des questions ?
            </h3>
            <ContactForm />
            <div className="w-full flex justify-center">
                <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-x-6 mt-12 border-2 border-slate-800 p-12 mb-3">
                    <div className="mb-12 lg:mb-0 text-center mx-auto">
                        <svg className="w-8 h-8 text-blue-600 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                        <h6 className="font-medium">2255 Route des dolines, 06560 Valbonne</h6>
                    </div>
                    <div className="mb-6 md:mb-0 text-center mx-auto">
                        <svg className="w-8 h-8 text-blue-600 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
                        <h6 className="font-medium">+33751233727</h6>
                    </div>
                    <div className="text-center mx-auto">
                        <svg className="w-8 h-8 text-blue-600 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"/></svg>
                        <h6 className="font-medium">bilaldraoui22@gmail</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact