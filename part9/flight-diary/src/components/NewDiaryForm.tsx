import { useState } from "react"
import { VisibilityType, WeatherTypes, type NewDiary } from "../../types"

interface Props{
    submitFunc:({newDiary}:{newDiary:NewDiary})=>void
}

export const NewDiaryForm = ({submitFunc}:Props) => {
    const [date,setDate] = useState('')
    const [weather,setWeather] = useState<WeatherTypes>(WeatherTypes.Cloudy)
    const [visibility,setVisibility] = useState<VisibilityType>(VisibilityType.Good)
    const [comment,setComment] = useState('')

    const submition = (data:React.SyntheticEvent) => {
        data.preventDefault()
        const newDiary = {
            date,
            weather,
            visibility,
            comment
        }

        submitFunc({newDiary})
        setDate('')
        setComment('')
    }

    return(
        <form style={{display:'flex',gap:3,flexFlow:'column'}} onSubmit={submition}>
            <input type="date" placeholder="Date" name="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
            <div style={{display:'flex',gap:3}}>
                <span>Weather: </span> 
                {
                    Object.entries(WeatherTypes).map(([key,value])=>
                        <div>
                            <label htmlFor={key}>{key}</label>
                            <input type="radio" id={key} name='weather' value={value} checked={value===weather} onChange={() => setWeather(value)}/>
                        </div>
                    )
                }
            </div>

            <div style={{display:'flex',gap:3}}>
                <span>visibility: </span> 
                {
                    Object.entries(VisibilityType).map(([key,value])=>
                        <div>
                            <label htmlFor={key}>{key}</label>
                            <input type="radio" id={key} name='visibility' value={value} checked={value===visibility} onChange={() => setVisibility(value)}/>
                        </div>
                    )
                }
            </div>

            <input type="text" placeholder="Comment" name="comment" value={comment} onChange={(e)=>setComment(e.target.value)}/>
            <button>submit</button>
        </form>
    )
}