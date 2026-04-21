import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import type { DiaryType, NewDiary } from "../types"
import { Diaries } from "./components/Diaries";
import { ErrorMassage } from "./components/ErrorMessage";
import { NewDiaryForm } from "./components/NewDiaryForm";


function App() {
  const [diaries,setDiaries] = useState<DiaryType[]>([]);
  const [error,setError] = useState<null|string>(null);

  useEffect(()=>{
    
    axios.get<DiaryType[]>('http://localhost:3000/api/diaries').then((res)=>{
        if(res.status === 200){
          setDiaries(res.data)
          setError(null)
        }
        if(res.status > 399){
          setError(res.statusText)
        }
    }).catch((error:AxiosError) => setError(error.response?.data as string))

  },[])

  const newDiaryFunction = ({newDiary}:{newDiary:NewDiary}) => {
      axios.post<DiaryType>('http://localhost:3000/api/diaries',newDiary).then((res)=>{
        if(res.status === 201 || res.status === 200){
          setDiaries([...diaries,res.data])
          setError(null)
        }
        if(res.status > 399){
          setError(res.statusText)
        }
    }).catch((error:AxiosError) => setError(error.response?.data as string))
  }

  return (
    <>
      <h1>New Diary</h1>
      <NewDiaryForm submitFunc={newDiaryFunction}/>
      <ErrorMassage error={error}/>
      <h1>Diary Entries</h1>
      <Diaries diaries={diaries}/>
    </>
  )
}

export default App
