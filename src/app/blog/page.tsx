export default function Page() {

  return (
    <div className="min-h-screen flex items-start justify-center bg-neutral-100 p-10 shadow-xl">
      <div className="bg-white max-w-md min-h-1/2 rounded-md p-5">
        <img 
          src="Cactus.jpg"
          alt="Flower"
          className="w-100 mx-auto"
        />
        <h1 className="font-bold mt-5 mb-3">Embracing Minimalism</h1>
        <p className="break-normal">From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
        <div className="border-t border-dotted border-gray-400 my-4"></div>
        <p className="text-sm text-gray-500">Annie Sprat</p>
      </div>
    </div>
  )
}