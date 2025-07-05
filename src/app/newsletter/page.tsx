import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 justify-center items-center">
      <Image 
        src="newsletter/logo.svg"
        alt="logo"
        width={75}
        height={75}
      />
      <h1 className="font-bold text-black text-4xl md:text-8xl p-5 text-center">Join our newsletter</h1>
      <div className="p-5">
        <p className="text-slate-500 mx-auto text-center text-xl md:text-3xl max-w-5xl">Keep up with our latest collections, exclusive deals, and special offers!</p>
        <p className="text-slate-500 mx-auto text-center text-xl md:text-3xl max-w-5xl">We introduce a new collection every week, so stay tuned to snag the hottest items just for you.</p>
      </div>

      <div className="bg-white rounded-xl p-3 md:p-6 m-10 w-full max-w-xl flex flex-col gap-y-4">
        <input
          placeholder="Enter your email address"
          className="border border-gray-300 rounded-xl p-3 md:p-5 w-full text-center"
        />
        <button className="bg-blue-700 hover:bg-blue-800 text-white py-3 md:py-5 rounded-xl w-full">
          Subscribe now
        </button>
        <p className="text-center text-slate-500 text-sm">Your email is 100% confidential and won&apos;t send you any spam</p>
      </div>
    </div>
  );
}