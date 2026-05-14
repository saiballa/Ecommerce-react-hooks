import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination,Navigation } from "swiper/modules";


const MySlider = () => {
  return (
    <Swiper
  spaceBetween={0}
  slidesPerView={1}
  modules={[Navigation, Pagination, Autoplay]}
  navigation={true}
  pagination={{ clickable: true }}
  autoplay={{ delay: 4000 }}
  className="w-full"
>
  <SwiperSlide>
    <img
      src="https://img.magnific.com/free-vector/flat-design-fashion-week-facebook-cover_23-2151084422.jpg?t=st=1778072990~exp=1778076590~hmac=cf3baa374d5ca97e34a2d505115a3fef9b4c7a66c256d4f180df6b772a3976d9&w=1480"
      alt="slide1"
      className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
    />
  </SwiperSlide>

  <SwiperSlide>
    <img
      src="https://img.magnific.com/free-psd/banner-fashion-store-template_23-2148675207.jpg?t=st=1778072923~exp=1778076523~hmac=8679e8085f22a4ea9a409264c6aeced206f7430ed9b56d39352dc2174d4cf57b&w=1480"
      alt="slide2"
      className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
    />
  </SwiperSlide>

  <SwiperSlide>
    <img
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEji27hydpaCs4kFdF-dwgLa6ZZIrn4zNL9fnOUCvzUKM14I8irBahfO5xzmRHCB1g_iCrBm1gByYyvkIhC2Fs_zDi45TkmdIkC2YnNeQP7OYfk18HTUGGgGYRDp3G0ERZccg7TFSUE-s-I1xq4cpUxUoZR4oPvvq-4O11ASq_ljLbk52J5iK957NGBR/s1280/fashion%20banner%20design.webp"
      alt="slide3"
      className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
    />
  </SwiperSlide>
 
</Swiper>
  );
};

export default MySlider;