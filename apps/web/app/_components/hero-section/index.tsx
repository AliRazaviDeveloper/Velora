import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className=" bg-pattern  bg-center bg-no-repeat mt-5 xl:mt-20 xl:bg-left">
      <div className="container flex flex-col-reverse items-center xl:flex-row">
        <div className="flex flex-col text-center gap-5 pb-5 mt-12 px-2 xl:text-right">
          <h3 className="dark:text-info text-xl lg:text-2xl">
            خوش آمدی به ...
          </h3>
          <h1 className="font-black text-3xl lg:text-5xl gradiant-custom">
            مسیر صعود به قله های برنامه نویسی
          </h1>
          <p className="text-lg font-bold leading-8 max-w-2xl mx-auto xl:mx-0">
            هر جای مسیر برنامه نویسی که باشی , باهم راهی استادهای با تجربه بسیار
            عالی و با تجربه کاربردی در توسعه و تحلیل پروژه های باشی می باشی. می
            تونی بدون محدودیت به قلعه های بالاتر صعود کنی . ما همیشه هواتو داریم
            .
          </p>

          <Image
            src="/images/frameworks.png"
            width={412}
            height={39}
            className="grayscale mx-auto mt-4 opacity-70 xl:m-0"
            alt=""
          />
        </div>
        <Image
          src="/images/programmer-landing.svg"
          width={702}
          height={521}
          alt="برنامه نویس"
        />
      </div>
    </section>
  );
};

export default HeroSection;
