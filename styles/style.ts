const styles = {
  boxWidth: "lg:max-w-[1268px] w-full",

  heading1:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[56.8px] w-full",
  heading2:
    "font-poppins font-semibold xs:text-[38px] text-[28px] text-black xs:leading-[76.8px] leading-[36.8px] w-full",
  paragraph:
    "font-poppins font-normal text-black text-[18px] leading-[1.667em]",
  paragraph1:
    "font-poppins font-normal text-white text-[18px] leading-[1.667em]",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-[24px] px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-24 mx-6",
  marginXauto: "mx-auto",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export const component = {
  btnPrimary:
    "bg-[#247bfe] xs:w-[50%] md:w-auto w-full text-white px-6 py-3 rounded-xl font-semibold text-[16px] ss:text-[18px] shadow-md transition transform hover:-translate-y-1 duration-500",
  btnSecondary:
    "bg-transparent xs:w-[50%] md:w-auto w-full text-white border border-white px-6 py-3 rounded-xl font-semibold text-[16px] ss:text-[18px] shadow-md hover:bg-white hover:text-black transition transform hover:-translate-y-1 duration-500",
  titleAccent: "text-[#247bfe] font-bold text-[16px] uppercase"
};

export default styles;
