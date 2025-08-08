import PropTypes from 'prop-types';
import { useTheme } from "../../../hooks/DarkMode/DarkMode.jsx";
import MemberCard from './MemberCard.jsx';
import TitleWithBorder from "./TitleWithBorder.jsx";


const MemberSection = ({ title, members }) => {
    const { isDark } = useTheme();

    return (
        <section className="my-12">
            <TitleWithBorder title={title} />
            <div className="flex flex-wrap justify-center md:justify-evenly mx-auto gap-8 md:gap-[5rem]">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className={`opacity-100 translate-y-8 transition-all duration-700 ease-out motion-safe:animate-none scroll-trigger`}
                        style={{ animationDelay: `${index * 200}ms` }}
                    >
                        <MemberCard member={member} index={index} isDark={isDark} />
                    </div>
                ))}
            </div>
        </section>
    );
};

MemberSection.propTypes = {
    title: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MemberSection;
