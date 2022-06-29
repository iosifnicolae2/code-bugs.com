import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from "react";
import { LottiePlayer } from "lottie-web";

const ErrorPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import("lottie-web").then(Lottie => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "lottiefiles/90767-internal-server-error.json",
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <Layout>
      <div className={"flex justify-center items-center h-[60vh]"}>
        <div className={"w-[1000px] m-auto p-[50px]"} ref={ref} />
      </div>
    </Layout>
  );
};

export default ErrorPage;
