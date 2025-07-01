// c:\xampp\htdocs\react-stable-versions\src\components\InfoCardBG.tsx
import { Card } from "antd";
import { useTheme } from "../ThemeContext";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import FadeContent from "../blocks/Animations/FadeContent/FadeContent";

interface InfoCardBGProps {
  titleText: string;
  icon: React.ReactNode;
  lightBgColor: string;
  darkBgColor: string;
  dailyText: string;
  dailyValue: string;
  weeklyText: string;
  weeklyValue: string;
  containerWidth?: string;
  classNameCard?: string;
  // classNameHeader?: string;
  // classNameContent?: string;
  // classNameLeftFirst?: string;
  // classNameRightFirst?: string;
  // classNameLeftSecond?: string;
  // classNameRightSecond?: string;
}

const InfoCardBG: React.FC<InfoCardBGProps> = ({
  titleText,
  icon,
  lightBgColor,
  darkBgColor,
  dailyText,
  dailyValue,
  weeklyText,
  weeklyValue,
  containerWidth = 'w-full',
  classNameCard = ''
}) => {
  const { isDarkMode } = useTheme();
  return (
    <FadeContent
      className={containerWidth}
      blur={true}
      duration={500}
      easing="ease-out"
      initialOpacity={0}
    >
      <Card
        bordered={false}
        className={`w-full rounded-[0.5rem] overflow-hidden shadow-custom p-0 m-0 ${classNameCard}`}
        styles={{
          header: {
            backgroundColor: ` ${isDarkMode ? lightBgColor : darkBgColor}`,
            padding: 0,
            borderBottom: "none",
            height: "auto",
            minHeight: "auto",
          },
          body: {
            padding: "0",
          },
        }}
        title={
          <div
            className={`p-[0.3rem] md:px-[0.4rem] lg:px-[0.6rem] flex justify-between items-center text-white ${
              isDarkMode ? lightBgColor : darkBgColor
            }  text text-xs md:text-sm lg:text-base font-medium 
            `}
          >
            <ShinyText
              text={titleText}
              disabled={false}
              speed={3}
              className={
                isDarkMode ? "custom-class  light-mode" : "custom-class"
              }
            />
            {icon}
          </div>
        }
      >
        <div className="p-[0.5rem] md:p-[0.6rem] lg:p-[0.8rem]">
          <div className="text-xs md:text-base lg:text-lg  flex justify-between font-bold mb-2">
            <span>{dailyText}</span>
            <span>{dailyValue}</span>
          </div>
          <div className="text-xs md:text-sm lg:text-base flex justify-between">
            <span>{weeklyText}</span>
            <span>{weeklyValue}</span>
          </div>
        </div>
      </Card>
    </FadeContent>
  );
};

export default InfoCardBG;
