import Carousel from 'react-bootstrap/Carousel'

export const CarouselProduct = ({productImgs}) => {
      return (
            <Carousel>
                  <Carousel.Item 
                        className="slider__image">
                        <img
                              src={ productImgs?.[0] }
                              alt="First slide"
                        />
                  </Carousel.Item>

                  <Carousel.Item className="slider__image">
                        <img
                              src={ productImgs?.[1] }
                              alt="Second slide"
                        />
                  </Carousel.Item>

                  <Carousel.Item className="slider__image">
                        <img
                              src={ productImgs?.[2] }
                              alt="Third slide"
                        />
                  </Carousel.Item>
            </Carousel>
      )
}
