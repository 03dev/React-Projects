import React, { useContext } from "react";
import styled from 'styled-components'
import { assets } from '../../assets/assets'
import { Context } from "../../context/context";

function Main() {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, } = useContext(Context);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSent()
        }
    };

    return (
        <MainCss>
            <NavCss>
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </NavCss>
            <MainContainerCss>
                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <CardsCss>
                            <div className="card">
                                <p>Suggest beautiful place to see on an upcoming road trip?</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Breifly sumarize this concept: Urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Brainstrom team bonding activities for our work retreat</p>
                                <img src={assets.menu_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Improve the readibility of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </CardsCss>
                    </> :
                    <div className="result">
                        <div className="result-tittle">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
                        </div>
                    </div>
                }

                <MainBottomCss>
                    <div className="search-box" onKeyDown={handleKeyDown}>
                        <input type="text" placeholder="Enter a prompt here"
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                        />
                        <div></div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input ? <img src={assets.send_icon} alt=""
                            onClick={() => onSent()}
                        /> : null}
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its response. You privacy and Gemini Apps
                    </p>
                </MainBottomCss>
            </MainContainerCss>
        </MainCss>
    )
}


const MainCss = styled.div`
    flex: 1;
    min-height: 100vh;
    padding-bottom: 15vh;
    position: relative;
`

const NavCss = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    padding: 20px;
    color: #585858;

    img{
        width: 40px;
        border-radius: 50%;
    }
`

const MainContainerCss = styled.div`
    max-width: 900px;
    margin: auto;
    .greet{
        margin: 50px 0px;
        font-size: 56px;
        color: #c4c7c5;
        font-weight: 500;
        padding: 20px;
    }
    .greet span{
        background: -webkit-linear-gradient(16deg, #4b90ff, #ff5546);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .result{
        padding: 0px 5%;
        max-height: 70vh;
        overflow-y: scroll;
    }
    .result::-webkit-scrollbar{
        display: none;
    }
    .result-tittle{
        margin: 40px 0px;
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .result img{
        width: 40px;
        border-radius: 50%;
    }
    .result-data{
        display: flex;
        align-items: start;
        gap: 20px;
    }
    .loader{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .loader hr{
        border-radius: 4px;
        border: none;
        background-color: #f6f7f8;
        background: linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff);
        background-size: 800px 50px;
        height: 20px;
        animation: loader 3s infinite linear;
    }
    @keyframes loader{
        0%{
            background-position: -800px 0px;
        }
        100%{
            background-position: 800px 0px;
        }
    }
    .result-data p{
        font-size: 17px;
        font-weight: 300;
        line-height: 1.8;
    }
`

const CardsCss = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 15px;
    padding: 20px;
    .card{
        height: 200px;
        padding: 15px;
        background-color: #f0f4f9;
        border-radius: 10px;
        position: relative;
        cursor: pointer;
    }
    .card img{
        width: 35px;
        padding: 5px;
        position: absolute;
        background-color: white;
        border-radius: 20px;
        bottom: 10px;
        right: 10px;
    }
    .card p{
        color: #585858;
        font-size: 17px;
    }
    .card:hover{
        background-color: #dfe4ea;
    }
`

const MainBottomCss = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    max-width: 900px;
    padding: 0px 20px;
    margin: auto;

    .search-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        background-color: #f0f4f9;
        padding: 10px 20px;
        border-radius: 50px;
    }

    img{
        width: 24px;
        cursor: pointer;
    }

    .search-box input{
        flex: 1;
        background-color: transparent;
        border: none;
        outline: none;
        padding: 8px;
        font-size: 18px;
    }

    .search-box div{
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .bottom-info{
        font-size: 13px;
        margin: 15px auto;
        text-align: center;
        font-weight: 300;
    }
    @media (max-width: 600px) {
        input {
            flex: none;
            width: 150px;
        }
        img{
            width: 20px;
        }
        .search-box{
            padding: 5px 10px;
        }
        .search-box div{
            gap: 5px;
        }
    }
`

export default Main;