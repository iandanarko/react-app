import { title } from "process"
import { articles } from "../lib/placeholder-data"
import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="py-8 p-3 font-bold text-2xl md:text-4xl max-w-2xl text-center">
        We release interesting articles about technology
      </h1>
      <div className="text-[#D9D9D9] tracking-widest">/////////////////////////</div>
      
      <div>
        {articles.map((a) => (
          <div key={a.id} className="flex items-center md:p-2 max-w-2xl">
            <Image 
              src={a.image}
              alt={a.title}
              width={120}
              height={120}
              className="rounded-lg object-cover"
            />
            <div className="h-[130px] flex flex-col justify-center ml-4 md:gap-0.5">
              <h4 className="font-bold text-sm">{a.title}</h4>
              <span className="text-xs text-gray-600">{a.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}