import { TaskType } from "./task.types"

export type ModalComponentProps = {
    toggleModal:()=>void
    tasks:TaskType[]
    selectedTaskId:string

}