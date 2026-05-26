'use client'

import {AnimatedTestimonials} from "../components/animated-testimonials";
import "../globals.css";

export default function AboutPage() {
    const testimonials = [

        {
            quote:
                "As the president of our association, he brings a wealth of experience and skill to his role. With a strong ability to connect and work effectively with young people, he has served multiple times as a trainer, particularly focusing on youth groups. Throughout his career, he has honed his organizational, communication, conflict resolution, and problem management competencies while leading various professional projects.\n" +
                "His expertise extends well beyond training; he has garnered significant experience in project management, where he has successfully overseen numerous initiatives from inception to completion. His work in youth community development has been impactful, fostering growth and engagement among young individuals. Additionally, his adeptness at managing voluntary work has allowed him to mobilize and inspire volunteers, driving forward the mission and objectives of our organization with dedication and enthusiasm.",
            name: "Gábor Szilágyi",
            designation: "",
            src: "/gabor-szilagyi.jpg",
        },
        {
            quote:
                "She has various experience in Erasmus+ and took part in over 30 mobilities, such as youth exchanges and training courses. She has led different kinds of groups and facilitated 8 projects. She has a patient, reliable personality and an open-minded approach to initiatives.",
            name: "Sándor Vanda",
            designation: "Special needs education therapist, currently a masters student as behaviour analyst",
            src: "/vanda-sandor.jpg",
        },
        {
            quote:
                "Laci bridges the gap between IT and social work, using technical skills to foster community engagement. Having participated in several mobility projects across Europe, he is passionate about embracing new cultures and fostering international collaborations. Focused and committed when it counts, but always open to a new adventure and a good time.",
            name: "Gulyás László",
            designation: "IT support specialist",
            src: "/laszlo-gulyas.png",
        },
        {
            quote:
                "She is a  graduating social work student who has participated in Erasmus+ exchanges several times. She enjoys new challenges and getting to know different cultures. She works well in a team and is fully accepting, patient, and open-minded toward others. She loves to laugh but is also an excellent listener when needed.",
            name: "Dudok Dorina",
            designation: "",
            src: "/dorina-dudok.jpg",
        },
        {
            quote:
                "Currently doing his MSc studies in geology. Even though he only participated in a few exchanges so far, his curiosity, love for travel and willingness to learn makes him eager for new experiences. He works well in groups and he can easily find the common ground with others.",
            name: "Orosz Gábor",
            designation: "",
            src: "/gabor-orosz.jpg",
        },
        {
            quote:
                "Working in sales with a background in communication. She has participated in a few projects, showcasing her creativity and passion for innovative ideas. Always open-minded, she thrives in dynamic environments and loves collaborating with others. Having experience in tutoring enables her to easily find common ground with youngsters who have difficulties. She enjoys planning trips, exploring new cultures  and destinations.",
            name: "Juhász Janka",
            designation: "",
            src: "/janka-juhasz.jpg",
        },
        {
            quote:
                "Anna Szerencsés is studying to become a midwife. In addition, she volunteers at an association that supports children with serious and chronic illnesses. As a result, she is a very open and energetic personality who enjoys challenges and new experiences. She has already participated in several Erasmus+ projects, where she gained valuable experiences and knowledge. She works well in a team but is also capable of handling challenging situations independently.",
            name: "Szerencsés Anna",
            designation: "",
            src: "/anna-szerencses.jpg",
        },

    ];
    return (
        <div className="responsive-height">
            <h1 className="m-5 title text-center self-start">Rólunk</h1>
            <AnimatedTestimonials testimonials={testimonials}/>
        </div>
    );
}