import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import React, { PropsWithChildren, useEffect, useState } from 'react';

import Dots from '@components/Common/Carousel/Dots';
import CarouselControls from '@components/Common/Carousel/CarouselControls';

type Props = PropsWithChildren &
  EmblaOptionsType & {
    showDots?: boolean;
    countPerSlide?: number;
    showControls?: boolean;
  };

const Carousel = ({
  children,
  showDots = true,
  countPerSlide = 1,
  showControls = true,
  ...options
}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on('select', selectHandler);

    return () => {
      emblaApi?.off('select', selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  return (
    <div className="overflow-hidden relative" ref={emblaRef}>
      <div className="flex">{children}</div>
      {showDots && (
        <Dots itemsLength={Math.ceil(length / countPerSlide)} selectedIndex={selectedIndex} />
      )}
      {showControls && (
        <CarouselControls
          canScrollNext={canScrollNext}
          canScrollPrev={canScrollPrev}
          onNext={() => emblaApi?.scrollNext()}
          onPrev={() => emblaApi?.scrollPrev()}
        />
      )}
    </div>
  );
};
export default Carousel;
