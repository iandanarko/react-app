import Image from "next/image";

class Content {
  title: string
  body: string
  img: string
  icon: string

  constructor(title: string, body: string, img: string, icon: string) {
    this.title = title
    this.body = body
    this.img = img
    this.icon = icon
  }
}

const cardContents = [
  {
    id: 1,
    title: "Collect Feedback at Multiple Touchpoints",
    body: "Provide a comprehensive understanding of the customer experience",
    img: "/features/photo_1.png",
    icon: "👋"
  },
  {
    id: 2,
    title: "Ask Targeted and Specific Questions",
    body: "Avoid vaugue or open-ended questions that may not yield actionable insights",
    img: "/features/photo_2.png",
    icon: "🥅"
  },
  {
    id: 3,
    title: "Prioritize and Respond to Feedback",
    body: "Communicate the changes or improvements you've made in response to their feedback.",
    img: "/features/photo_3.png",
    icon: "💬"
  }
]

function Card({ content }: { content: Content }) {
  return (
    <div className="bg-[#212936] rounded-xl h-[500px] w-[400px] m-4 p-5">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 text-3xl shadow-md">
        {content.icon}
      </div>
      <h3 className="text-[#E5E7EB] t-2xl font-semibold my-4">{content.title}</h3>
      <p className="text-[#D2D5DA] t-xl my-4">{content.body}</p>
      <Image 
        src={content.img}
        alt={content.title}
        width={400}
        height={400}
        className="rounded-xl"
      />
    </div>
  )
}

export default function Page() {

  return (
    <div className="w-screen h-full md:h-screen bg-[#121826] bg-[url('/features/Background_image.png')]">
      <div className="flex flex-col w-screen h-1/4 justify-center items-center">
        <h1 className="text-[#E5E7EB] font-semibold w-full md:max-w-1/3 text-2xl md:text-5xl text-center leading-normal">Quality feedbacks for your SaaS products</h1>
        <p className="text-[#9DA3AE] py-3 text-lg">The blocks & components you need</p>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {cardContents.map(c => <Card key={c.id} content={c} />)}
      </div>
    </div>
  )
}