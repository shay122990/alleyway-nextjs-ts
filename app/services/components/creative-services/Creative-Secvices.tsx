import styles from "./Creative-Services.module.css"
// import ImageBox from "@/components/common/image-box/Image-Box"
const CreativeServices = () => {
  return (
    <div className={styles.creativeServicesContainer}>
        <section className={styles.creativeSection1}>
            {/* <ImageBox/> */}
            <h3>Event Concept & Design </h3>
            <p>We specialize in crafting unforgettable event experiences through innovative concept development and exquisite design. Whether it's a corporate gala, wedding, or private celebration, our expert team brings your vision to life by creating unique themes, stunning visual aesthetics, and immersive environments that captivate your guests.We focus on every detail—from layout and decor to lighting and ambiance—ensuring that your event is not just memorable, but truly extraordinary. Let us transform your ideas into a beautifully designed reality that leaves a lasting impression.</p>
        </section>
        <section className={styles.creativeSection2}>
            {/* <ImageBox/> */}
            <h3>Thematic decor</h3>
            <p>We bring your event to life with our expertly crafted thematic decor, transforming ordinary spaces into extraordinary experiences. Whether it's a whimsical garden party, a glamorous Hollywood soirée, or a vintage-inspired wedding, our team meticulously designs and curates every element to reflect your chosen theme.From bespoke centerpieces and elegant drapery to custom lighting and unique props, we create immersive environments that captivate and transport your guests into a world of imagination and wonder. Let us turn your theme into a visually stunning reality that leaves a lasting impression.</p>
        </section> 
        <section className={styles.creativeSection3}>
            {/* <ImageBox/> */}
            <h3>Entertainment Planning</h3>
            <p></p>We specialize in crafting unforgettable entertainment experiences for your events. Whether it's a corporate gathering, wedding, or private party, we curate the perfect lineup of performers, musicians, and interactive acts tailored to your theme and audience. From live bands to specialty acts, we ensure seamless, engaging entertainment that keeps the energy high and leaves a lasting impression. Let us turn your event into a spectacular celebration with entertainment that truly dazzles.
        </section>
    </div>
  )
}

export default CreativeServices
