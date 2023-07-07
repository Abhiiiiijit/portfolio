// import React from "react";
// import "./testimonial.css";
// import { Navigation,Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import img1 from "../../assets/Me/me_2.jpg";
// import img2 from "../../assets/Me/me_2.jpg";
// export default function Testimonial() {
//   const peers = [
//     {
//       avatar: img1,
//       name: "XYZ",
//       review:
//         "XYZ.",
//     },
//     {
//       avatar: img2,
//       name: "ABC",
//       review:
//         "ABC",
//     },
//   ];
//   return (
//     <section id="testimonial">
//       <p style={{ textAlign: "center" }}>Review Form Clients</p>
//       <h2>Testimonial</h2>
//       <Swiper
//         className="container testimonials_container"
//         navigation={true}
//         modules={[Navigation]}
//         spaceBetween={40}
//         slidesPerView={1}
//       >
//         {peers.map(({ avatar, name, review }, index) => {
//           return (
//             <SwiperSlide key={index} className="testimonial">
//               <div className="peer_avatar">
//                 <img src={avatar} alt={name} />
//               </div>
//               <h5 className="peer_name">{name}</h5>
//               <small className="peer_review">{review}</small>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </section>
//   );
// }
