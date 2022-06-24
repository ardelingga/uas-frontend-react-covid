import ProvincesStyled from "./ProvincesStyled";

function Provinces(props){

    const {provinces} = props;
    let iteration = 1;
    return(
        <ProvincesStyled>
            <div className={`container`}>
                <section>
                    <div className={`title_container`}>
                        <h1>Provinsi</h1>
                        <p>Data Covid Berdasarkan Provinsi</p>
                    </div>
                    <div className={`table_container`}>
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Provinsi</th>
                                    <th>Positif</th>
                                    <th>Sembuh</th>
                                    <th>Dirawat</th>
                                    <th>Meninggal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                provinces.map(function(province){
                                    return (
                                        <tr key={iteration++}>
                                            <td>{iteration++}</td>
                                            <td>{province.kota}</td>
                                            <td>{province.kasus}</td>
                                            <td>{province.sembuh}</td>
                                            <td>{province.dirawat}</td>
                                            <td>{province.meninggal}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </ProvincesStyled>
    )
}

export default Provinces