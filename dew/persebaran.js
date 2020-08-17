import React, { useState,useEffect } from 'react'
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";

import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import SideCompDew from './components/SideCompDew';

import numeral from "numeral";
import InfoBoxku from './components/infoBox';
import LineGraph from './components/LineGraph';
import Tableku from './components/Table';

const persebaranDew = () => {
  const [countries, setCountries] = useState([]);
  const [country,setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);


const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

const sortData = (data) => {
    const sortedData = [...data];
    return sortedData.sort((a,b) => (a.cases > b.cases ? -1 : 1))
  }
  

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data)
    })
  },[])

  useEffect(() => {
    const getCountriesData = async()=>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ));

        const sortedData = sortData(data);
        setTableData(sortedData)
        setMapCountries(data)
        setCountries(countries);
      });
    };

    getCountriesData()
  },[]);


  const onCountryChange = async (event)=>{
    const countryCode = event.target.value;
    // setCountry(countryCode);


    const url = 
      countryCode === "worldwide" 
        ? "https://disease.sh/v3/covid-19/all" 
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

      console.log("code => ", countryCode)

      await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);

        // membuat ditengah saat milih lokasi
        // setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        // setMapZoom(4);
      });
    };


  return (
    <div>  
    <Layout>
      <SideCompDew aktif="2"/>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 760 }}>
            <div className="app">
              <div className="app__left">
                <div Name="app__header">
                  <FormControl className="app__dropdown">
                    <Select variant="outlined" onChange={onCountryChange} value={country}>
                    <MenuItem value="worldwide">Dunia</MenuItem>

                      {countries.map((country) => (
                        <MenuItem value={country.value}>{country.name}</MenuItem>
                      ))}
                    </Select> 
                  </FormControl>
                  </div> 
                    
                  <div className="app__stats">
                    <InfoBoxku 
                    // jika diklik berubah berdasarkan kasus
                    onClick={(e) => setCasesType("cases")}
                    active={casesType === "cases"}
                    isRed
                    classN="casesStat"
                    title="Positif" 
                    cases={prettyPrintStat(countryInfo.todayCases)}
                    total={prettyPrintStat(countryInfo.cases)}/>
        
                    <InfoBoxku 
                    onClick={(e) => setCasesType("recovered")}
                    active={casesType === "recovered"}
                    isRed
                    title="Sembuh" 
                    classN="recoveredStat"
                    cases={prettyPrintStat(countryInfo.todayRecovered)}
                    total={prettyPrintStat(countryInfo.recovered)}/>

                    <InfoBoxku 
                    onClick={(e) => setCasesType("deaths")}
                    active={casesType === "deaths"}
                    isRed
                    title="Meninggal"
                    classN="deathsStat" 
                    cases={prettyPrintStat(countryInfo.todayDeaths)}
                    total={prettyPrintStat(countryInfo.deaths)}/>

                  </div>
                  <hr/>
                  <div className="chartCase">
                    <h3 className="app__graphTitle">Pertumbuhan di dunia berdasarkan {casesType}</h3>
                    <LineGraph className="app__graph" casesType={casesType}/>
                  </div>
              </div>

              <Card className="app__right">
              <CardContent>
                <h3>Kasus berdasarkan Negara</h3>
                <Tableku countries={tableData}/>
                {/* <hr/>
                  <h3 className="app__graphTitle">Pertumbuhan berdasarkan {casesType}</h3>
                <LineGraph className="app__graph" casesType={casesType}/> */}
              </CardContent>
            </Card>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
  )
}

export default persebaranDew