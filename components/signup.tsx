
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from 'sonner';

const Signup: React.FC = () => {
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Please enter your email address");
            return;
        }

        // do regex check for email
        const regex = /\S+@\S+\.\S+/;

        if (!regex.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        router.push("https://app.loch.one/welcome");
    }

    return (
        <div className='flex flex-col items-center justify-center h-[60vh] sm:h-screen w-full sm:w-[35vw] bg-white rounded-sm drop-shadow-4xl gap-4'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-2/3">
                <h1 className="text-4xl text-gray-300 pb-4">Sign up for exclusive access.</h1>
                <input className="focus:outline-none drop-shadow-lg border border-gray-200 text-black rounded-lg p-4" type="text" value={email} onChange={(e: any) => setEmail(e.target.value)} placeholder="Your email address" />
                <button className="drop-shadow-lg bg-black hover:bg-gray-800 transition-all rounded-lg p-4" type="submit">Get Started</button>
            </form>
            <p className="text-gray-700 font-semibold text-sm sm:text-base pt-4">You’ll receive an email with an invite link to join.</p>
        </div>
    );
};

export default Signup;
