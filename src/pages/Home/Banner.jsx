import { easeOut } from "motion";
import { motion } from "motion/react";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";

export default function Banner() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>

          <div className="flex-1">
            <motion.img
              animate={{ y: [50, 100, 50] }}
              transition={{
                duration: 5,
                ease: easeOut,
                repeat: Infinity,
              }}
              src={team1}
              className="max-w-sm rounded-tl-[50px] rounded-r-[50px] shadow-2xl border-l-8 border-b-8 border-blue-600"
            />
            <motion.img
              animate={{ x: [150, 200, 150] }}
              transition={{
                duration: 5,
                ease: easeOut,
                repeat: Infinity,
              }}
              src={team2}
              className="max-w-sm rounded-tl-[50px] rounded-r-[50px] shadow-2xl border-l-8 border-b-8 border-blue-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
