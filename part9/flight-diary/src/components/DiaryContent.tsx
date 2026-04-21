import type { DiaryType } from "../../types"

interface Props {
    diary:DiaryType
}

export const DiaryContent = ({diary}:Props) => {

    return(
        <>
            <h2>{diary.date}</h2>
            <p>
                Visibility: {diary.visibility}
                <br />
                Weather: {diary.weather}
            </p>
        </>
    )
}