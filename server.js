const express = require('express');
const app = express();

// Data Liga Champions UEFA
const championsLeagueData = [
    { season: '1955-1956', champion: 'Real Madrid' },
    { season: '1956-1957', champion: 'Real Madrid' },
    { season: '1957-1958', champion: 'Real Madrid' },
    { season: '1958-1959', champion: 'Real Madrid' },
    { season: '1959-1960', champion: 'Real Madrid' },
    { season: '1960-1961', champion: 'SL Benfica' },
    { season: '1961-1962', champion: 'SL Benfica' },
    { season: '1962-1963', champion: 'AC Milan' },
    { season: '1963-1964', champion: 'Inter Milan' },
    { season: '1964-1965', champion: 'Inter Milan' },
    { season: '1965-1966', champion: 'Real Madrid' },
    { season: '1966-1967', champion: 'Celtic FC' },
    { season: '1967-1968', champion: 'Manchester United' },
    { season: '1968-1969', champion: 'AC Milan' },
    { season: '1969-1970', champion: 'RV & AV Feijenoord' },
    { season: '1970-1971', champion: 'Ajax Amsterdam' },
    { season: '1971-1972', champion: 'Ajax Amsterdam' },
    { season: '1972-1973', champion: 'Ajax Amsterdam' },
    { season: '1973-1974', champion: 'Bayern Munich' },
    { season: '1974-1975', champion: 'Bayern Munich' },
    { season: '1975-1976', champion: 'Bayern Munich' },
    { season: '1976-1977', champion: 'Liverpool FC' },
    { season: '1977-1978', champion: 'Liverpool FC' },
    { season: '1978-1979', champion: 'Nottingham Forest' },
    { season: '1979-1980', champion: 'Nottingham Forest' },
    { season: '1980-1981', champion: 'Liverpool FC' },
    { season: '1981-1982', champion: 'Aston Villa' },
    { season: '1982-1983', champion: 'Hamburger SV' },
    { season: '1983-1984', champion: 'Liverpool FC' },
    { season: '1984-1985', champion: 'Juventus FC' },
    { season: '1985-1986', champion: 'Steaua Bukarest' },
    { season: '1986-1987', champion: 'FC Porto' },
    { season: '1987-1988', champion: 'PSV Eindhoven' },
    { season: '1988-1989', champion: 'AC Milan' },
    { season: '1989-1990', champion: 'AC Milan' },
    { season: '1990-1991', champion: 'Red Star Belgrade' },
    { season: '1991-1992', champion: 'FC Barcelona' },
    { season: '1992-1993', champion: 'Olympique Marseille' },
    { season: '1993-1994', champion: 'AC Milan' },
    { season: '1994-1995', champion: 'Ajax Amsterdam' },
    { season: '1995-1996', champion: 'Juventus FC' },
    { season: '1996-1997', champion: 'Borussia Dortmund' },
    { season: '1997-1998', champion: 'Real Madrid' },
    { season: '1998-1999', champion: 'Manchester United' },
    { season: '1999-2000', champion: 'Real Madrid' },
    { season: '2000-2001', champion: 'Bayern Munich' },
    { season: '2001-2002', champion: 'Real Madrid' },
    { season: '2002-2003', champion: 'AC Milan' },
    { season: '2003-2004', champion: 'FC Porto' },
    { season: '2004-2005', champion: 'Liverpool FC' },
    { season: '2005-2006', champion: 'FC Barcelona' },
    { season: '2006-2007', champion: 'AC Milan' },
    { season: '2007-2008', champion: 'Manchester United' },
    { season: '2008-2009', champion: 'FC Barcelona' },
    { season: '2009-2010', champion: 'Inter Milan' },
    { season: '2010-2011', champion: 'FC Barcelona' },
    { season: '2011-2012', champion: 'Chelsea FC' },
    { season: '2012-2013', champion: 'Bayern Munich' },
    { season: '2013-2014', champion: 'Real Madrid' },
    { season: '2014-2015', champion: 'FC Barcelona' },
    { season: '2015-2016', champion: 'Real Madrid' },
    { season: '2016-2017', champion: 'Real Madrid' },
    { season: '2017-2018', champion: 'Real Madrid' },
    { season: '2018-2019', champion: 'Liverpool FC' },
    { season: '2019-2020', champion: 'Bayern Munich' },
    { season: '2020-2021', champion: 'Chelsea FC' },
    { season: '2021-2022', champion: 'Real Madrid' },
    { season: '2022-2023', champion: 'Manchester City' },
    { season: '2023-2024', champion: 'Borussia Dortmund' }
];

// Endpoint untuk mendapatkan data Liga Champions UEFA
app.get('/championsleague', (req, res) => {
    res.json(championsLeagueData);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
