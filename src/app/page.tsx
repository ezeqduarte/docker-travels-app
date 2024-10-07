import Carousel from "@/lib/components/generals/carousel/Carousel";

export default function Home() {
  return (
    <div className="grow bg-white h-full py-[80px] px-[30px] ">
        <Carousel title="Populares" slides={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} options={{dragFree: true}}></Carousel>
    </div>
  );
}