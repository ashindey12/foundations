import React, {
  createRef,
  Dispatch,
  FC,
  LegacyRef,
  memo,
  MouseEvent,
  MutableRefObject,
  RefObject,
  SetStateAction,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'
import { elFadeIn, Icon } from '@reapit/elements'
import { CarouselWrapper, CarouselControlsLeft, CarouselControlsRight, CarouselCol, CarouselGrid } from './__styles__'
import scrollIntoView from 'scroll-into-view-if-needed'
import { trackEvent } from '../../core/analytics'
import { TrackingEvent } from '../../core/analytics-events'

export interface CarouselProps {
  items: JSX.Element[]
  numberCols: number
  className?: string
}

export const handleScroll =
  (
    itemRefs: MutableRefObject<LegacyRef<HTMLDivElement>[]>,
    nextImage: number,
    setCurrentImage: Dispatch<SetStateAction<number>>,
  ) =>
  (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const nextImageElement = itemRefs.current[nextImage] as RefObject<HTMLDivElement>

    if (!nextImageElement?.current) return

    trackEvent(TrackingEvent.ClickScrollImageCarousel, true)

    scrollIntoView(nextImageElement.current, { scrollMode: 'if-needed', behavior: 'smooth' })
    setCurrentImage(nextImage)
  }

export const getCarouselDimensions = (numberCols: number, currentImage: number, items: JSX.Element[]) => () => {
  const numberItems = items.length
  const percentageWidth = (100 / numberCols).toFixed(3)
  const nextImage = currentImage < numberItems ? currentImage + numberCols : currentImage
  const prevImage = currentImage > 0 ? currentImage - numberCols : currentImage
  const shouldShowNext = nextImage < numberItems
  const shouldShowPrev = currentImage > 0

  return {
    nextImage,
    prevImage,
    shouldShowNext,
    shouldShowPrev,
    percentageWidth,
  }
}

export const Carousel: FC<CarouselProps> = memo(({ items, numberCols, className }) => {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const itemRefs = useRef<LegacyRef<HTMLDivElement>[]>([])

  itemRefs.current = items.map((_, i) => itemRefs.current[i] ?? createRef())

  const { percentageWidth, prevImage, nextImage, shouldShowNext, shouldShowPrev } = useMemo(
    getCarouselDimensions(numberCols, currentImage, items),
    [numberCols, currentImage, items],
  )

  const handleScrollNext = useCallback(handleScroll(itemRefs, nextImage, setCurrentImage), [itemRefs, nextImage])
  const handleScrollPrev = useCallback(handleScroll(itemRefs, prevImage, setCurrentImage), [itemRefs, prevImage])

  return (
    <CarouselWrapper className={className}>
      {shouldShowPrev && (
        <CarouselControlsLeft className={elFadeIn} onClick={handleScrollPrev}>
          <Icon icon="backSystem" intent="primary" fontSize="0.75em" />
        </CarouselControlsLeft>
      )}
      {shouldShowNext && (
        <CarouselControlsRight className={elFadeIn} onClick={handleScrollNext}>
          <Icon icon="nextSystem" intent="primary" fontSize="0.75em" />
        </CarouselControlsRight>
      )}
      <CarouselGrid percentageWidth={percentageWidth} numberCols={numberCols} numberItems={items.length}>
        {items.map((item, index) => (
          <CarouselCol key={index} ref={itemRefs.current[index]}>
            {item}
          </CarouselCol>
        ))}
      </CarouselGrid>
    </CarouselWrapper>
  )
})
