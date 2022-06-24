import AboutContentStyled from "./AboutContentStyled"

function AboutContent(){

    return(
        <AboutContentStyled>
            <div className={`container`}>
                <section>
                    <div className={`title_container`}>
                        <h1>COVID APP</h1>
                        <p>Covid ID App ini ditujukan sebagai UAS Semester 6 Matakuliah Pemrograman Frontend STT Nurul Fikri</p>
                        <br />
                        <div>
                            <p><i>Made with <span className={"text-red"}>&#9829;</span></i> & <i class="fa">&#xf0f4;</i> by : Ardelingga</p>
                        </div>
                        
                    </div>
                </section>
            </div>
        </AboutContentStyled>
    )
}

export default AboutContent