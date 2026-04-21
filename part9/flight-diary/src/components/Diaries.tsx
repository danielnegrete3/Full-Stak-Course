import type { DiaryType } from "../../types"
import { DiaryContent } from "./DiaryContent"

interface Props {
    diaries:DiaryType[]
}

export const Diaries = ({diaries}:Props) => {

    return(
        <>
            {diaries.map(diary=><DiaryContent diary={diary} key={diary.id}/>)}
        </>
    )
}