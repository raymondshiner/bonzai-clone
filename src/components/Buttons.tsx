export const LogInButton = () => (
    <button
        onClick={() => alert("Login Button Stub")}
        className="
    w-full border-[#02B289] border-2 
    mt-2
    rounded h-11 uppercase     
    text-[#02B289] font-black
    text-sm tracking-widest
    transition
    hover:bg-[#02B289]
    hover:text-white
"
    >
        Log in
    </button>
);

export const StartFreeButton = () => (
    <button
        onClick={() => alert("Start Free Button Stub")}
        className="
    w-full bg-[#02B289]  
    rounded h-11 uppercase     
    text-white font-black
    text-sm tracking-widest
    transition
    hover:bg-[#00a37e]
"
    >
        Start Free
    </button>
);
