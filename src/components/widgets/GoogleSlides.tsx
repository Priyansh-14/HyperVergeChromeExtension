// import SlidesCarousal from "../SlidesCarousal"
import Slides from "../Slides";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GoogleSlides = () => {
  return (
    <div className="h-96 aspect-video rounded-2xl bg-[#bfc1b5] flex flex-col items-center justify-center">
      <h4 className="text-xl font-semibold text-center p-5">Google Slides</h4>
      <Carousel className="w-full aspect-video">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              {/* <img src="https://placehold.co/500x281" /> */}
              <Slides />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default GoogleSlides;
