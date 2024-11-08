import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ImgMediaCard() {
    return (
        <div className="Ali">
            <Card style={{ maxHeight: '325px', maxWidth: 300}}>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true} // Enables infinite loop
                >
                    <SwiperSlide>
                        <img
                            src="https://s3-alpha-sig.figma.com/img/637f/099e/69e1c129c1bd9a18a6e6586bce739ba8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vcn58jOEcT0h2Ja7xKe1C4pQ~1gOsLN~X9MERRCBZJMgM-PxseynGuCUjC3xX5ETK0veDiBsA0wKgINvWDvkgigyGpN61uAqtpgi1BssIVvHUH~46D5PVxfCMUUNLR8tWaXwsbnxOfc2cs4WtjOCDGYbNH7hc4vdhteV~nIUH0s-KuAqTcRcHMSPNgh9li9qcZMeMw3pZ4DK~6Aw-OLois4xTzTaNnUofaRwcjKUVXXgn20YdjZQkfwyOehRXJCCD9t1PB4AG~bNJiFATw9Gr-HquJAo8flW5PN6cLGqeHnOfZZXFonEir59bgGmmBisuBsXUbzEmib7iTXia-TBPw__"
                            alt="Product Image 1"
                            style={{ width: '70%', height: '200px',marginLeft:'60px' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://www.apple.com/v/watch/bo/images/overview/select/product_se__frx4hb13romm_xlarge.png"
                            alt="Product Image 2"
                            style={{ width: '70%', height: '200px',marginLeft:'60px' }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://www.apple.com/v/watch/bo/images/overview/select/product_s10__deak4mdempoy_xlarge.png"
                            alt="Product Image 3"
                            style={{ width: '70%', height: '200px',marginLeft:'60px' }}
                        />
                    </SwiperSlide>
                </Swiper>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Apple Watch Series 4
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        $120.00
                    </Typography>
                    <button className="btn" aria-label="Edit Product">
                        Edit Product
                    </button>
                </CardContent>
            </Card>
        </div>
    );
}
