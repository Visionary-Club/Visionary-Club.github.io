import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTheme } from "../../hooks/DarkMode/DarkMode.jsx";
import TitleSection from "../../components/TitleSection/TitleSection.jsx";
import MentorSection from './components/MentorSection.jsx';
import MemberSection from './components/MemberSection.jsx';

const MembersPage = () => {
    const [teamData, setTeamData] = useState(null);
    const { isDark } = useTheme();

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/o-Erebus/Visionary-Club.github.io/refs/heads/development/public/team-data.json')//axios.get('/team-data.json')
            //axios.get('/team-data.json')
            .then(response => {

                setTeamData(response.data);
            })
            .catch(error => {
                console.error("Error fetching team data:", error);
            });
    }, []);

    return (
        <main
            className={`min-h-dvh w-dvw lg:pb-16 px-8 sm:px-12 lg:px-16 transition-colors pb-8 ${isDark ? 'bg-transparent' : 'bg-gray-100'}`}
        >
            <TitleSection title="OUR_TEAM" lightColor={"bg-yellow-500"} />
            <div className="max-w-7xl mx-auto space-y-16">
                {!teamData ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <MemberSection title="Mentors" members={teamData.mentors} />
                        <MemberSection title="Leadership" members={teamData.leadership} />
                        <MemberSection title="Club Leads" members={teamData.clubLeads} />
                        <MemberSection title="Core Members" members={teamData.coreMembers} />
                        <MemberSection title="Management Team" members={teamData.managementTeam} />
                    </>
                )}
            </div>
        </main>
    );
};


export default MembersPage;
