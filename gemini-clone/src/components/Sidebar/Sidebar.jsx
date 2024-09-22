import React, { useContext, useState } from "react";
import styled from 'styled-components'
import { assets } from '../../assets/assets'
import { Context } from "../../context/context";

function Sidebar() {

    const [extended, setExtended] = useState(false);
    const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    return (
        <SidebarCss>
            <TopCss>
                <img className="menu" src={assets.menu_icon} alt=""
                    onClick={() => setExtended(!extended)}
                />
                <div className="new-chat"
                    onClick={() => newChat()}
                >
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? <div className="recent">
                    <p className="recent-tittle">Recent</p>
                    {previousPrompt.map((item, index) => {
                        return (
                            <div className="recent-entry"
                                onClick={() => loadPrompt(item)}
                            >
                                <img src={assets.message_icon} alt="" />
                                <p>{item.slice(0, 18)}...</p>
                            </div>
                        )
                    })}

                </div> : null}
            </TopCss>
            <BottomCss>
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}

                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}

                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Setting</p> : null}

                </div>
            </BottomCss>
        </SidebarCss>
    )
}

const SidebarCss = styled.div`
    min-height: 100vh;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #f0f4f9;
    padding: 10px;
    img{
        width: 20px;
    }
    .recent{
        display: flex;
        flex-direction: column;
        animation: fadeIn 1.5s;
    }
    .recent-tittle{
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .recent-entry{
        display: flex;
        align-items: start;
        gap: 10px;
        padding: 10px;
        padding-right: 40px;
        border-radius: 50px;
        color: #282828;
        cursor: pointer;
    }

    .recent-entry:hover{
        background-color: #e2e6eb;
    }
    @keyframes fadeIn{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    @media (max-width: 600px) {
        display: none
    }
`

const TopCss = styled.div`
    .menu{
        display: block;
        margin-left: 10px;
        cursor: pointer;
    }
    .new-chat{
        margin-top: 50px;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 15px;
        background-color: #e6eaf1;
        border-radius: 50px;
        font-size: 14px;
        color: grey;
        cursor: pointer;
    }
    
`
const BottomCss = styled.div`
    display: flex;
    flex-direction: column;
    .bottom-items{
        padding-right: 10px;
        cursor: pointer;
    }
`

export default Sidebar;