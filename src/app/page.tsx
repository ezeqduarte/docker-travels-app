import { Carousel } from "@/lib/components";

export default function Home() {
  return (
    <div className="grow bg-white min-h-full py-[80px] px-[30px] flex flex-col gap-5 ">
        <Carousel title="Populares" slides={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} options={{dragFree: true}}></Carousel>
        <Carousel title="Populares" slides={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} options={{dragFree: true}}></Carousel>
    </div>
  );
}