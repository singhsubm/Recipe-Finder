import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import axios from 'axios';
import Homepage from './components/Homepage';
import { useSelector } from 'react-redux';
import Fullrecepie from './components/Fullrecepie';
// import {viewMore} from './redux/slices/features/viewMore'
// import { selectedRecepie } from './redux/slices/features/selectedRecepie';

function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [viewmore, setViewmore] = useState(false);
  // const [selectedRecepie, setSelectedRecepie] = useState(null);

  const {search} = useSelector((state)=> state.search)
  // const {selectedRecepie} = useSelector((state) => state.selectedRecepie);
  const {viewMore} = useSelector((state) => state.viewMore)

  console.log(`${API_URL}${API_KEY}/search.php?s=${search}`);
  const fetchData = async(search)=>{
    setLoading(true);
    try {
      const apiData = axios.get(`${API_URL}${API_KEY}/search.php?s=${search}`);
      const response = await apiData;
      setData(response.data.meals);
      console.log(response.data.meals);
      
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData(search)
  }, [search]);
  return (
    <>
    <div className='w-full min-h-[100vh] bg-[#111827] text-white px-5 lg:px-20 p-5'>
      <Navbar/>
      {
        !viewMore ? (<Homepage data={data} loading={loading}/>): 
        (<Fullrecepie />)
      }
    </div>
    </>
  )
}

export default App
