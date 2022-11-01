
import { Loading, Notify } from "notiflix";
import { useRef } from "react";

type Data = {
    name: string;
    email: string;
    message: string;
}

const sendMail = async (data: Data) => {
    
    try {
        Loading.dots("Sending the email...");
        const res = await fetch("/api/contact", {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(data)
        })
        console.log(await res.text());
        
        if(!res.ok)
            throw new Error(`Error ${res.status} : ${res.statusText}`);
        Loading.remove();
        Notify.success("Email sent successfully");
    } catch (error) {
        console.log(error);
        Loading.remove();
        Notify.failure("An error occured while sending the email");
    }

}

const ContactForm = () => {

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!nameRef.current || !emailRef.current || !messageRef.current) return;

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        sendMail(data);
    }

    return (
        <div className="flex justify-center w-full">
            <form className="w-full max-w-2xl" onSubmit={(e)=>onSubmit(e)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Nom complet
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Draoui Bilal" ref={nameRef} required />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="bilaldraoui22@gmail.com" ref={emailRef} required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Message
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 h-96 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" ref={messageRef} placeholder="Bonjour" />
                    </div>
                </div>
                <div className="md:w-2/3">
                    <button className="font-bold shadow bg-cyan-500 hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded font" type="submit">
                        Envoyer &gt;
                    </button>
                </div>
            </form>
        </div>
    )

}

export default ContactForm;